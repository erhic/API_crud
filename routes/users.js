import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const users = [];

router.get("/", (req, res) => res.send(users));

router.post("/", (req, res) => {
  console.log(req.body);
  const usr = req.body;
  // const userId = uuidv4();
  // const userWithId = {...usr,id:userId}
  users.push({ ...usr, id: uuidv4() }); // this is refactoring of above lines of codes

  res.send(`User with name ${usr.firstName} successfully added!`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const foundUser = users.find((usrs) => usrs.id === id);
  res.send(foundUser);
});

router.delete("/", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id === id);
  res.send(`User with id ${user.id} deleted Successfuly`);
});
export default router;
