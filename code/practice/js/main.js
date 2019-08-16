// var givenArray = [
//     [10,0],
//     [3,5],
//     [5,8]
//   ];
  
//   /*
//   // => 5
//   number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]) 
//   // => 17
//   number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]) 
//   // => 21
//   number([[0,0]])
//   // => 0 
//   */
  
  
//   var people = 0;
//   var onBus, offBus;
  
//   function number(exampleArray) {
//       for (let i = 0; i < givenArray.length; i++) {
//     people += givenArray[i][0];
//     people -= givenArray[i][1];
//     }
//     console.log(people);
//     return people;
// }


// function deuplicateEncode(word){
//   function count(word, char){
//     var result = 0;
//     for (var index = 0, len = word.length; index < len; index++) {
//       if (word[index] == char) result++
//     }
//     return result;
//   }
//   var result = [];
//   var lowerCasedWord = word.toLowerCase();
//   for (var index = 0, len = lowerCasedWord.length; index < len; index++) {

//   }
// }

function deuplicateEncode(word){

  var unique='';
  word = word.toLowerCase();
  for(var i=0; i<word.length; i++){
    if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
      unique += '(';
    }
    else {
      unique += ')';
    }
  }
  return unique;
}


function deuplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('')
}

function deuplicateEncode(word){
  word = word.toLowerCase();
  return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ?
  '(' : ')');
}



