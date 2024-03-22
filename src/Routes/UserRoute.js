const { Router } = require("express");
const {
  postUser,
  getUsers,
  getUserId,
  delUser,
  updateUserProfile,
} = require("../Handlers/userHandler/userHandler");

const routerUser = Router();

routerUser.post("/", postUser);
routerUser.get("/", getUsers);
routerUser.get("/:id", getUserId);
routerUser.delete("/:id", delUser);
routerUser.put("/", updateUserProfile);

module.exports =  routerUser ;
