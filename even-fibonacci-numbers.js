var evenFibNums = function() {
  var sum = 0;
  var prev = 1;
  var num = 2;
  var newPrev;

  while (num < 4000000) {
    if (num % 2 === 0) {
      sum += num;
    }

    newPrev = num;
    num += prev;
    prev = newPrev;
  }

  return sum;
};

console.log(evenFibNums());
