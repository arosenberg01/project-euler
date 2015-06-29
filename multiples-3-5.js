var sumOf3And5Multiples = function(limit) {
  var total = 0;
  var current = 1;

  while (current < limit) {
    if (current % 3 === 0 || current % 5 === 0) {
      total += current
    }
    current++;
  }

  return total;
};

console.log(sumOf3And5Multiples(1000));