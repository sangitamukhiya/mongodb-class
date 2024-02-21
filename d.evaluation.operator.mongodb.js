use("esports_imdb");

//?fin the movies whose s
// db.movies.find({ summary: { $regex: "Pacific", $options: "i" } });

//?find the movies whose name include "Morty"
// db.movies.find({ name: { $regex: "Morty", $options: "i" } });

// db.sales.insertMany([
//   {
//     name: "TV",
//     order: 100,
//     volume: 50,
//   },
//   {
//     name: "Bottle",
//     order: 70,
//     volume: 150,
//   },
//   {
//     name: "Mouse",
//     order: 25,
//     volume: 10,
//   },
//   {
//     name: "Rice",
//     order: 10,
//     volume: 500,
//   },
// ]);

// db.sales.find({ order: { $gt: 50 } });

// db.sales.find({ $expr: { $gt: ["$order", "$volume"] } });

// db.movies.find();

//?find the movies whose rating is either 7 or 7.5 or 8 or 8.5 or 9 or 9.3
// db.movies.find({
//   $or: [
//     { "rating.average": 7 },
//     { "rating.average": 7.5 },
//     { "rating.average": 8 },
//     { "rating.average": 8.5 },
//     { "rating.average": 9 },
//     { "rating.average": 9.3 },
//   ],
// });

//?if or  is applied  on same field multiple condition ,we can use $in
// db.movies.find({"rating.average":{$in:[7,7.5,8,8.5,9,9.3]}})

db.movies.find({
  $nor: [
    { ganres: "Thiller" },
    { ganres: "Crime" },
    { ganres: "Supernatural" },
  ],
});

//?$nin
// db.movies.find({ genres: { $nin: ["Thiller", "Crime", "Supernatural"] } });

