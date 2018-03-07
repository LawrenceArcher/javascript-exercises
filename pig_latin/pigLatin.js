let input = "banana";
function translate(input) {
	let ay = "ay";
	let output = "";
	for (let i = 0; i<input.length;i++){
		if (isVowel(input[i])){
			output = input.substr(i).concat(input.slice(0,i)).concat(ay);
			return output;
		}
	}
	
}
function isVowel(char) {
  if (char.length == 1){
    return /[aeiou]/.test(char);
  }
}

module.exports = {
	translate
}

//next split words
//split with .split(" ")
//use forEach to loop through array?