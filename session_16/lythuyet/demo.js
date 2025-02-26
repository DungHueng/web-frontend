let toan = +prompt("mời bạn nhập điểm toán");
let ly = +prompt("mời bạn nhập điểm lý");
let hoa = +prompt("mời bạn bạn nhập điểm hóa");
let diemTB = (toan + ly + hoa) / 3;
let tron = diemTB.toFixed(2);
alert("điểm trung bình là "+tron);