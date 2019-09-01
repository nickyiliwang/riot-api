const express = require("express");
const axios = require("axios");
const app = express();
// app.use(express.json());
const cors = require("cors");
app.use(cors());

const riot = axios.create({
  baseURL: "https://na1.api.riotgames.com/"
});

// /lol/summoner/v4/summoners/by-account/{encryptedAccountId}

const KEY = "RGAPI-14a9768f-f530-42af-a825-0609d73a9caf";
const NAME = "ChanL";
const ID = "3c3JB_krmk2bzdg7u9wu1K9qW4UzsGLGDcoc_CEFDRU";

// app.get("/", (req, res) => {
//   riot
//     .get(`lol/summoner/v4/summoners/by-name/${NAME}?api_key=${KEY}`)
//     .then(response => {
//       res.send(response.data);
//     })
// });

// app.get("/match", (req, res) => {
//   riot
//     .get(`lol/match/v4/matchlists/by-account/${ID}?api_key=${KEY}`)
//     .then(response => {
//      return res.send(response.data)
//     })
// });

app.post("/", (req, res) => {
  const { user } = req.body;
  res.sent(console.log(`User Received ${user}`));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
