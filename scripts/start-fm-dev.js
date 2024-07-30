#!/usr/bin/env node
const config = require("../widget.config");

const { widgetName, startDevScript, file, server } = config;

const open = require("open");
const path = require("path");

const fileUrl = `fmp://${server}/${file}?script=${startDevScript}&param=turnOn`;

// const thePath = path.join(__dirname, "../", "dist", "index.html");
// const params = { widgetName, thePath };
const url = fileUrl;
open(url);
