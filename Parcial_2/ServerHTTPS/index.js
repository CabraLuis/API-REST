const express = require("express");
const app = express();
const https = require('node:https')
const fs = require('fs')
const path = require('path')

const options = {
  key: fs.readFileSync(path.join(__dirname,"/certificados/key.pem")),
  cert: fs.readFileSync(path.join(__dirname,"/certificados/cert.pem")),
}

app.get("/", (req, res, next) => {
  res.json({status:"Exito"})
});

https.createServer(options,app).listen(3000,()=>{console.log("Server on 3000")})