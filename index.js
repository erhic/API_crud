import express from "express"; // es6
import bodyParser from "body-parser"; // allow us to tale post request body

const app = express(); // initialize our app
const PORT = 5000;

app.use(bodyParser.json()); //telling that will use json format data in our body
app.listen(PORT, () =>
  console.log(`Server running on port :http://localhost${PORT}`)
);
