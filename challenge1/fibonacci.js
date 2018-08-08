/*https://jsfiddle.net/mooretc2/d91jz2u5/
* 
* Given a number n>1 and given the fibonacci sequence starts with 0 and 1,
* returns a list of the first n numbers in the fibonacci sequence
*/

function computeFib(n){
  var result = [0,1];
  for(var i = 2; i < n; i++){
  	result.push(result[i-1]+result[i-2]);
  }
  return result;
}
