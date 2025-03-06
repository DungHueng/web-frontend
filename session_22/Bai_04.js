let numbers = prompt("Mời bạn nhập một số bất kì");
let array = numbers.split("");
let max = array[0];
numbers=+numbers;
if(Number.isInteger(numbers)){
    for(let i=0;i<array.length;i++){
        if(max < array[i+1]){
            max = array[i+1];
        }
    }
    alert(max + " là số lớn nhất trong dãy số");
}else{
    alert("Số không hợp lệ")
}