let numbers=[2,5,7,4,1,8,6,2,5,7];
let number=+prompt("Mời bạn nhập số tìm kiếm ");
let check=0;
 for (let i = 0; i < numbers.length; i++) {
    if(number==numbers[i]){
       check++;
    } 
 }
 if(check>0){
    alert("Số "+number+" xuất hiện "+check+" lần trong mảng");
 }else{
    alert("Số "+number+" không tồn tại trong mảng");
 }