const express = require("express");
const publicacaoService = require("../service/publicacaoService");

const router = express.Router();

router.post("/publicacaos", async (req, res, next) => {
  const data = req.body;
  console.log(req.body);
  try {
    const newPublicacao = await publicacaoService.savePublicacao(data);
    res.status(201).json(newPublicacao);
  } catch (e) {
    next(e);
  }
});

router.get("/publicacaos/:codigo", async (req, res, next) => {
  try {
    const publicacao = await publicacaoService.getPublicacao(req.params.codigo);
    res.status(201).json(publicacao);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
