let radius = +prompt("mời bạn nhập bán kính hình cầu");
let volume = Math.floor(4*Math.PI*Math.pow(radius,3)/3);
alert("Thể tích của khối cầu là: " + radius);
let acreage = Math.floor(4*Math.PI*Math.pow(radius,2));
alert("Diện tích của khối cầu là: " + acreage);
let perimeter = Math.max(2*Math.PI*radius);
alert("Chu vi lớn nhất của hình cầu là: " + perimeter);