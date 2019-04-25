let n = 10;

for (let i = 1; i <= n; i++) {
  let outstr = "";
  for (let j = 1; j <= n; j++)
    if (j <= i) outstr += "#";
    else outstr += "_";
  console.log(outstr);
}
