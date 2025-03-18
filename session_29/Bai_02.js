let products = [];
let choice = 0;
do {
    choice = +prompt(`
    1. Thêm sản phẩm vào danh sách sản phẩm.
    2.  Hiển thị tất cả sản phẩm.
    3.  Hiển thị chi tiết sản phẩm theo id.
    4.  Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
    5.  Xóa sản phẩm theo id.
    6.  Lọc sản phẩm theo khoảng giá.
    7.  Thoát.
    `)
    switch (choice) {
        case 1:
            addProduct();
            break;
        case 2:
            showProduct();
            break;
        case 3:
            showProductId();
            break;
        case 4:
            updateProducts();
            break;
        case 5:
            deleteProducts();
            break;
        case 6:
            filterPrice();
            break;
        case 7:
            console.log("Chương trình kết thúc");
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            break;
    }
} while (choice != 7);
function addProduct() {
    let id = 0;
    if (products.length == 0) {
        id = 1;
    } else {
        id = products[products.length - 1].id + 1;
    }
    let name = prompt("Mời bạn nhập tên sản phẩm");
    let price = +prompt("Mời bạn nhập giá sản phẩm");
    let category = prompt("Mời bạn nhập danh mục sản phẩm");
    let quantity = +prompt("Mời bạn nhập số lượng sản phẩm");
    let product = {
        id: id,
        name: name,
        price: price,
        category: category,
        quantity: quantity
    }
    products.push(product);
    console.log("Đã thêm thành công");

}
function showProduct() {
    if (products.length == 0) {
        console.log("không có dữ liệu");
    } else {
        console.log(products)
    }
}
function showProductId() {
    let id=+prompt("Mời bạn nhập id sản phẩm muốn hiện thị");
    let index=0;
    let check=0;
    for (let i = 0; i < products.length; i++) {
       if (id==products[i].id) {
          index=i;
          check++;
          break;
       } 
    }
    if (check>0) {
        console.log(products[index]);

    }else{
        console.log("Id không tồn tại");

    }
}
function updateProducts() {
    let id=+prompt("Mời bạn nhập id sản phẩm muốn cập nhật");
    let index=0;
    let check=0;
    for (let i = 0; i < products.length; i++) {
       if (id==products[i].id) {
          index=i;
          check++;
          break;
       } 
    }
    if (check>0) {
        products[index].name=prompt("Mời bạn nhập tên mới ");
        products[index].price = +prompt("Mời bạn nhập giá sản phẩm mới");
        products[index].category =prompt("Mời bạn nhập danh mục sản phẩm mới");
        products[index].quantity = +prompt("Mời bạn nhập số lượng sản phẩm mới");
    }else{
        console.log("Id không tồn tại");

    }
}
function deleteProducts() {
    let check=0;
    let index=0;
    let id = +prompt("Mời nhập ID muốn xóa:");
    for (let i = 0; i < products.length; i++) {
        if (id == products[i].id) {
            check++;
            index=i;
            break;
        }
    }
    if (check>0) {
        let confitmDelete = confirm("bạn có muốn xóa hay không?");
        if (confitmDelete) {
            products.splice(index, 1);
            console.log("xóa nhân viên thành công!");
        }
    } else {
        console.log("Không tìm thấy ID.");
    }
}
 function filterPrice() {
    let price1=+prompt("Mời bạn nhập giá từ");
    let price2=+prompt("Mời bạn nhập giá đến");
    let check=0;
    let index=[];
    for (let i = 0; i < products.length; i++) {
        if (products[i].price>=price1&&products[i].price<=price2) {
            index.push(i);
            check++;
        }
    }
    if(check>0){
      console.log(` Sản phẩm nằm có giá từ ${price1} đến ${price2}`);
     for (let i = 0; i < index.length; i++) {
       console.log(products[index[i]]);
     }

    }else{
        console.log(`Không có sản phẩm nào giá từ ${price1} đến ${price2}`);

    }
 }