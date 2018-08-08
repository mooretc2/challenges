/*https://jsfiddle.net/mooretc2/0jhLk6qx/
*
* Each function returns the sum of all the numbers in a given list
* Assumes input is a list of numbers
*/

function forSum(input){
  var result = 0;
  for(var i = 0; i < input.length; i++){
	result += input[i];
  }
  return result;
}

function whileSum(input){
  var result = 0, i = 0;
  while(i < input.length){
  	result += input[i++];
  }
  return result;
}

function recursiveSum(input){
  if(input.length < 1) return 0;
  return input[0] + recursiveSum(input.slice(1));
}
