function filterNumber(array) {
    if(!Array.isArray(array)){
        console.log("Dữ liêu nhập không hợp lệ!");
        return;
    }
    if(array.length==0){
        console.log("Mảng không có phần tử naò");
        return;
    }
    let newArray = array.filter((item)=> item.includes("@") && !item.includes(" ")
    (item.endsWith(".com") || item.endsWith(".net"))
  );
    console.log(newArray);
  }
  filterNumber(["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"]);