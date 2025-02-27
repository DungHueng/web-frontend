let money = +prompt(" mời bạn nhập số tiền gửi ngân hàng(VNĐ)");
let month = +prompt("mời bạn nhập số tháng gửi ngân hàng");
let year = month / 12;
let profit_amount = money*(year*4.3/100);
alert("số tiền lãi của bạn là: " + profit_amount + "VNĐ");