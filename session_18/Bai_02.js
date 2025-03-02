let toan = +prompt("Mời bạn nhập điểm toán");
let van = +prompt("Mời bạn nhập điểm văn");
let anh = +prompt("Mời bạn nhập điểm anh");
let TB = (toan+van+anh)/3;
if(TB>=8){
    console.log("Giỏi");
}else if(TB>=6.5 && TB<=7.9){
    console.log("Khá");
}else if(TB>=5 && TB<=6.4){
    console.log("Trung bình");
}else if(TB<5){
    console.log("Yếu");
}