let money=prompt("Mời bạn nhập số tiền");
let money1=prompt("loại tiền mà bạn muốn đổi VNĐ | USD");

if(money1== "USD"){
    let USD = money *23000;
    alert(USD+" VNĐ");
}else if(money1=="VNĐ"){
    let VND = money %23000;
    alert(VND+" USD");
}