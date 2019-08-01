/*********************************

    Alee Productions Website: Website for Alee Productions
    Copyright (C) 2019 Alee

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.

**************************************/
const express = require('express');
const moment = require('moment');
let app = express();
const config = require("./config.json")
const webhook = require("webhook-discord")
const Hook = new webhook.Webhook(config.durl)

const logger = (req, res, next) => {
    console.log(
      `${req.protocol}://${req.get('host')}${
        req.originalUrl
      }: ${moment().format()}`
    );
    next();
  };

console.log("Starting up Website...")

app.set('view engine', 'ejs');

app.use(logger)

app.get('/', (req, res) => {
  res.render('index', {title: 'Alee Production Website'});
});

app.get('/', function (req, res) {
    Hook.success("Alee Productions Website", Error)
    throw new Error('BROKEN') // Express will catch this on its own.
  })

app.listen(4000, () => {
//Hook.success("Alee Productions Website","Website has been loaded!")
console.log('Website listening on port 4000!'
)});