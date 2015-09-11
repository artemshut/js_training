function search(array, condition) {
  for (var i = 0; i < array.length; i++) {
    var elem = array[i];
    cond = condition.toString();
    var conditionValue = eval(elem + cond);
    if (conditionValue) {
      return elem;
    }
  }
}

var value = search(array, condition)
