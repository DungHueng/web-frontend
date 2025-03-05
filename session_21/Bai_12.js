for (let i = 0; i < 5; i++) {
    let randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    console.log(`%c Màu sắc đã được thay đổi`, `color: ${randomColor}`);
}