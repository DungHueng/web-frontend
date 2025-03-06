let numberArray=[2,5,7,4,1,8,6];
let number=+prompt("Mời bạn nhập số");
let check=0;
if(Number.isInteger(number)){
    for(i=0;i<numberArray.length;i++){
        if(number==numberArray[i]){
            check++;
            break;
        }
    }
    if(check>0){
        console.log("Bingo!!!");
    }else{
        console.log("Chúc bạn may mắn lần sau!")
    }
}else{
    console.log("Nhập không hợp lệ!")
}