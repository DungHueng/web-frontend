let d1 = new Date(prompt("Mời bạn nhập ngày"));
let d2 = new Date(prompt("Mời bạn nhập ngày"));
let milisecons = Math.abs((d1 - d2));
let day = milisecons / (1000*60*60*24);
alert(day);