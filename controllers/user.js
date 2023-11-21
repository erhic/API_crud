import { v4 as uuidv4 } from "uuid";

let users = [];
export const getUsers = (req, res) => res.send(users);

export const createUser = (req, res) => {
  console.log(req.body);
  const usr = req.body;
  users.push({ ...usr, id: uuidv4() });
  res.send(`User with name ${usr.firstName} successfully added!`);
};

export const getUser = (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const foundUser = users.find((usrs) => usrs.id === id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id != id);
  res.send(`User with id ${id} deleted Successfuly`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);
  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`User with ${id} and ${firstName} updated Successfully!!`);
};
