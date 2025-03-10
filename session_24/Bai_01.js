let array=[];
let choose = 0;

do{
    choose=+prompt(
        "1. Nhập mảng \n2. Hiện thị mảng \n3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng \n4. Tính tổng các phần tử trong mảng \n5. Tìm số lần xuất hiện của một phần tử trong mảng \n6. Sắp xếp mảng tăng dần \n7. Thoát chương trình"
    );
    switch(choose){
        case 1:
        let length = +prompt("Mời bạn nhập độ dài mảng");
        arr=[];
        for(i=0;i<arr.length;i++){
            arr[i] = +prompt("Mời bạn nhập mảng" +(i+1));
        }
            break;
        case 2:
             console.log(arr);
            break;
        case 3:
            let max = arr[0];
            numbers =+ numbers;
            if(Number.isInteger(numbers)){
                for(let i=0;i<arr.length;i++){
                    if(max < arr[i+1]){
                        max = arr[i+1];
                    }
                }
                console.log(max+ " là số lớn nhất trong dãy số");
            }
            break;

    }
}while( choose != 7);