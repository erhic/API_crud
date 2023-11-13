import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const users = [
  {
    firstName: "Max",
    lastName: "Will",
    age: 19,
  },
  {
    firstName: "Jane",
    lastName: "Marg",
    age: 23,
  },
];

router.get("/", (req, res) => res.send(users));
router.post("/", (req, res) => {
  console.log(req.body);
  const usr = req.body;
  // const userId = uuidv4();
  // const userWithId = {...usr,id:userId}
  users.push({ ...usr, id: uuidv4() }); // this is refactoring of above lines of codes

  res.send(`User with name ${usr.firstName} successfully added!`);
});

export default router;
