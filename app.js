const express = require("express");

const app = express();

app.use(express.json());
app.use("/", require("./server/routes/associadoRoutes"));
//teste
app.use("/", require("./server/routes/emprestimoRoutes"));
app.use("/", require("./server/routes/exemplarRoutes"));
app.use("/", require("./server/routes/funcionarioRoutes"));
app.use("/", require("./server/routes/publicacaoRoutes"));
app.use("/", require("./server/routes/reservaRoutes"));

app.listen(process.env.PORT || 3000);
