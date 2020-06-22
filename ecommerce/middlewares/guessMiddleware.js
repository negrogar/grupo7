var guessMiddleware = (req, res, next) => {
  if (req.session.userlogged == undefined) {
  	 next();
  	} else {
  		res.send("Esta pagina es solo para invtados, YA ESTAS REGISTRADO")
  	}
 
};

module.exports = guessMiddleware;

