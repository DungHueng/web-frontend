let book = {
    title : "JavaScript Basics",
    author : "John Smith",
    page : 200,
};
delete book["page"];
console.log(book.title);
console.log(book.author);
console.log(book.page);