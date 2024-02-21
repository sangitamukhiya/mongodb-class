use("esports_imdb");

// ? find movies whose language is Japanese

// db.movies.find({ language: { $eq: "Japanese" } });

//?find movies whose runtime is less than 30
// db.movies.find({ runtime: { $lte: 30 } });

// ? find movies whose runtime is greater than 90
// db.movies.find({ runtime: { $gte: 90 } });

// ? find movies whose rating is less than or equal to 6
// db.movies.find({ "rating.average": { $lte: 6 } });
// db.movies.find();

//?find movies whose status is  not "Ended"

// db.movies.find({ status: { $ne: "Ended" } });

//?fins the movies whose weight iss not 75

// db.movies.find({ weight: { $ne: 75 } });

//?find movies whose genres include crime

// db.movies.find({ genres: "Crime" });

// db.movies.find({ genres: ["Crime"] });

//?find movies whose weight is greater than 75
//?and rating is greater than 7

// db.movies.find({
//   $and: [
//     { weight: { $gt: 75 } }, { "rating.average": { $gt: 7 } }],
// });

//?find movies whose genres is "Drama" and "Crime"

// db.movies.find({ $and: [{ genres: "Drama" },
// { genres: "Crime" }] });

// db.movies.find({
//   $and: [{ "network.country.name": "United States" }, { status: "Running" }],
// });

//?find movies whose
// db.movies.find({
//   $and: [{ "rating.average": { $gt: 7 } }, { "rating.average": { $lte: 9 } }],
// });

//?equivalent code

//?OR
//?find movie whose rating is greater than 8 or genres is "Thiller"

// db.movies.find({
//   $or: [{ "rating.average": { $gt: 8 } }, { geners: "Thriller" }],
// });

//?find movies whose id is less than 5 or runtime is less than 30

// db.movies.find({ $or: [{ id: { $lt: 5 } }, { runtime: { $lt: 30 } }] });

// ?*********Assignment***************

//?Find movies whose status is "Ended"
// db.movies.find({ status: "Ended" });

// ?find movies whose rating is 9
//?Object vitra ko name lai string form ma lakhnu parxa

// db.movies.find({ "rating.average": 9 });

// ?find movies whose rating is greater than 7 and less than 9

// db.movies.find({ $and: [{ "rating.average": { $gt: 7, $lt: 9 } }] });

// ?find movies whose genres is Thriller
// db.movies.find({ genres: "Thriller" });

// ?find movies whose status is Running
// db.movies.find({ status: "Running" });

//? find movies whose status is Ended and runtime is 60
// db.movies.find({ $and: [{ status: "Ended" }, { runtime: 60 }] });

// ?find movies whose weight is 75 and network country is Canada
// db.movies.find({
//   $and: [{ weight: 75 }, { "network.country.name": "Canada" }],
// });
// ?find movies whose weight is 96 or runtime is 60
// db.movies.find({ $or: [{ weight: 96 }, { runtime: 60 }] });

// ? find movies whose rating average is not 9
// db.movies.find({ "rating.average": { $ne: 9 } });

//?$not

//?find movies whose  genres dose not include t"Thiller"
// db.movies.find({ genres: { $ne: "Thiller" } });

//? find the movies whose status is "Ended"
// db.movies.find({ status: { $ne: "Ended" } });

//?$nor
// db.movies.find({$nor:[{ganres:},{}]})

//find movies whose status is nither "Runing" nor  lalnguage is "English"
// db.movies.find({ $nor: [{ status: "Running" }, { language: "Engish" }] });
