
function theBeatlesPlay(musicians, instruments) {
var allMusicians = [];
for (var i=0; i < musicians.length; i++) {
allMusicians.push(musicians[i] + ' plays ' + instruments[i]);
}
return allMusicians;
}

// 		 +function theBeatlesPlay(musicians,instruments) {
// +  var x = []
// +  for (var i = 0; i < musicians.length; i++) {
// +    x.push(musicians[i] + ' plays ' + instruments[i])
// +  }
// +  return x;
// +}




function johnLennonFacts(x) {
  var i = 0;
  while (i < x.length) {
    x[i] += "!!!";
    i++;
  }
  return x;
}


function iLoveTheBeatles(num) {
  var array = []
  do {
    array.push('I love the Beatles!')
    num++
  } while (num< 15)
  return array 
}

// function iLoveTheBeatles(number) {
// +  var arr = [];
// +  var i = 0;
// +  do {
// +    arr.push('I love the Beatles!');
// +    i++;
// +  } while (i <= number && number < 15);
// +  return arr;
// +}

