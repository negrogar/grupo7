const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

function cookieMiddleware (req, res, next) {
 
  	 next();
  	
	 if (req.cookie.recordar != undefined && 
	 	req.session.userlogged == undefined) {

	 	let userToLog

        for (let i = 0; i < users.length; i++) {
            if (users[i].email == req.cookie.email) {
                    userToLog = users[i]; 
                    break;
            }
        }  

        req.session.userlogged = userToLog;
 
        }
}

module.exports = cookieMiddleware;

