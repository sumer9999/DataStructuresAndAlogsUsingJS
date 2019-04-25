var g = 0,
  h = 1,
  i = 0,
  num = 1000;

while (i < num) {
  console.log(i);
  g = h;
  h = i;
  i = g + h;
}
