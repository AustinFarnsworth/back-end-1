const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());



app.get("/api/users", (req, res) => {
    let friends = ["Austin", "Blake", "Josh", "Peter"];
    res.status(200).send(friends);
});

// app.get("/weather/:temperature", (req, res) => {
//     const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
//     res.status(200).send(phrase);
// })

// with object destructuring
app.get("/weather/:temperature", (req, res) => {
const { temperature } = req.params; 
const phrase = `<h3>It was ${temperature} today</h3>`;
res.status(200).send(phrase);
})



app.listen(5000, () => 
console.log("Server running on port 5000"));

