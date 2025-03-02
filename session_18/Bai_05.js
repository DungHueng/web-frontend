let member = +prompt("Nhập số năm kinh nghiệm của nhân viên");
if(member<1){
    alert("Mới vào nghề");
}else if(member>=1 && member<=3){
    alert("Nhân viên có kinh nghiệm");
}else if(member>=4 && member<=6){
    alert("Chuyên viên");
}else if(member>6){
    alert("Quản lý");
}