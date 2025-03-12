let arr = [];
function input() {
    for (let i = 0; i < 10; i++) {
        arr[i] = +prompt(`Mời bạn nhập phần thứ ${i + 1}`);

    }
    if (!Number.isInteger(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    if (arr.length == 0) {
        console.log("Mảng không có phần tử nào");
        return;
    }
    
    let pow = arr.map((num) => num *num);
    let numberEven = pow.filter((num) => num % 2 ==0);
    console.log(numberEven);
}
input();