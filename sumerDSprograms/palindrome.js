var str = "anana";

//var arr = str.split("");
//console.log(str);
var length = str.length;
var flag = true;
for (i = 0; i < length / 2; i++) {
  if (str[i] !== str[length - i - 1]) {
    flag = false;
  }
}

if (flag) {
  console.log("Yay, Its plindrome");
}
