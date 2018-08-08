/*https://jsfiddle.net/mooretc2/u60tm19q/
*
* Combines the elements of lst1 and lst2 in alternating order
* (given ['a','b','c'] & [1,2,3], returns ['a',1,'b',2,'c',3])
*/

function combine(lst1, lst2){
  var result = [];
  var i = 0, j = 0; 
  while(i < lst1.length || j < lst2.length){
  	if(i < lst1.length) result.push(lst1[i++]);
    if(j < lst2.length) result.push(lst2[j++]);
  }
  return result;
}
