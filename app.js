const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true
}))

const userRouter = require("./routes/userRoute");

app.use("/user",userRouter);

module.exports = app;