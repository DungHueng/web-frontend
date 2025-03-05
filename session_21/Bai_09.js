let n = prompt("Mời bạn nhập số nguyên");
if(!isNaN(n)){
    if(n==2||n==3||n==5){
        alert("Đây là số nguyên tố");
    }else{
        if(n%2 !=0 && n%3 !=0 && n%5 !=0){
            alert("Là số nguyên tố");
        }else{
            alert("Không phải là số nguyên tố");
        }
    }
}else{
    alert("Không phải số nguyên");
}