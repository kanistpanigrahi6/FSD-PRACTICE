function rev(rows) {
  for (let i = 0; i < rows; i++) {
    let line = "";
    for (let j = 0; j < i + 1; j++) {
      line += "*";
    }
    console.log(line);
  }
}
rev(6);
