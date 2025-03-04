let str = prompt("nhập chuỗi bất kì");
let search = prompt("nhập ký tự muốn kiểm tra");
let found = false;
if(str){
    for(i = 0;i < str.length;i++){
        if(str[i] === search)
        found = true;
    }
}
if(found){
    alert("tồn tại từ tìm kiếm");
} else {
    alert("không tồn tại từ tìm kiếm");
}