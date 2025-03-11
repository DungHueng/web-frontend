let col=0;
let row=0;
let arr=[];
let choose=0;
do{
     choose=+prompt(
        "1. Nhập mảng 2 chiều\n2. Hiểu thị mảng 2 chiều\n3. Tính tổng các phần tử trong mảng\n4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó\n5. Tính trung bình cộng của một hàng cụ thể\n6. Đảo ngược các hàng trong mảng \n7. Thoát chương trình");
  switch(choose){
    case 1:
         col = +prompt("Mời bạn nhập số cột");
         row =+prompt("Mời bạn nhập số hàng")
        arr=[];
        for (let i = 0; i < row; i++) {
          arr[i] = [];
          for (let j = 0; j < col; j++) {
            arr[i][j] = +prompt(`Nhập giá trị tại [${i}][${j}]:`);
          }
      }
      break;
    case 2:
        alert( arr );
        break;
    case 3:
    let sum =0;
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        sum+=arr[i][j] ;
      }
  }
  alert("Tổng của các phần tử trong mảng là "+sum);
        break;
    case 4:
      let max=arr[0][0];
      let maxCol=0;
      let maxRow=0;
      for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
         if (max<arr[i][j]) {
           max=arr[i][j];
           maxRow=i;
           maxCol=j;
         }
        }
    }
    alert(`Giá trị lớn nhất trong mảng là: ${max} tại vị trí arr[${maxRow}][${maxCol}]`);
        break;
    case 5:
     
      let sumR=0;
      let n=+prompt("Mời bạn nhập hàng muốn tính trung bình cộng");
       for (let j = 0; j < col; j++) {
         sumR+= arr[n][j];
       }
       let tb =sumR/col;
       alert(`Trung bình cộng của hàng ${n} là: ${tb} `);
        break;
    case 6:
    alert(arr.reverse());
        break;
    case 7:
        alert("Chương trình kết thúc");
        break;
    default:
       alert("Lựa chọn không hợp lệ");
        break;
  }
}while(choose !==7);