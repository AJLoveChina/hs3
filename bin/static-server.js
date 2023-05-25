const express = require('express')
const fs = require("fs-extra");
const https = require('https');
const serveIndex = require('serve-index');
const path = require("path");
const app = express()
let config = fs.readJsonSync("./hs3.config.json", {throws: false})

if (!config) {
    config = {
        port: 3000
    }
}

const dirPath = process.cwd();
app.use("/", serveIndex(dirPath, {
    icons: true,
}));

app.use('/', express.static(dirPath, {
    setHeaders: function(res, path) {
        res.set("Access-Control-Allow-Origin", "*");
    }
}));


if (config.cert && config.key) {
    const options = {
        key: fs.readFileSync(path.resolve(dirPath, config.key)),
        cert: fs.readFileSync(path.resolve(dirPath, config.cert)),
    };
    https.createServer(options, app).listen(config.port, function(){
        console.log("Express server listening on port " + config.port);
    });
} else {
    app.listen(config.port, () => {
        console.log(`Example app listening on port ${config.port}`);
        console.log(`DirPath ${dirPath}`);
    })
}
