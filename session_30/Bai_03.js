let store = [];
let choice = 0;
let cart = [];
do {
    choice = +prompt(`
        1.Hiển thị danh sách điện thoại theo hãng
        2.Thêm sách điện thoại mới vào kho
        3.Tìm kiếm điện thoại theo tên hoặc id.
        4.Mua điện (Nhập id sách cần mua và số lượng, cập nhật lại kho).
        5.Thanh toán tất cả điện thoại trong giỏ hàng
        6.Sắp xếp sách theo giá:
          1.Tăng dần.
          2.Giảm dần.
        7.Hiển thị tổng số tiền của các điện thoại trong kho
        8.Hiển thị tổng số lượng điện thoại theo từng hàng
        9.Thoát chương trình.        
        `);
    switch (choice) {
        case 1:
            showStoreByCategory();
            break;
        case 2:
            addStore();
            break;
        case 3:
            searchId();
            break;
        case 4:
            buyBook();
            break;
        case 5:
            checkout();
            break;
        case 6:
            arrangePhone();
            break;
        case 7:
            sumPhone();
            break;
        case 8:
            countByCategory();
          break;
        case 9:
            break;
            console.log("Chương trình kết thúc");
        default:
            break;
    }
} while (choice != 9);

function showStoreByCategory() {
    let choice = +(`
    1.Samsung 
    2.Apple
    3.Xiaomi
    `);
    if (choice == 1) {
        let result = store.filter(item => item.category == "Samsung");
        console.log(result);
    } else if (choice == 2) {
        let result = store.filter(item => item.category == "Apple");
        console.log(result);
    } else if (choice == 3) {
        let result = store.filter(item => item.category == "Xiaomi");
        console.log(result);
    } else {
        console.log("Lựa chọn không hợp lệ");
    }
}
function addBook() {
    let id = 0;
    if (store.length == 0) {
        id = 1;
    } else {
        id = store[store.length - 1].id + 1;
    }
    let name = "";
    let checkName = 0;
    do {
        name = prompt("Mời bạn nhập tên điện thoại");
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
    1.Samsung
    2.Apple
    3.Xiaomi
    `);
    switch (choiceCategory) {
        case 1:
            category = "Samsung";
            break;
        case 2:
            category = "Apple";
            break;
        case 3:
            category = "Xiaomi";
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            break;
    }
    let phone = {
        id: id,
        name: name,
        price: price,
        quantity: quantity,
        category: category
    }
    store.push(phone);
}
function searchId() {
    let idName = +prompt("Mời bạn nhập id điện muốn tìm kiếm");
    let index = store.findIndex(item => item.id == idName);
    if (index != -1) {
        console.log(store[index]);
    } else {
        console.log("Không tìm thấy sách trong kho");
    }
}
function buyPhone() {
    let id = +prompt("Mời bạn nhập id điện muốn mua");
    let index = store.findIndex(item => item.id == id);
    if (index != -1) {
        let quantity = +prompt("Mời bạn nhập số lượng điện muốn mua");
        if (quantity < store[index].quantity) {
            store[index].quantity -= quantity;
            let indexPhone = cart.findIndex(item => item.id == id);
            if (indexPhone != -1) {
                cart[indexPhone].quantity = +quantity
            } else {
                cart.push({ ...store[indexPhone], quantity: quantity });
            }
        } else {
            console.log("Nhập số lượng điện không hợp lệ");
        }
    } else {
        console.log("Không tìm thấy điện trong cửa hàng");
    }
}
function checkout() {
    if (cart.length === 0) {
        console.log("Giỏ hàng trống");
        return;
    }

    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log(`Tổng tiền cần thanh toán: ${total} VND`);
    
    cart = [];
    console.log("Thanh toán thành công, giỏ hàng đã được làm trống");
}

function arrangePhone() {
    let choice = prompt(`
        1. Tăng dần
        2. Giảm dần
        `)
    if (choice == 1) {
        store.sort((a, b) => a.price - b.price);
        console.log(dry);
    } else if (choice == 2) {
        dry.sort((a, b) => b.price - a.price);
        console.log(dry);
    } else {
        console.log("Lựa chọn không hợp lệ");

    }
}
function sumPhone() {
    let money = 0;
    for (let i = 0; i < store.length; i++) {
        money += store[i].quantity * store[i].price;
    }
    console.log(`Tổng tiền điện thoại trong kho là ${money} `);
}
function countByCategory() {
    let categories = ["Samsung", "Apple", "Xiaomi"];
    let counts = {};

    categories.forEach(category => {
        counts[category] = store
            .filter(item => item.category === category)
            .reduce((sum, item) => sum + item.quantity, 0);
    });

    console.log("Tổng số lượng theo hãng:", counts);
}