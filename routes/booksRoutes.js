const router = require("express").Router();
const booksModel = require("../model/BooksModel.js");

router.post("/add", async (req, res) => {
    try {
        const data = req.body;
        const newBook = new booksModel(data);
        await newBook.save();
        res.status(200).json({ message: "Book Added Successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error adding book" });
    }
});
//Get request
router.get("/getBooks", async(req, res) => {
    let books;
    try{
       books = await booksModel.find();
       res.status(200).json((books))
    }catch(err){
        console.log(err);
    }
});

// Get req.with _Id
router.get("/getBooks/:id", async(req, res) => {
    let book;
    const id = req.params.id;
    try{
        await booksModel.findById(id);
        res.status(200).json({book});
    }catch(err){
        console.log(err);
    }
});


// update book By Id
router.put("/updateBook/:id", async (req, res) => {
    const id = req.params.id;
    const { bookName, description, author, image, price } = req.body;
    try {
        const updatedBook = await booksModel.findByIdAndUpdate(id, {
            bookName,
            description,
            author,
            image,
            price   
        }, { new: true }); // `new: true` returns the updated document

        if (updatedBook) {
            res.status(200).json({ message: "Data is updated successfully" });
        } else {
            res.status(404).json({ message: "Book not found" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error updating book" });
    }
});

//Delete Book By id
router.delete("/deleteBook/:id", async(req, res) => {
    const id = req.params.id;
    try{
        await booksModel
        .findByIdAndDelete(id)
        .then(() => res.status(201).json({message:"Delete successfully"}));
    }catch(err){
        console.log(err);
        res.status(500).json({ message: "Error updating book" });
    }
})

module.exports = router;