var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port: 3306,
		host: "lk9xdebw4k3zynl4u.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
		user: "n3n8y4msa6bh5wh2",
		password: "lmcjtdefzcrsd40l",
		
		database: "ldc5ibonqv4boqvn"
	});
};

connection.connect(function(err){
	if(err){
		console.log("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;
