let a = Number(prompt("nhập số thứ nhất: "));
let b = Number(prompt("nhập số thứ hai: "));
let c = Number(prompt("nhập số thứ ba: "));
let max = (a>b)?((a>c)?a:c):((b>c)?b:c);
 alert("số lớn nhất trong 3 số là "+max);