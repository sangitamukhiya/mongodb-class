use("esports_imdb");

//?deleteOne

//find le array return garxa
//findone le null return garxa

//delete movies whose genereas is
// ? delete movies whose genres includes "Drama" and "Thriller"'
// db.movies.deleteMany({ $and: [{ genres: "Drama" }, { genres: "Thriller" }] });

// ? delete a movie whose name is "Manhattan Love Story"'
// db.movies.deleteOne({ $and: [{ name: "Manhattan Love Story" }] });

// ? delete movies whose  network country us "Canada"
// db.movies.deleteOne({ "network.country.name": "Canada"  });

// ? delete movies whose rating is greater than 8 and less than or equal to 9

// db.movies.deleteMany({
//   $and: [{ "rating.average": { $gt: 8 } }, { "rating.average": { $lte: 9 } }],
// });

// db.movies.find();
//
