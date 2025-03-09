let number = [];
let check = 0;
let locations = 0;
for (let i = 0; i < 10; i++) {
    number[i] = +prompt("Mời bạn nhập vào giá trị " +(i+1));
    check++;
}
let max = number[0];
for(let i = 0; i < 10;  i++) {
    if(max < number[i]){
        max = number[i];
        locations=i;
    }
}
if(check>0){
    console.log("Giá trị lớn nhất " +max);
    console.log("Vị trí " +locations);
}else{
    console.log("Không có số lớn nhất");
}