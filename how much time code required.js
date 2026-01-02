function sum(n) {
  var starttime = Date.now();
  sum1 = 0;
  for (var i = 0; i <= n; i++) {
    sum1 += i;
  }
  console.log(sum1);
  endtime = Date.now();
  console.log(endtime - starttime);
}
sum(100000);
