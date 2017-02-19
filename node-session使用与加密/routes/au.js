module.exports=(req,res,next)=>{
	if(req.session.username&&req.session.password){
		next();
	}else{
		res.redirect("/rest")
	}
}