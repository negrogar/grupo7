var guessMiddleware = (req, res, next) => {
  if (req.session.userlogged == undefined) {
  	 next();
  	} else {
  		res.send("Esta pagina es solo para Invitados")
  	}
 
};

module.exports = guessMiddleware;

