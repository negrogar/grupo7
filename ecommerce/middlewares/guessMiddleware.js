var guessMiddleware = (req, res, next) => {
  if (req.session.userlogged == undefined) {
  	 next();
  	} else {
  		res.render("restrinctLogged", {
  			title: "Algo salió mal!"
  		})
  	}
 
};

module.exports = guessMiddleware;

