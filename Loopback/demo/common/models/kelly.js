'use strict';

module.exports = function(Kelly) {
Kelly.say=function(callback){
	callback(null,"哈哈哈");

};

Kelly.remoteMethod("say",{
	"accepts":[],
	"returns":[{"arg":"result","type":"string"}],
	"http":{"verb":"get","path":'/say'}
})
};
