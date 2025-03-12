function filterNumber(array) {
    if(!Array.isArray(array)){
        console.log("Dữ liêu nhập không hợp lệ!");
        return;
    }
    if(array.length==0){
        console.log("Mảng không có phần tử naò");
        return;
    }
    let newArray = array.filter((item)=>item.length>5);
    console.log(newArray);
}
filterNumber(["apple", "banana", "cat", "elephant", "dog"]);