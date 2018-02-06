function echo(a) {
	return a;
}

function shout(a) {
	return a.toUpperCase();
}

function repeat(a, b) {
	let answer = "";
	for  (let i = 0; i<b;i++){
		if (i == b-1){
			answer += a;
		}else{
			answer += a + " ";	
		}
		
	}
	return answer;
}

function pieceOfWord() {
	
}

function firstWord() {
	
}

function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
	// This function just capitalizes the word given to it, use in conjunction with titleCreator
}

function titleCreator() {
	
}

module.exports = {
	echo,
	shout,
	repeat,
	pieceOfWord,
	firstWord,
	titleCreator
}