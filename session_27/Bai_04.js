let arr = [];
let choice = 0;
do {
    choice = +prompt("1. Nhập danh sách số nguyên. \n2. Tính trung bình các số. \n3. Tìm số chẵn lớn nhất. \n4. Tìm số lẻ nhỏ nhất. \n5. Thoát.");
    switch (choice) {
        case 1:
            addNumbers();
            break;
        case 2:
            ave(arr);
            break;
        case 3:
            soChanLonNhat(array);
            break;
        case 4:
            soLeNhoNhat(arr)
            break;
        default:
            console.log("Chương trình lỗi");
            break;
    }
} while (choice != 5);
function addNumbers() {
    let number = +prompt("Nhập số lượng phần tử trong array");
    if (Number.isInteger(number)) {
        for (let i = 0; i < number; i++) {
            let element = +prompt("Nhập giá trị thứ " + (i + 1));
            if (Number.isInteger) {
                arr.push(element);
            }
            console.log(arr);
        }
    }
}
function ave(arr) {
    let sum = arr.reduce((acc, cur) => acc + cur, 0);
    let tb = sum / arr.length;
    console.log(tb);
}
function soChanLonNhat(array) {
    let max = array[0];
    // array = [2, 3, 1, 5, 4, 7];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0 && max < array[i]) {
            max = array[i];
        }
        if (max % 2 == 1) {
            console.log("Không có số chẵn");
        } else {
            console.log(max);
        }
    }
}
function soLeNhoNhat(arr) {
    let min = arr[0];
    // array = [2, 6, 4, 2, 8, 5];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0 && min > arr[i]) {
            min = arr[i];
        }
        if (min % 2 == 1) {
            console.log("Không có số lẻ");
        } else {
            console.log(min);

        }
    }
}