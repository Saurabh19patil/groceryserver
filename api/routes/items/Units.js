var express = require('express');
var myunits = express.Router();
var connection = require('../../database/database.js')


//get method for unit
myunits.get('/units', function (req, resp) {
	connection.query("select * from unit", function (error, rows) {
		if (!!error) {
			console.log('error in the query');
		} else {
			console.log('successful query');
			console.log(rows);
			resp.send(rows);

		}
	});
});

//post method for unit
myunits.post('/units', function (req, resp) {
	console.log("shhssh:", req.body)
	let data = {
		Id: req.body.Id,
		Unit_Name: req.body.Unit_Name,
		Unit_Short: req.body.Unit_Short
	};
	let sql = "INSERT INTO unit SET ?";
	// console.log("shhssh:", req)
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

// myunits.delete('/units/:id',function(req, res)  {
//     let sql = "DELETE FROM unit WHERE Id="+req.params.id+"";
//     let query = connection.query(sql, function(err, results)  {
//         if(!!error) {
//             console.log('error in the query');
//         } else {
//             console.log('successful query');
//             //console.log(rows);
//           resp.send(JSON.stringify({"status": 200, "error": null, "response": result}));

//         }
//        });
//        });

//delete method for unit 
myunits.delete('/units/:id', (req, res) => {
	let sql = "DELETE FROM unit WHERE Id=" + req.params.id + "";
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

module.exports = myunits;