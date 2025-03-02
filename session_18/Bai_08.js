const ones = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
const tens = ["", "mười", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];

let num = 123; 
let result = "";
let hundred = Math.floor(num / 100);
let ten = Math.floor((num % 100) / 10);
let one = num % 10;

if (hundred > 0) {
    result += ones[hundred] + " trăm";
    if (ten === 0 && one > 0) {
        result += " linh";
    }
}

if (ten > 0) {
    result += (result ? " " : "") + tens[ten];
    if (one === 5) {
        result += " lăm";
    } else if (one > 0) {
        result += " " + ones[one];
    }
} else if (one > 0) {
    result += (result ? " " : "") + ones[one];
}