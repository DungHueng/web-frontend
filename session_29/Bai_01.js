let contact = [];
let choice = 0;
while (true) {
    choice = +prompt(
        `MENU
    1. Thêm đối tượng Contact vào danh sách liên hệ.
    2. Hiển thị danh sách danh bạ.
    3. Tìm kiếm thông tin Contact theo số điện thoại.
    4. Cập nhật thông tin Contact(name, email, phone) theo id.
    5. Xóa một đối tượng Contact akhỏi danh sách danh bạ theo id.
    6. Thoát.
    ------------------------------------------------

    Mời bạn nhập lựa chọn
    `
    );
    switch (choice) {
        case 1:
            addNewContact();
            break;
        case 2:
            showContact();
            break;
        case 3:
            searchContact(contact);
            break;
        case 4:
            updateContact(contact);
            break;
        case 5:
            deleteContact();
            break;
        case 6:
            console.log("Chương trình kết thúc");
            break;
        default:
            break;
    }
    if (choice == 6) {
        break;
    }
}
function addNewContact() { // ý 1
    let ID = Math.floor(Math.random() * 5575676 + new Date().getMilliseconds());
    let Name = prompt("Mời bạn nhập tên người liên hệ");
    let Email = prompt("Mời bạn nhập Email người liên hệ");
    let Phone = +prompt("Mời bạn nhập số điện thoại của người liên hệ");

    let Contact = {
        id: ID,
        name: Name,
        email: Email,
        phone: Phone,
    }
    contact.push(Contact);
    console.log("Bạn đã thêm người liên hệ thành công", contact);
}

function showContact() { // ý 2
    console.log(contact);
}

function searchContact(arr) { // ý 3
    let search = prompt("Mời bạn nhập ID người liên hệ mà bạn muốn tìm kiếm");
    let index = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].phone == search) {
            index.push(i);
            count++;
        }
    }
    if (count) {
        console.log("Có " + count + " nhân viên tên " + search + " là");
        for (let i = 0; i < count; i++) {
            console.log(arr[index[i]]);
        }
    } else {
        console.log("Người liên hệ bạn tìm không có trong danh sách");
    }
}

function updateContact(arr) { // ý 4
    let ID = +prompt("Nhập ID người liên hệ mà bạn muốn cập nhật");
    let count = 0;
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == ID) {
            index = i;
            count++;
        }
    }
    if (count > 0) {
        arr[index].id = +prompt("Mời bạn nhập vào ID muốn cập nhật");
        arr[index].name = +prompt("Mời bạn nhập tên người liên hệ");
        arr[index].email = prompt("Mời bạn nhập Email người liên hệ");
        arr[index].phone = +prompt("Mời bạn nhập số điện thoại của người liên hệ");
        console.log("Cập nhật thành công!");
    } else {
        console.log("Không tìm thấy người liên hệ nào có ID là ", ID);
    }
}

function deleteContact() { // ý 5
    let ID = +prompt("Nhập ID người liên hệ mà bạn muốn xoá");
    let findIndex = contact.findIndex(item => item.id == ID);
    if (findIndex != - 1) {
        let confirmDelete = confirm("Bạn có chắc chắn muốn xoá người liên hệ này không?");
        if (confirmDelete) {
            contact.splice(findIndex, 1);
            console.log("Xoá người liên hệ thành công!");
        }
    } else {
        console.log("Không tìm thấy nhân viên có ID là: ", ID);
    }
}