let arr = [];
let even = 0;
let odd = 0;
for(let i=0;i<5;i++){
    arr[i]=+prompt("Mời bạn nhập phần tử thứ " +(i+1));
}
for(let i=0;i<5;i++){
    if(arr[i]%2==0){
        even=even+arr[i];
    }else{
        odd=odd+arr[i];
    }
}
    console.log("Tổng các số chẵn là " +even);
    console.log("Tổng các số lẻ là " +odd);