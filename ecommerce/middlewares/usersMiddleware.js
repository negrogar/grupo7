var usersMiddleware = (req, res, next) => {
  if (req.session.userlogged != undefined) {
  	 next();
  	} else {
  		res.send("Esta pagina es solo para usuarios")
  	}
 
};

module.exports = usersMiddleware;


