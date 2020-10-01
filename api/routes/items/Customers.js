var express = require('express');
var mycustomers = express.Router();
var connection = require('../../database/database.js')
var bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// get method for customer table 
mycustomers.get('/customers', function (req, resp) {
	connection.query("select * from customer", function (error, rows) {
		if (!!error) {
			console.log('error in the query');
		} else {
			console.log('successful query');
			console.log(rows);
			resp.send(rows);
		}
	})
})

//post method for customer
mycustomers.post('/customers', async(req, resp) => {
	//const salt = await bcrypt.genSalt() //this also use when 10 is not use
	//const hashedPassword = await bcrypt.hash(req.body.password, salt)
	const hashedPassword = await bcrypt.hash(req.body.password, 10)
	//console.log(salt)
	console.log(hashedPassword)
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


	let l_name = req.body.contact_email;
	// let l_pwd = req.body.password;

	connection.query("SELECT ID, password from customer where contact_email=?", [l_name], function (error, result) {
		if (!!error) {
			console.log('error in the query');
		} else {
			console.log('successful query');
			console.log("kkkk", result[0].password);
			pwd = result[0].password;
			console.log(pwd)

			try {
				if (bcrypt.compare(req.body.password, pwd)) {

					// res.send('success')
					res.send(JSON.stringify({
						"status": 200,
						"error": null,
						"response": result
					}));
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