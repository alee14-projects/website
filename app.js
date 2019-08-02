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
const app = express();
const moment = require('moment');
const readline = require("readline");
const path = require("path");
const config = require("./config.json");
const webhook = require("webhook-discord");
const Hook = new webhook.Webhook(config.durl);

const port = 4000;

const logger = (req, res, next) => {
    console.log(
      `${req.protocol}://${req.get('host')}${
        req.originalUrl
      }: ${moment().format()}`
    );
    next();
  };

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on("line", (input) => {
    switch (input) {
      case "clear":
        console.clear();
      break;
      case "exit":
        async function exitWebsite() {
        console.log("[i] Closing website...");
        await Hook.info("Alee Productions Website","Website is shutting down...");
        process.exit(0);
        }
        exitWebsite();
      break;
      default:
        console.log("[X] Error: Command not found. Use clear or exit.");
        break;
    }
  });

console.log("[i] Starting up Website...")

app.set('view engine', 'ejs');

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(logger)

app.use("/", require("./routes/index"));
app.use("/about", require("./routes/about"));

app.use((req, res) => {
	res.status(404).render("404", {title: "404 | Alee Productions"});
});

app.listen(port, () => {
//Hook.success("Alee Productions Website","Website has been loaded!")
console.log(`[>] Website listening on port ${port}!`)
});