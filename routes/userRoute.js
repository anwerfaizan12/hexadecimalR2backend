const express =  require("express");
const {getData, getPosts} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.get('/data',getData);

userRouter.get('/posts/:id',getPosts);

module.exports = userRouter;