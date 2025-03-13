function chiaMang(arr,n) {
    if (!Array.isArray(arr) || !Number.isInteger(n) || n <= 0) {
      return "Dữ liệu không hợp lệ";
  }
    let newArray=[];
    let size=Math.ceil(arr.length / n);
    for (let i = 0; i < arr.length; i+=size) {
      newArray.push(arr.slice(i, i + size));
    }
    console.log(newArray);
    
  }
  chiaMang([1,2,3,4,5,6,7,8],3);