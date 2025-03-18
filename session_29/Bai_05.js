let users = [];

do {
    choice = +prompt(`
        1. Đăng ký người dùng mới.
        2. Đăng nhập người dùng.
        3. Thoát`);

    switch (choice) {
        case 1:
            register();
            break;
        case 2:
            login();
            break;
        case 3:
            alert("Chương trình kết thúc");
            break;
        default:
            alert("Lựa chọn không hợp lệ");
            break;
    }
} while (choice != 3);


function register() {
    let name = prompt("Mời bạn nhập tên");
    let email = "";
    let check = 0;
    do {
        check=0;
        email = prompt("Mời bạn nhập email");
        if (email.includes('@') && (email.endsWith('.com') || email.endsWith('.vn'))) {
            for (let i = 0; i < users.length; i++) {
                if (email == users[i].email) {
                    console.log("Email đã tồn tại");
                    check++;
                    break;
                }
            }
        } else {
            console.log("Email không hợp lệ");
            check++;
        }
    } while (check != 0);
    let password = "";
    let count = 0;
    do {
        let count=0;
       password=prompt("Mời bạn nhập mật khẩu");
       if (password.length>=6) {
        count++;
       }
       let hasUpperCase = 0;
       let hasSpecialChar = 0;
       let specialChars = "!@#$%^&*";
   
       for (let char of password) {
        if (char >= 'A' && char <= 'Z') {
            hasUpperCase = 1;
        } else if (specialChars.includes(char)) {
            hasSpecialChar = 1;
        }
        
        if (hasUpperCase && hasSpecialChar) { 
          count++;
            break;
        }
    }
    if (count!=2) {
        console.log("Mật khẩu không hợp lệ");  
    }
    } while (count !=2);

    let information={
        name:name,
        email:email,
        password:password
    }
    users.push(information);
    console.log("Đăng ký tài khoản thành công ");
}
function login() {
    let email = prompt("Nhập email:");
    let password = prompt("Nhập mật khẩu:");
    let user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert(`Đăng nhập thành công! Xin chào, ${user.name}`);
    } else {
        alert("Email hoặc mật khẩu không đúng!");
    }
}