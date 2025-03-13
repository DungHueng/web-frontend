let r = 0;
let a = 0;
let b = 0;
do {
  menu();
  switch (choice) {
    case 1:
      radius();
      Acreage_circle(r);
      break;
    case 2:
      radius();
      perimeter_circle(r);
      break;
    case 3:
      length_width();
      acreage_rectangular(a, b);
      break;
    case 4:
      length_width();
      perimeter_rectangular(a, b);
      break;
    case 5:
      console.log("Chương trình kết thúc");
      break;
    default:
      console.log("Nhập không hợp lệ");
      break;
  }

} while (choice != 5);
function menu() {
  choice = +prompt("=====Menu===== \n1. Tính diện tích hình tròn. \n2. Tính chu vi hình tròn. \n3. Tính diện tích hình chữ nhật. \n4. Tính chu vi hình chữ nhật. \n5. Thoát.");
}
function Acreage_circle() {
  let Acreage_circle = r * r * Math.PI;
  console.log(`Diện tích hình tròn là: ${Acreage_circle}`);

}
function perimeter_circle() {
  let perimeter_circle = 2 * r * Math.PI;
  console.log(`Chu vi hình tròn là: ${perimeter_circle}`);

}
function acreage_rectangular() {
  let acreage_rectangular = a * b;
  console.log(`Diện tích hình chữ nhật là: ${acreage_rectangular}`);
}
function perimeter_rectangular() {
  let perimeter_rectangular = 2 * (a + b);
  console.log(`Chu vi hình chữ nhật là: ${perimeter_rectangular}`);
}
function radius() {
  r = +prompt("Mời bạn nhập bán kính hình tròn");
}
function length_width() {
  a = +prompt("Mời bạn nhập chiều rộng");
  b = +prompt("Mời bạn nhập chiều dài");
}