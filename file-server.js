console.log("start file-server");
const express = require("express");
const app = express();
const fs = require("fs");
const path = require('path');
const port = process.env.PORT || 3000;
app.use('/', express.static(path.join(__dirname,'src','.vuepress','dist')));
app.listen (port,()=> console.log (`------------server running ${require('os').hostname}:${port}------------`));