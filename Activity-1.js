var mysql = require ("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
	host: "localhost",
	port:3306,

	user: 'root',
	password: 'sqldev11',
	database: 'top_songsdb'
});

connection.connect(function(err){
	if(err)
	{
		throw err;
	}
	console.log("successfully connected as ID : " + connection.threadId);
	console.log("------------- top_songsdb ---------------")
	
	getUserDetails();
	
}); // Close connect()

function getUserDetails()
{
	inquirer.prompt(
	 [{
	  	type: "rawlist",
	  	message: "Select your query to be run:",
	  	choice: ["Query1", "Query2","Query3","Query4"],
	  	name: "query"
	  }]).then(function (answers) {
		    // Use user feedback for... whatever!! 
		console.log(answers);
		switch(answers.query)
		{
			case 'Query1':
				getquery1Details();
				break;
			case 'Query2':
				getquery2Details();
				break;	
			case 'Query3':
					getquery3Details();
					break;
			case 'Query4':
					getquery4Details();
					break;
		}
	});
} //End function(answers)
function getquery1Details()
{

	var query = connection.query("SELECT * FROM top5000 where artist = 'Bryan Adams' ",
			function(err,res)
				{
					console.log("--------------------");
					console.log("all data for songs sung by a specific artist");
					console.log(res);
					console.log("-------END OF RESULT-------------");
				});
}
function getquery2Details()
{

	var query = connection.query("SELECT artist, COUNT(*) count FROM top5000 GROUP BY artist HAVING c > 1 order by count desc",
			function(err,res)
				{
					console.log("--------------------");
					console.log("all artists who appear within the top 5000 more than once");
					console.log(res);
					console.log("-------END OF RESULT-------------");
				});
}

function getquery3Details()
{

	var query = connection.query("select * from top5000 where year between 1998 and 2010 order by year desc",
			function(err,res)
				{
					console.log("---------------------------------");
					console.log("all data contained within a specific range");
					console.log(res);
					console.log("-------END OF RESULT-------------");
				});
}

function getquery4Details()
{

	var query = connection.query("select * from top5000 where song = 'Truly Madly Deeply'",
			function(err,res)
				{
					console.log("---------------------------------");
					console.log("searches for a specific song in the top 5000 and returns the data for it");
					console.log(res);
					console.log("-------END OF RESULT-------------");
				});
}
