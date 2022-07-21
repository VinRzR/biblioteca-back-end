const express = require("express");
const exemplarService = require("../service/exemplarService");

const router = express.Router();

router.post("/exemplars", async (req, res, next) => {
  const data = req.body;
  console.log(req.body);
  try {
    const newExemplar = await exemplarService.saveExemplar(data);
    res.status(201).json(newExemplar);
  } catch (e) {
    next(e);
  }
});

router.get("/exemplars/:codigo", async (req, res, next) => {
  try {
    const exemplar = await exemplarService.getExemplar(req.params.codigo);
    res.status(201).json(exemplar);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
