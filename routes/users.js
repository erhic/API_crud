import express from "express";

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
  users.push(usr);
  console.log(usr + "users added");

  res.send(`User with name ${usr.firstName} successfully added!`);
});

export default router;
