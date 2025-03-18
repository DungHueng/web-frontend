let rectangle = {
    width : 10,
    height : 5,
    getArea : function () {
        return "Một phương thức trả về diện tích hình chữ nhật là: " + this.width * this.height;
    },
};
console.log(rectangle.getArea());
