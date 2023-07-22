const express = require("express");
const cors = require("cors");
const app = express();
const TrainRouter = require("./Routers/TrainRouter.js")

app.use(express.json());
app.use(cors());


app.use("/trainlist",TrainRouter)

app.listen(3001, () => {
  console.log("Server Started");
});