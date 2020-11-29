const db = require('./db');

module.exports ={
	getAll: function(callback){
		var sql = "SELECT * FROM `medicineinfo`";
		db.getResults(sql, function(results){
			callback(results);
		});

	}
}