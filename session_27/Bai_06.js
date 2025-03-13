let arr=[];

capSoCong();

function capSoCong() {
    let n = +prompt("Mời bạn số lượng phần tử");
    if (n > 0) {
      for (let i = 0; i < n; i++) {
        arr[i] = +prompt(`Mời bạn nhập phần tử thứ ${i + 1}`);
      }
    } else {
      console.log("Số lượng không hợp lệ");
    }
    for (let i = 0; i < arr.length; i++) {
      if (!Number.isInteger(arr[i]) || arr[i] % 1 != 0){
      console.log("Dữ liệu không hợp lệ.");
      return;
    }
}
    let capSo=arr[1]-arr[0];
    for (let i = 0; i < arr.length-1; i++) {
     if(arr[i+1]-arr[i]!=capSo){
     console.log("FALSE");
     return;
    }
  }
    console.log("TRUE");
  }
  