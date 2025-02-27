let a = +prompt("Mời bạn nhập số a");
let b = +prompt("Mời bạn nhập số b");
let c = +prompt("Mời bạn nhập số c");
let delta = Math.pow(b,2)-4*a*c;
let sprtdelta = Math.sqrt(delta);
let x1 = (-b + sprtdelta) /(2*a);
let x2 = (-b - sprtdelta) /(2*a);
alert("X1 = "+ x1 +" và X2 =" +x2);