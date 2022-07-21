const express = require("express");
const associadoService = require("../service/associadoService");

const router = express.Router();

router.post("/associados", async (req, res, next) => {
  const data = req.body;
  console.log(req.body);
  try {
    const newAssociado = await associadoService.saveAssociado(data);
    res.status(201).json(newAssociado);
  } catch (e) {
    next(e);
  }
});

router.get("/associados/:codigo", async (req, res, next) => {
  try {
    const associado = await associadoService.getAssociado(req.params.codigo);
    res.status(201).json(associado);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
