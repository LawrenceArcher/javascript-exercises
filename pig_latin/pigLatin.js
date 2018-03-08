let input = "banana";
function translate(input) {
	let ay = "ay";
	let outputArr = []
	let outputLoop = "";
	let arr = input.split(" ");
	console.log(arr);
	arr.forEach(function(element){
		for (let i = 0; i<element.length;i++){
			if (element[i] == "u" && element[i-1]=="q"){
				continue;
			}else if (isVowel(element[i])){
				outputLoop = element.substr(i).concat(element.slice(0,i)).concat(ay);
				outputArr.push(outputLoop);
				return;
			}
		}
	})
	return outputArr.join(" ");
	
	
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