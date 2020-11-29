const db = require('./db');

module.exports ={
	
	getAll: function(callback){
		var sql = "SELECT * FROM `medicineinfo`";
		db.getResults(sql, function(results){
			callback(results);
		});

	},
	getAllById: function(id,callback){
		var sql = "select * from `medicineinfo` WHERE id="+id;
		db.getResults(sql, function(results){
			callback(results);
		});

	},
	delete: function(id, callback){
		var sql = "DELETE FROM `medicineinfo` WHERE id="+id;
        db.execute(sql, function(status){
            callback(status);
        });

	}


}