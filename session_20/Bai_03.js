let number =+prompt("Mời bạn nhập số ");
let text_number = number.toString();
let check =0;
if(Number.isInteger(number) ){
 for (let i = 0; i < text_number.length/2; i++) {
    if(text_number[i] != text_number[text_number.length-1-i]){
        check++;
        alert("Đây không phải là số đối xứng");
        break;
    }
    if(check==0){
       alert("Đây là số đối xứng");
    }
}
}else{
   alert("Số không hợp lệ ");
}