const express = require("express");
const reservaService = require("../service/reservaService");

const router = express.Router();

router.post("/reservas", async (req, res, next) => {
  const data = req.body;
  console.log(req.body);
  try {
    const newReserva = await reservaService.saveReserva(data);
    res.status(201).json(newReserva);
  } catch (e) {
    next(e);
  }
});

router.get("/reservas/:codigo", async (req, res, next) => {
  try {
    const reserva = await reservaService.getReserva(req.params.codigo);
    res.status(201).json(reserva);
  } catch (e) {
    next(e);
  }
});

router.get("/reservas/consulta/:isbn", async (req, res, next) => {
  try {
    const reserva = await reservaService.getReservasByIsbn(req.params.isbn);
    res.status(201).json(reserva);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
