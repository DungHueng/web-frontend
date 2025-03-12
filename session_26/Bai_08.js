function input(arr) {
    if (!Array.isArray(arr)) {
      console.log("Dữ liệu không hợp lệ");
      return;
    }
    if (arr.length === 0) {
      console.log("Mảng không có phần tử nào");
      return;
    }
    let newArray = arr.filter((item) => checknumber(item)&& item % 2 !== 0);
    console.log(newArray);
  }
  
  function checknumber(number) {
    if (number < 2) return false; 
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; 
      }
    }
    return true;
  }
  
  input([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  