let number = +prompt("Mời bạn nhập số");
if(number > 0 && Number.isInteger(number) ){
    document.write("Các số chia hết cho 5 từ 1 đến "+number+" là: 5")
    for(let i=10;i<number+1;i+=5){
        document.write(","+i)
     }
}else{
      alert("dữ liệu nhập vào không hợp lệ");
}