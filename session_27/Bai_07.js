function number(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!Number.isInteger(arr[i]) || arr[i] % 1 != 0){
        console.log("Dữ liệu không hợp lệ.");
        return;
      }
    }
    let capSo=1;
    let soThieu=[];
    for (let i = 0; i < arr.length-1; i++) {
     if(arr[i+1]-arr[i]!=capSo){
      soThieu.push(arr[i]+1);
    }
  }
  console.log(soThieu);
  
}
number([1,2,3,5]);
number([1,2,4,5,7]);