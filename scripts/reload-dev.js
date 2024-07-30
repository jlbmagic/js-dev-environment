#!/usr/bin/env node
const config = require("../widget.config");

const { widgetName, reloadScript, file, server } = config;

const open = require("open");
const path = require("path");

const fileUrl = `fmp://${server}/${file}?script=${reloadScript}`;

// const thePath = path.join(__dirname, "../", "dist", "index.html");
// const params = { widgetName, thePath };
const url = fileUrl;
open(url);
