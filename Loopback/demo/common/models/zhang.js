'use strict';

module.exports = function(Zhang) {
Zhang.say=function(callback){
	callback(null,"哈哈哈");

};

Zhang.remoteMethod("say",{
	"accepts":[],
	"returns":[{"arg":"result","type":"string"}],
	"http":{"verb":"get","path":'/say'}
})
};
