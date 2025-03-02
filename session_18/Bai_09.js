let hour = Number(prompt ("Mời bạn nhập giờ"));
let minutes = Number(prompt ("Mời bạn nhập phút"));
let second = Number(prompt ("Mời bạn nhập giây"));

if(hour >=12 && hour <24){
    let hourPm = hour -12;
    alert(hourPm+":"+minutes+":"+second+"am");
}else if(hour<12 && hour >=0){
    let hourPm = hour +12;
    alert(hourPm+":"+minutes+":"+second+"pm");
}else{
    alert("Giờ không hợp lệ");
}