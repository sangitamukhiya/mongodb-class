//use("udemy");
//?create=>Add

// db.course.insertOne({
//   name: "MERN",
//   duration: 90,
//   tutorName: "Arun",
// });

// db.course.insertOne({
//   name: "React",
//   duration: 120,
//   tutorName: "Arun",
// });

// db.course.insertMany([
//   {
//     name: "Java",
//     duration: 60,
//     toutorName: "Roshan",
//   },
//   {
//     name: "Python",
//     duration: 90,
//     toutorName: "Rahul",
//   },
// ]);

//?read operation

//db.course.findOne({ name: "MERN" });

//db.course.findOne({ duration: 60 });
//db.course.find();

//?delete

//db.course.deleteOne({ name: "MERN" });
//db.course.deleteMany({ duration: 90 });
// db.course.deleteOne({ name: "React" });

//?update

// db.course.updateOne({ name: "Java" }, { $set: { duration: 120 } });

// db.course.updateMany(
//   { tutorName: "Arun" },
//   {
//     $set: {
//       name: "c++",
//       duration: 70,
//     },
//   }
// );
//db.course.find();

use("Netflix");

// db.movie.insertOne({
//   name: "cast way",
//   leadActor: "Tom Hanks",
//   releaseYear: 2002,
//   length: 120,
// });

// db.movie.insertMany([
//   {
//     name: "Chakka Panja",
//     leadActor: "Dipak Raj Giri",
//     releaseYear: 2017,
//     length: 180,
//   },
//   {
//     name: "12th fail",
//     leadActor: "Vikrant Massey",
//     releasseYear: 2023,
//     length: 90,
//   },

//   {
//     name: "Batman",
//     leadActor: "Charistian Bale",
//     releasseYear: 2000,
//     length: 90,
//   },
// ]);

//find movies whoes length is 90

//db.movie.findOne({ length: 90 });

//?find movie whose leadActor is "vakarant Massey"

//db.movie.findOne({ leadActor: "Vikrant Massey" });

//find movies whose name is chakka panja
//db.movie.findOne({ name: "Chakka Panja" });

//?find movie releaseYear 2017
//db.movie.find({ releaseYear: 2017 });

//?change release year  of "chakka panja to 2020"

// db.movie.updateOne(
//   { name: "Chakka Panja" },
//   {
//     $set: {
//       releaseYear: 2020,
//     },
//   }
// );
//?change "Batman" to "Batman return"
// db.movie.updateOne(
//   { name: "Batman" },
//   {
//     $set: {
//       name: "Batman Return",
//     },
//   }
// );
//?change length of cast way to 90 minutes
// db.movie.updateOne(
//   { name: "cast way" },
//   {
//     $set: {
//       length: 90,
//       releaseYear: 2000,
//     },
//   }
// );

// db.movie.updateMany(
//   { length: 90 },
//   {
//     $set: {
//       length: 105,
//     },
//   }
// );

//?delete movie name whose main role is played by "Dipak Raj Giri"

// db.movie.deleteOne({ leadActor: "Dipak Raj Giri" });
//?delete movies whose llengh is 105
// db.movie.deleteMany({ length: 105 });

// db.movie.find({ leadActor: "Dipak Raj Giri" });
// db.movie.findOne({ leadActor: "Tom Hanks" });

//?another database

use("student");

// db.student.insertOne({
//   name: "Reena Mukhiya",
//   college: "Everest",
//   age: 21,
// });

// db.student.insertMany([
//   {
//     name: "Sona",
//     college: "Cosmos",
//     age: 21,
//   },

//   {
//     name: "Jibana",
//     college: "Everest",
//     age: 22,
//   },
// ]);

// db.student.updateOne(
//   { name: "Sona" },
//   {
//     $set: {
//       age: 24,
//     },
//   }
// );

// db.student.updateMany({ age: 21 }, { $set: { age: 25 } });
// db.student.find()
