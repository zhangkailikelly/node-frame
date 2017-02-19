'use strict';

module.exports = function(Zkl) {
Zkl.say=function(callback){
	callback(null,"哈哈哈zkl");

};

Zkl.remoteMethod("say",{
	"accepts":[],
	"returns":[{"arg":"result","type":"string"}],
	"http":{"verb":"get","path":'/say'}
})
};
