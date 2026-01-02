function vowelcnt(str) {
  let vow = "aeiou".toLowerCase;
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i])) {
      count += 1;
    }
  }
  console.log(count);
}
vowelcnt("aeity");
