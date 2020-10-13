require('dotenv').config()
var express = require('express');
var mycustomers = express.Router();
var connection = require('../../database/database.js')
var bcrypt = require('bcrypt') // this labrery use for hashed password  
const jwt = require('jsonwebtoken') // this labrery need for creating the json web token
//this is initilize to the database folder from jwtauthenticate.js file 
var auth = require('../../database/jwtauthenticate.js')

mycustomers.use(express.json())
// get method for customer table 
mycustomers.get('/customers', auth, (req, resp) => {
	connection.query("select * from customer", function (error, rows) {
		if (!!error) {
			console.log('error in the query');
		} else {
			console.log('successful query');
			console.log(rows);
			//resp.send(rows);
			// resp.json(rows.filter(rows => rows.contact_email === req.user.contact_email))
			resp.json(rows);
		}
	})
})

//post method for customer &
//also use for user authentication system //post method use for register new customer 
mycustomers.post('/customers', async(req, resp) => {
	//creating hash password their is two step creating salt and use that salt along with password create a hashed password.
	 
	//const salt = await bcrypt.genSalt()  //this also use when 10 is not use
	
	//const hashedPassword = await bcrypt.hash(req.body.password, salt) //hashed password create here and pass here normal password and salt
	const hashedPassword = await bcrypt.hash(req.body.password, 10)
	//console.log(salt)
	console.log("saurabh",hashedPassword);
	var date = new Date();
	console.log("shhssh:", 11212)
	console.log("shhssh:", req.body, date.toISOString().slice(0, 19).replace('T', ' '))
	let data = {
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		user_name: req.body.user_name,
		password: hashedPassword,
		time_inserted: date.toISOString().slice(0, 19).replace('T', ' '),
		confirmation_code: 'confirm',
		time_confirmed: date.toISOString().slice(0, 19).replace('T', ' '),
		contact_email: req.body.contact_email,
		contact_phone: req.body.contact_phone,
		city_id: null,
		address: null,
		delivery_city_id: null,
		delivery_address: null
	};
	// console.log("shhssh:", req.body)
	let sql = "INSERT INTO customer SET ?";

	let query = connection.query(sql, data, function (error, result) {
		if (!!error) {
			console.log('error in the query');
		} else {
			console.log('successful query');
			//console.log(rows);
			resp.send(JSON.stringify({
				"status": 200,
				"error": null,
				"response": result
			}));

		}
	});
});


// mycustomers.post('/login', function (req, resp) {
// 	var date = new Date();
// 	console.log("shhssh:" ,11212)
// 	console.log("shhssh:", req.body);

// });


//we post the email and possword in the login form then the in this query is req to database please check this email and password is their or not, its their then query is successful or response is come with ID. show otherwise show error in the query.                                                                              
mycustomers.post('/login', async(req, res) => {
	let pwd;
	console.log("shhssh:", req.body);

// when login with email and password then only email is take in req.body.contact email here
	let l_name = req.body.contact_email;
	// let l_pwd = req.body.password;

	connection.query("SELECT ID, password from customer where contact_email=?", [l_name], function (error, result) {
		if (!!error) {
			console.log('error in the query');
		} else {
			console.log('successful query');
			// console.log("kkkk", result[0].password);
			pwd = result[0].password;
			id = result[0].ID
			// console.log(pwd)

			try {

				//here compare the password so first pass the initial password and then pass the hash password in pwd 
				if (bcrypt.compare(req.body.password, pwd)) {
					let user = { contact_email : req.body.contact_email,
						password : req.body.password,
					}
					//console.log("fhadfhdf", user)
					try{

						//sign take payload  which is essentially what we ant the serilize user object that is already create above.
						let accessToken = jwt.sign(user, '014ebfdeeb80dbdce4b912c9b7cf4ec08a9323739932e4a9ceae34b5edf56af4e51056b0b291174513572d1a73eac5510e7c81548161009099fba5043b803bff')
						console.log("accessToken", accessToken)
					    res.json({ accessToken : accessToken, id : id})
					}
					catch{
						console.log("error in accesstoken")
					}
					
					
					// res.send('success')
					// res.send(JSON.stringify({
					// 	"status": 200,
					// 	"error": null,
					// 	"response": result,
					// 	"accessToken" : accessToken 
					// })
					//);
				} else {
					res.send('not allowed')
				}
			} catch {
				res.status(500).send()

			}

		}

	});

});





//we post the email and possword in the login form then the in this query is req to database please check this email and password is their or not, its their then query is successful or response is come with ID. show otherwise show error in the query. 

//    mycustomers.post('/login',  (req, res)  => {
// 	console.log("shhssh:", req.body); 
// let l_name = req.body.contact_email;
// let l_pwd = req.body.password;
// connection.query('SELECT Id FROM customer where contact_email=? AND password=?',[l_name ,l_pwd] ,function (error, result) {
// 		if (!!error) {
// 			console.log('error in the query');
// 		} else { 
// 			console.log('successful query');
// 			console.log(result);
// 			res.send(JSON.stringify({
// 				"status": 200,
// 				"error": null,
// 				"response": result
// 			}));

// 		}
// 	});

// });


//delete method for customer
mycustomers.delete('/customers/:id', (req, res) => {
	let sql = "DELETE FROM customer WHERE Id=" + req.params.id + "";
	let query = connection.query(sql, (err, results) => {
		if (err) throw err;
		res.send(JSON.stringify({
			"status": 200,
			"error": null,
			"response": results
		}));
	});
});


// export this router to use in our server.js
module.exports = mycustomers;