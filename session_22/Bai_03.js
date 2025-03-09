let number =prompt("Mời bạn nhập dãy số");
let NumberArray =number.split("");
number=+number
if(Number.isInteger(number)){
 
   document.write(NumberArray.reverse());

}else{
  console.log("Dãy không hợp lệ");
}