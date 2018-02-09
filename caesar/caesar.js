var caesar = function(str, num) {
	var arr = [];

	for (var i = 0; i<str.length;i++){
		if (str[i] == "," || str[i]=="." || str[i]=="?"){
			arr.push(str[i].charCodeAt());
		}else{
			arr.push(str[i].charCodeAt() + num);
		}
	}
	console.log(arr);
	return String.fromCharCode(...arr);
}

module.exports = caesar
