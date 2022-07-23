const express = require("express");
const emprestimoService = require("../service/emprestimoService");

const router = express.Router();

router.post("/emprestimos", async (req, res, next) => {
  const data = req.body;
  console.log(req.body);
  try {
    const newEmprestimo = await emprestimoService.saveEmprestimo(data);
    res.status(201).json(newEmprestimo);
  } catch (e) {
    next(e);
  }
});

router.post("/devolverExemplar", async (req, res, next) => {
  try {
    const multa = await emprestimoService.devolverExemplar(req.body);
    res.status(200).json(multa);
  } catch (e) {
    console.log(e);
  }
});

router.get("/emprestimosAtrasados", async (req, res, next) => {
  try {
    const emprestimosAtrasados = await emprestimoService.buscarAtrasados();
    res.status(200).json(emprestimosAtrasados);
  } catch (e) {
    console.log(e);
  }
});

router.get("/emprestimos/:codigo", async (req, res, next) => {
  try {
    const emprestimo = await emprestimoService.getEmprestimo(req.params.codigo);
    res.status(201).json(emprestimo);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
