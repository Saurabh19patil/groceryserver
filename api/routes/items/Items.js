var express = require('Express');
var myitems = express.Router();
var connection = require('../../database/database.js')


myitems.get('/items', (req, res) => {

	connection.query("select * from item", function (error, rows) {
		if (!!error) {
			console.log('error in the query');
		} else {
			console.log('successful query');
			res.send(rows);
			console.log(rows);

		}
	});
});

//   myitems.post('/items', (req, res) => {

//     connection.query("insert into item values", function(error, rows) {
//       if(!!error) {
//         console.log('error in the query');
//       } else {
//         console.log('successful query');
//         res.send(rows);
//         console.log(rows);

//       }
//      });
//   });


myitems.post('/items', function (req, resp) {
	//console.log("shhssh:", req.body)
	let data = {
		Id: req.body.Id,
		item_name: req.body.item_name,
		price: req.body.price,
		item_photo: req.body.item_photo,
		description: req.body.description,
		unit_id: req.body.unit_id
	};
	let sql = "INSERT INTO item SET ?";

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

myitems.delete('/items/:id', (req, res) => {
	let sql = "DELETE FROM item WHERE Id=" + req.params.id + "";
	let query = connection.query(sql, (err, results) => {
		if (err) throw err;
		res.send(JSON.stringify({
			"status": 200,
			"error": null,
			"response": results
		}));
	});
});


//   app.post('/employees', function (req, res) {
//     var postData  = req.body;
//     connection.query('INSERT INTO employee SET ?', postData, function (error, results, fields) {
//        if (error) throw error;
//        res.end(JSON.stringify(results));
//      });
//  });


// export this router to use in our server.js
module.exports = myitems;