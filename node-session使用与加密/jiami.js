var crypto=require("crypto");
var md5=crypto.createHash("md5");
var newPassword=md5.update("明码").digest("base64");
