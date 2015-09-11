var newArray = map(array, someFunction);

function map(array, func) {
  var mappedArray = [];

  for (var i = 0; i < array.length; i++) {
    oldElem = array[i];
    if oldElem {
      function func(oldElem) {

      }
      newElem = oldElem.call(func);
      mappedArray.push(newElem);
    }
  }
}
