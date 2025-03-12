function change(array) {
    if (!Array.isArray(array)) {
        console.log("Dữ liệu nhập không hợp lệ!");
        return;
    }
    if (array.length === 0) {
        console.log("Mảng không có phần tử nào");
        return;
    }

    let result = array.map(date => {
        if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
            let [year, month, day] = date.split("-");
            return `${day}/${month}/${year}`;
        }
        return null;
    }).filter(date => date !== null); 

    console.log(result);
}

change(["2025-03-11", "2024-09-25", "2023-08-07"]);