// Static Express server
const express = require('express');
const http = require('http');

// Create HTTP Server
const app = express();
const server = http.Server(app);

// Server "app" directory
app.use(express.static(`${__dirname}/../app`));
