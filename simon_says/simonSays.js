function echo(a) {
	return a;
}

function shout(a) {
	return a.toUpperCase();
}

function repeat(a, b) {
	var answer = "";
	if (arguments.length > 1){
		for  (var i = 0; i<b;i++){
			if (i == b-1){
				answer += a;
			}else{
				answer += a + " ";	
			}
		
		} 
	}else if (arguments.length == 1){
		answer = a + " " + a;
	}
	return answer;
}

function pieceOfWord(a, b) {
	var result = a.slice(0, b);
	return result;
}

function firstWord(a) {
	for (var i = 0; i < a.length; i++){
		if (a[i] == " "){
			var result = a.slice(0, i);
			return result;
		}
	}
}

function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
	// This function just capitalizes the word given to it, use in conjunction with titleCreator
}

function checkSmallWord(val){
	var lowerCaseWords = ["and", "the", "over", "from"];
	return lowerCaseWords.some(function(arrVal){
		return val === arrVal;
	});
}


function titleCreator(str) {
	var arr = str.split(" ");
	arr[0] = capitalize(arr[0]);
	console.log(arr);
	if (arr.length == 1){
		var result = arr.join();
		return result;
	} else if (arr.length > 1){
		for (var i=1;i<arr.length;i++){
			if (!checkSmallWord(arr[i])){
				arr[i] = capitalize(arr[i]);
			}
		}
		var result = arr.join(" ");
		return result;
	}else{
		console.log("error");
	}
}

module.exports = {
	echo,
	shout,
	repeat,
	pieceOfWord,
	firstWord,
	titleCreator
}