let array = [];
let choice;
let max = array[0];
do {
    choice = +prompt(
        "1.Nhập mảng số nguyên \n2. Hiển thị mảng \n3.Tìm các phần tử chẵn và lẻ \n4.Tính trung bình cộng của mảng \n5. Xóa phần tử tại vị trí chỉ định \n6.Tìm phần tử lớn thứ hai trong mảng \n7. Thoát chương trình"
    );

    switch (choice) {
        case 1:
            let length = +prompt("Nhập độ dài mảng:");
            array = [];
            if (!isNaN(array)) {
                for (let i = 0; i < length; i++) {
                    array[i] = +prompt("Nhập phần tử thứ " + (i + 1));
                    if (isNaN(array[i])) {
                        console.log("không phải số nguyên");
                    }
                }
            } else {
                alert("không hợp lệ");
            }
            break;
        case 2:
            alert(array);
            break;
        case 3:
            let Even = [];
            let Odd = [];
            let testOdd=false;
            let testEven=false;
            for (i = 0; i < array.length; i++) {
                if (array[i] % 2 == 0) {
                    Even.unshift(array[i]);
                    testEven=true;
                } else {
                    Odd.unshift(array[i]);
                    testOdd=true;
                }
            }
            if(testEven){
                alert("Mảng có số chẵn là "+Even);
            }else{
                alert("Mảng không có số chẵn");
            }
            if(testOdd){
                alert("mảng có số lẻ là "+Odd);
            }else{
                alert("Mảng không có số lẻ");
            }

            break;
        case 4:
            let sum = 0;
            let ave = 0;
            for (i = 0; i < array.length; i++) {
                sum += array[i];
            }
            ave = sum / array.length;
            alert(ave);

            break;
        case 5:
            let search = prompt("Mời bạn nhập vị trí muốn xoá");
            array.splice(search, 1);
            alert(array);
            break;
        case 6:
            let temp =0;
            for(i=0;i<array.length;i++){
                for(j=0;j<array.length;j++){
                    if(array[j]>arr[j+1]){
                        temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;
                    }
                }
            }
            let max2 = array[array.length-2];
            alert("Số lớn thứ hai trong mảng là" + max2);
            break;
    }
} while (choice !== 7);