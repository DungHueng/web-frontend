let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh",
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh",
    }
];

let cart = [];
let choice = 0;

do {
    choice = +prompt(`MENU
        1. Hiển thị các sản phẩm theo tên danh mục.
        2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
            a. Sản phẩm không có trong cửa hàng hiển thị thông báo.
            b. Sản phẩm có trong cửa hàng
                i. Cho người dùng nhập số lượng sản phẩm muốn mua, mua thành công số lượng sản phẩm trong cửa hàng sẽ bị trừ đi.
                ii. Số lượng sản phẩm trong cửa hàng = 0 hoặc không đủ hiển thị thông báo.
        3. Sắp xếp các sản phẩm trong cửa hàng theo giá:
            a. Tăng dần.
            b. Giảm dần.
        4. Tính số tiền thanh toán trong giỏ hàng.
        5. Thoát.`)

    switch (choice) {
        case 1:
            showProductbyCategory();
            break;
        case 2:
            addProduct();
            console.log(products);
            console.log(cart);
            break;
        case 3:
            priceArrangeProduct();
            break;
        case 4:
            checkPriceProduct();
            break;
        case 5:
            console.log("Chương trình kết thúc");
            break;

        default:
            break;
    }

} while (choice != 5);
function showProductbyCategory() {
    let choice = prompt(`
        1. món ăn của dân tộc Kinh,
        2. món ăn của dân tộc Mông, 
        `)
    if (choice == 1) { // Lọc sản phẩm theo dân tộc Kinh
        let result = products.filter(item => item.category == "món ăn dân tộc Kinh");
        console.log(result);
    } else if (choice == 2) {
        let result = products.filter(item => item.category == "món ăn dân tộc Mông");
        console.log(result);
    } else {
        console.log("Lựa chọn không hợp lệ!");
    }
}
function addProduct() {
    let id = prompt("Mời bạn nhập ID sản phẩm mà bạn muốn mua");
    let index = products.findIndex(item => item.id = id);
    if (index != -1) {
        let quantity = +prompt("Mời bạn nhập số lượng");
        if (quantity > products[index].quantity) {
            console.log(`sản phẩm không đủ, chỉ còn lại `, products[index].quantity);
        } else {
            products[index].quantity -= quantity;
            let Index = cart.findIndex(item => item.id == id);
            if (Index == -1) {
                cart.push({ ...products[index], quantity: quantity });
                console.log("Sản phẩm thêm thành công", cart);
            }
        }
    } else {
        console.log("Sản phẩm không có trong cửa hàng");
    }
}
function priceArrangeProduct() {
    let choice = prompt(`
        1. Sắp xếp sản phẩm trong cửa hàng theo giá tăng dần.
        2. Sắp xếp sản phẩm trong cửa hàng theo giá giảm dần.
        `)
    if (choice === 1) {
        products.sort((a, b) => a.price - b.price);
        console.log(products);
    } else if (choice === 2) {
        products.sort((a, b) => b.price - a.price);
        console.log(products);
    } else {
        console.log("Lựa chọn của bạn không hợp lệ!");
    }
}
function checkPriceProduct(card) {
    let total = card.reduce((total,products) => total + products.price * products.quantity, 0);
    console.log(total);
}