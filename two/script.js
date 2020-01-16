  var term = {
    Canada: 28,
    Belarus: 16,
    Russia: 18,
    Albania: 24,
    Germany: 21,
    France: 17
  }
  var sum = 0;
  var k = 0;
  for (var key in term) {
     sum += term[key];
     k +=1;
  }
  var average = sum / k;
  alert("Среднее значение = " + average);
