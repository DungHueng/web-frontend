let employees = []; // tạo mảng chứa danh sách nhân viên
while (true) {
    let choice = +prompt(
        `
        1.Thêm nhân viên mới.
        2.Xóa nhân viên theo id.
            Tìm thấy nhân viên có id confirm người dùng muốn xóa nhân viên hay không?
            Không tìm thấy nhân viên có id thì hiển thị thông báo.
        3. Cập nhật mức lương của nhân viên theo id
        4. Tìm kiếm nhân viên theo tên.
        5. Thoát 
    `
    );
    switch (choice) {
        case 1:
            // thêm nhân viên
            addNewEmployee();
            break;
        case 2:
            deleteEmployee();
            break;
        case 3:
            update(employees);
            break;
        case 4:
            search(employees);
            break;
        case 5:
            console.log("Chương trình kết thúc");

            break;
        default:
            break;
    }
    if (choice == 5) {
        break;
    }
}
function addNewEmployee() {
    let name1 = prompt("nhập tên");
    let position = prompt("nhập vị trí");
    let salary = +prompt("mời nhập lương");
    let id = Math.floor(Math.random() * 5575676 + new Date().getMilliseconds())

    let employee = {
        id: id,
        name: name1,
        salary: salary,
        position: position,
    }

    employees.push(employee);
    console.log("thêm nhân viên thành công", employees);

}
function deleteEmployee() {
    let id = +prompt("nhập id nhân viên muốn xóa");
    let findIndex = employees.findIndex(item => item.id == id);
    if (findIndex != -1) {
        let confitmDelete = confirm("bạn có muốn xóa hay không?");
        if (confitmDelete) {
            employees.splice(findIndex, 1);
            console.log("xóa nhân viên thành công!");
        }
    } else {
        console.log("không tìm thấy nhân viên có id là: ", id);
    }
}
function update(arr) {
    let id = +prompt("nhập id nhân viên muốn cập nhật lương");
    let count=0;
    let index=0;
    for (let i = 0; i < arr.length; i++) {
     if(arr[i].id==id){
         index=i;
         count++;
     }
    }
    if (count>0) {
        arr[index].salary=+prompt("Mời bạn nhập số lương muốn cập nhật");
          console.log("cập nhật thành công");


    } else {
        console.log("không tìm thấy nhân viên có id là: ", id);
    }
}
function search(arr) {
    let tim = prompt("Mời bạn nhập tên muốn tìm kiếm");
    let index = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name.endsWith(tim)) {
            index.push(i);
            count++;
        }
    }
    if (count) {
        console.log(`Có ${count} nhân viên tên ${tim} là:`);
        for (let i = 0; i < count; i++) {
            console.log(arr[index[i]]);
        }
    } else {
        console.log("Nhân viên không có trong danh sách");
    }

}