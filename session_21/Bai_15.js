let tien = +prompt("Mời bạn nhập số tiền muốn rút (bội số của 1.000 VNĐ):");

if (tien % 1000 !== 0 || tien <= 0) {
    console.log("Số tiền không hợp lệ. Vui lòng nhập số tiền là bội số của 1.000 VNĐ.");
} else {
    let tienthua = tien;

    let to5l = 0, to2l = 0, to1l = 0, to50k = 0, to20k = 0, to10k = 0, to5k = 0, to2k = 0, to1k = 0;

    if (tienthua >= 500000) {
        to5l = Math.floor(tienthua / 500000);
        tienthua %= 500000;
    }
    if (tienthua >= 200000) {
        to2l = Math.floor(tienthua / 200000);
        tienthua %= 200000;
    }
    if (tienthua >= 100000) {
        to1l = Math.floor(tienthua / 100000);
        tienthua %= 100000;
    }
    if (tienthua >= 50000) {
        to50k = Math.floor(tienthua / 50000);
        tienthua %= 50000;
    }
    if (tienthua >= 20000) {
        to20k = Math.floor(tienthua / 20000);
        tienthua %= 20000;
    }
    if (tienthua >= 10000) {
        to10k = Math.floor(tienthua / 10000);
        tienthua %= 10000;
    }
    if (tienthua >= 5000) {
        to5k = Math.floor(tienthua / 5000);
        tienthua %= 5000;
    }
    if (tienthua >= 2000) {
        to2k = Math.floor(tienthua / 2000);
        tienthua %= 2000;
    }
    if (tienthua >= 1000) {
        to1k = Math.floor(tienthua / 1000);
        tienthua %= 1000;
    }
    if (to5l > 0) console.log("500.000 - " + to5l + " tờ");
    if (to2l > 0) console.log("200.000 - " + to2l + " tờ");
    if (to1l > 0) console.log("100.000 - " + to1l + " tờ");
    if (to50k > 0) console.log("50.000 - " + to50k + " tờ");
    if (to20k > 0) console.log("20.000 - " + to20k + " tờ");
    if (to10k > 0) console.log("10.000 - " + to10k + " tờ");
    if (to5k > 0) console.log("5.000 - " + to5k + " tờ");
    if (to2k > 0) console.log("2.000 - " + to2k + " tờ");
    if (to1k > 0) console.log("1.000 - " + to1k + " tờ");
}