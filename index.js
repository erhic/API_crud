import express from "express"; // es6
import bodyParser from "body-parser"; // allow us to tale post request body
import userRoutes from "./routes/users.js";

const app = express(); // initialize our app
const PORT = 3000;

app.use(bodyParser.json()); //telling that will use json format data in our body
app.use("/users", userRoutes);

app.get("/", (req, res) => res.send("hello homage "));

app.listen(PORT, () =>
  console.log(`Server running on port : http://localhost:${PORT}`)
);
