var caesar = function(str, num) {
	var arr = [];
	if (num > 26){
		num = num % 26;
	}
	for (var i = 0; i<str.length;i++){
		if (str[i] == "," || str[i]=="." || str[i]=="?" || str[i] == "!" || str[i]==" "){
			arr.push(str[i].charCodeAt());
		}else if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90){
			if (str[i].charCodeAt() + num > 90){
				arr.push(str[i].charCodeAt()+num-26);
			}else if (str[i].charCodeAt()+num <65){
				arr.push(str[i].charCodeAt()+num+26);
			}else{
				arr.push(str[i].charCodeAt()+num);
			}
		}else if (str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122){
			if (str[i].charCodeAt() + num > 122){
				arr.push(str[i].charCodeAt()+num-26);
			}else if (str[i].charCodeAt()+num <97){
				arr.push(str[i].charCodeAt()+num+26);
			}else{
				arr.push(str[i].charCodeAt()+num);
			}
		}
	}
	console.log(arr);
	return String.fromCharCode(...arr);
}


module.exports = caesar
