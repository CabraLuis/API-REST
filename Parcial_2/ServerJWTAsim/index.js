const express = require("express");
const app = express();
const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')

app.use(express.json())

app.post("/register", (req, res) => {
  const token = jwt.sign(req.body.username, fs.readFileSync(path.join(__dirname,"/privada.pem")),{algorithm:'RS256'})
  res.json(token)
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, fs.readFileSync(path.join(__dirname,"/publica.pem")), (err, user) => {
    if (err) return res.sendStatus(403)

    req.user = user

    next()
  })
}

app.get('/data', authenticateToken, (req, res) => {
  res.send('Token valido')
})

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
