let number = +prompt("Mời bạn nhập vào số nguyên bất kỳ");
if(Number.isInteger(number)){
    document.write("Ước của số "+number+" là ");
    for(let i=1;i<=Math.abs(number);i++){
        if(Math.abs(number)%i==0){
            document.write(i+" ");
            document.write("-"+i+" ");
        }
    }
}else{
    alert("Số bạn nhập không hơp lệ");
}