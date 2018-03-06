function translate(input) {
	let ay = "ay";
	let output = "";
	if (isVowel(input[0])){
		output = input.concat(ay);
	}
	return output;
}
function isVowel(char) {
  if (char.length == 1)
  {
    return /[aeiou]/.test(char);
  }
}

module.exports = {
	translate
}