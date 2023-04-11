import express from "express";
const routes = require("./src/routes")

const app = express();
app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
    res.send("Home page.")
})

app.use("/api/v1/students", routes);

app.listen(port, () => {
    console.log(`server listening on port ${port}...`)
})