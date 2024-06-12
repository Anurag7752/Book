const express = require("express");
const app = express();
require ("./connection/conn.js");
const bookRoute = require ("./routes/booksRoutes.js");
const BookModel = require ("./model/BooksModel.js");
app.use(express.json());
app.use("/api/v1/",bookRoute);

app.listen(3000, () => {
    console.log(`listen to server`);
});