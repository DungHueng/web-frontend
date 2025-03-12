function HighestNumber(arr) {
    if (!Array.isArray(arr)) {
      console.log("Dữ liệu không hợp lệ");
      return;
    }
    if(arr.length==0){
        console.log("Mảng không có dữ liệu");
        return;
    }
    let highestNumber = Math.max(...arr);
    let Locations = arr.map((value, index) => (value === highestNumber ? index : -1))
                   .filter(index => index !== -1);
  
    console.log(`Max= ${highestNumber}`);
    console.log(`position:  ${Locations.join(", ")}`);
  }
  
  HighestNumber([15, 2, 4, 19, 30, 6]);
  