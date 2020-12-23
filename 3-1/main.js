for (let i = 1; i < 10; i++) {
  const row = [];
  for (let a = 1; a < 10; a++) {
    row.push(i * a);
  }
  console.log(row.join("\t"));
}
