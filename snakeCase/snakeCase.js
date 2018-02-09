var snakeCase = function(str) {
	//wtf case
	str = str.replace(/\.\./g, " ");

	if (str.indexOf(" ") < 0){
		str = str.replace(/([A-Z])/g, " $1");
	}
	return str
		.trim()
		.toLowerCase() 
		.replace(/[,\?\.]/g, "")
		.replace(/\-/g, " ")
		.split(" ")
		.join("_")
};

module.exports = snakeCase
