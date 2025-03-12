function filterNumber() {
    let array = [];

    for (let i = 0; i < 10; i++) {
        let number = +prompt("Mời bạn nhập giá trị");
        array.push(number);
    }

    let newArray = array.filter((item) => {
        return item >= 10;
    });

    newArray.length > 0 ? console.log(newArray) : console.log("Mảng không có phần tử nào");
}
filterNumber();