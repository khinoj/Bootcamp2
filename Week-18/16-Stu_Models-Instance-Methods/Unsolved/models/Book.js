const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema`
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: String,
    price: Number,
});

// TODO: Create a custom instance method named `getDiscount`
bookSchema.methods.getDiscount = function () { 
    const discount = this.price / 2;
    return discount;
 };

// TODO: Create a model named `Book`
const Book = mongoose.model('Book', bookSchema)

// TODO: Create a new instance of the model
const newBook = new Book({ title: 'The hunger games', author:'price', price: 15 })



// TODO: Call the custom instance method on the instance
console.log(newBook.getDiscount());


module.exports = Book;
