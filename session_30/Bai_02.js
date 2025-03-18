let administer = [];
let choice = 0;
let listBookCategory = [
    {
        id: 1,
        name: "Dragon ball",
        price: 27000,
        quantity: 20,
        category: "Hành động",
    },
    {
        id: 2,
        name: "Star wars",
        price: 50000,
        quantity: 25,
        category: "Khoa học",
    },
    {
        id: 3,
        name: "Sherlock Home",
        price: 40000,
        quantity: 15,
        category: "Tiểu thuyết",
    },
];
do {
    choice = +prompt(`MENU
        1. Hiển thị danh sách sách theo thể loại
        2. Thêm sách mới vào kho
        3. Tìm kiếm sách theo tên hoặc id.
        4. Mua sách.
        5. Sắp xếp sách theo giá:
            a. Tăng dần.
            b. Giảm dần.
        6. Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
        7. Hiển thị tổng số lượng sách trong kho.
        8. Thoát chương trình.
        `)
    switch (choice) {
        case 1:
            ShowBookCategory(listBookCategory);
            break;
        case 2:
            addNewBook(listBookCategory);
            break;
        case 3:
            searchBook(listBookCategory);
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        case 8:
            console.log("Chương trình kết thúc!");
            break;

        default:
            break;
    }
} while (choice != 8);

function ShowBookCategory(ListBook) {
    let choice = +prompt(`Lựa chọn của bạn
        1: Khoa học
        2: Hành động
        3: Tiểu thuyết
        `);
    if (choice == 1) {
        let listBookCategory = ListBook.filter((Book) => Book.category === "Khoa học");
        console.log(listBookCategory);
    } else if (choice == 2) {
        let listBookCategory = ListBook.filter((Book) => Book.category === "Hành động");
        console.log(listBookCategory);
    } else if (choice == 3) {
        let listBookCategory = ListBook.filter((Book) => Book.category === "Tiểu thuyết");
        console.log(listBookCategory);
    } else {
        console.log("Lựa chọn không hợp lệ!");
    }
}
function addNewBook(){
    let id = 0;
    if (dry.length == 0) {
        id = 1;
    } else {
        id = dry[dry.length - 1].id + 1;
    }
    let name = "";
    let checkName = 0;
    do {
        name = prompt("Mời bạn nhập tên sách");
        checkName = 0;
        if (name.length == 0) {
            console.log("Tên không được để trống");
            checkName++;
        }
    } while (checkName != 0);
    let checkPrice = 0;
    let price = 0;
    do {
        checkPrice = 0;
        price = +prompt("Mời bạn nhập giá tiền");
        if (price < 0) {
            console.log("Giá tiền không hợp lệ");
            checkPrice++;
        }
    } while (checkPrice != 0);
    let checkQuantity = 0;
    let quantity = 0;
    do {
        checkQuantity = 0;
        quantity = +prompt("Mời bạn nhập số lượng sản phẩm");
        if (quantity < 0) {
            console.log("Số lượng không hợp lệ");
            checkQuantity++;
        }
    } while (checkQuantity != 0);
    let category = "";
    let choiceCategory = +prompt(`
    Mời bạn chọn thể loại sách:
    1.Hành động
    2.Khoa học
    3.Tiểu thuyết
    `);
    switch (choiceCategory) {
        case 1:
            category = "Hành động";
            break;
        case 2:
            category = "Khoa học";
            break;
        case 3:
            category = "Tiểu thuyết";
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            break;
    }
    let book={
        id:id,
        name:name,
        price :price,
        quantity :quantity,
        category:category
    }
    dry.push(book);
}
function searchBook(listBook) {
    let nameBook = prompt("Mời bạn nhập tên sách mà bạn muốn tìm kiếm");
    let listNewBook = listBook.filter((book)=>book.name.toLowerCase().includes(nameBook.toLowerCase()));
    if (listNewBook.length === 0) {
        console.log("Không tìm thấy sách phù hợp!");
    } else {
        console.log("Kết quả tìm kiếm:", listNewBook);
    }
}