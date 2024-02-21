//use("broadway"); //database

//CRUD
//?Create=>Add
//insertOne,insertMany
//?insereOne =>to insert one item to db

// db.course.insertOne({
//   name: "django",
//   duration: 90,
//   price: 25000,
// });
// db.course.find();

// db.stuent.insertOne({
//   name: "Reena",
//   age: 21,
//   address: "kalanki",
// });

// db.moviesList.insertOne({
//   name: "Cast away",
//   releaseYear: 2000,
//   mainActor: "Tom Hanks",
// });
// db.moviesList.find();

use("daraz");

// db.product.insertOne({
//   name: "bottole",
//   brand: "server well",
//   price: 700,
// });

// db.product.insertOne({
//   name: "noodle",
//   brand: "wai wai",
//   price: 30,
// });

// db.product.insertOne({
//   name: "Rice cooker",
//   brand: "Samsung",
//   price: 10500,
// });

//to read or get item from table
//db.product.find();

// db.product.insertMany([
//   {
//     name: "Shampoo",
//     brand: "sinksilk",
//     price: 700,
//   },
//   { name: "hair oil", brand: "dabar amala", price: 500 },
// ]);
//db.product.find();

// db.customer.insertOne({
//   name: "Reena",
//   address: "kalanki",
//   email: "reena@123.gmail.com",
// });

//db.customer.find();

//?read operation
// db.product.findOne({ name: "Shampoo" });
// db.customer.findOne({ name: "Reena" });

//?find=>return all product that matches the condition
// db.product.find({ price: 700 });
// db.product.find();

//delete
//db.product.deleteOne({ name: "Rice cooker" });
//db.product.find();

//db.product.deleteMany({ price: 700 });
//db.product.find();

//?update=>changes values /edit
//?update

// db.product.updateOne(
//   { name: "hair oil" },
//   {
//     $set: {
//       price: 1000,
//       brand: "parachute",
//     },
//   }
// );

//db.product.find();

// db.product.updateMany(
//   { name: "hair oil" },
//   {
//     $set: {
//       price: 1550,
//     },
//   }
// );
// db.product.find();

//ureme
