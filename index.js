const moduleAlias = require("module-alias");

moduleAlias.addAliases({
    "events" : __dirname + "/events",
    "appStorage" : __dirname + "/appstorage-memory",
    "cryptojs-sha1" : require.resolve("crypto-js/sha1"),
    "cryptojs-md5" : require.resolve("crypto-js/md5")
});

require("node-define");

global.CryptoJS = require("crypto-js");
global.fetch = require("node-fetch");

module.exports = require(__dirname + "/apiclient");