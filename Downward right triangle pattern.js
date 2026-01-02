function firstrow(n) {
  var str = " ";
  for (var i = 0; i < n; i++) {
    str += "* ";
  }
  console.log(str);
}

function singlerow(i) {
  let row = " ";
  for (var j = 0; j < i; j++) {
    row += "* ";
  }
  console.log(row);
}

function tri(n) {
  for (var i = n; i >= 1; i--) {
    if (i == n) {
      firstrow(n);
    } else {
      singlerow(i);
    }
  }
}
tri(5);
