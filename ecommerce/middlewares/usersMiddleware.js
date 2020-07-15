var usersMiddleware = (req, res, next) => {
  if (req.session.userlogged != undefined) {
  	 next();
  	} else {
  		res.render("Restrinct", {
  			title: "NO PUEDES ACCEDER"
  		})
  	}
 
};

module.exports = usersMiddleware;


