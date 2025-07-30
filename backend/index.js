const express = require('express');
const app = express();
const cors = require("cors");

const mongoose = require('mongoose');


const port = process.env.PORT || 5000 ;
require('dotenv').config()

// middleware
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}))

// A4fuFn6MxGEx3ULe

// routes
const bookRoutes = require('./src/books/book.route')
const orderRoutes = require('./src/orders/order.route')
const userRoutes = require ('./src/users/user.route')
const adminRoutes = require ("./src/stats/admin.stats")

app.use("/api/books", bookRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/auth", userRoutes)
app.use("/api/admin", adminRoutes)




async function main() {
  await mongoose.connect("mongodb+srv://yasarahasini61:5D6cPGt5ZD9qDzDe@cluster0.nhor632.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    app.use('/', (req, res) => {
    res.send("Book store Server is running!");
})
}

main().then(() => console.log("Mongodb Connected Successfully!")).catch(err => console.log(err));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



