const express = require("express");
const funcionarioService = require("../service/funcionarioService");

const router = express.Router();

router.post("/funcionarios", async (req, res, next) => {
  const data = req.body;
  console.log(req.body);
  try {
    const newFuncionario = await funcionarioService.saveFuncionario(data);
    res.status(201).json(newFuncionario);
  } catch (e) {
    next(e);
  }
});

router.get("/funcionarios/:codigo", async (req, res, next) => {
  try {
    const funcionario = await funcionarioService.getFuncionario(
      req.params.codigo
    );
    res.status(201).json(funcionario);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
