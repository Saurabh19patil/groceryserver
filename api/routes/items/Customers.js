var express = require('express');
var mycustomers = express.Router();
var connection = require('../../database/database.js')


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


mycustomers.post('/customers', function (req, resp) {
	console.log("shhssh:", req.body)
	let data = {
		Id: req.body.Id,
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		user_name: req.body.user_name,
		password: req.body.password,
		time_inserted: req.body.time_inserted,
		confirmation_code: req.body.confirmation_code,
		time_confirmed: req.body.time_confirmed,
		contact_email: req.body.contact_email,
		contact_phone: req.body.contact_phone,
		city_id: req.body.city_id,
		address: req.body.address,
		delivery_city_id: req.body.delivery_city_id,
		delivery_address: req.body.delivery_address
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

module.exports = mycustomers;