var url = process.env.NODE_ENV === 'production' ? "http://39.108.216.96" : "http://127.0.0.1:80";
//var url = process.env.NODE_ENV === 'production' ? "http://39.108.216.96" : "http://39.108.216.96";

module.exports =  {
	url : url,
	db_url:"39.108.216.96:27017",
	db_name : "test",
	db_number: "test",
	db_password : "test"
};

