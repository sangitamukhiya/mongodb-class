use("esports_imdb");

//?array update operation
//?$push,$pop,$pull,$pullAll

//?$ppush=>adds new data to end of array

// db.friends.updateOne({ name: "Laxman" }, { $push: { hobbies: "Dancing" } });

// db.friends.updateOne({ name: "Laxman" }, { $push: { hobbies: "Playing" } });
// db.friends.updateOne(
//   { name: "Laxman" },
//   { $push: { hobbies: { $each: ["Singing", "Riding"] } } }

// db.friends.updateOne({ name: "Laxman" }, { $push: { hobbies: "Cardio" } });

// );

//?addToSet=>already vako value lai repeate huna didaina

// db.friends.updateOne(
//   { name: "Laxman" },
//   { $addToSet: { hobbies: "Swimming" } }
// );

// db.friends.updateOne(
//   { name: "Prithivi" },
//   { $addToSet: { hobbies: { $each: ["Cricket", "Playing"] } } }
// );

// db.friends.updateOne({ name: "Laxman" }, { $addToSet: { hobbies: "Cyvling" } });

// db.friends.updateOne(
//   { name: "Laxman" },
//   { $addToSet: { hobbies: { $each: ["Riding", "Book"] } } }
// );

// db.friends.find();

//add "hiking"

// db.friends.updateOne(
//   { name: "Prithivi" },
//   { $addToSet: { hobbies: { $each: ["Hiking", "Cricket"] } } }
// );

// db.friends.updateOne(
//   { name: "Jibana" },
//   { $addToSet: { hobbies: { $each: ["Cycling", "Driving"] } } }
// );

// db.friends.updateOne(
//   { name: "Prithivi" },
//   { $addToSet: { scores: { sub: "English", point: "61" } } }
// );

//?$pop=> removes items from start and end

//?1=>remove from last
//?-1=>remove from first

// db.friends.updateOne({ name: "Laxman" }, { $pop: { hobbies: 1 } });

// db.friends.updateOne({ name: "Laxman" },
//{ $pop: { hobbies: -1 } });

// db.friends.updateOne({ name: "Jibana" }, { $pop: { scores: 1 } });

// db.friends.updateOne({ name: "Jibana" }, { $pop: { scores: -1 } });

//?$pull

// db.friends.updateOne(
//   { name: "Prithivi" },
//   { $pull: { scores: { point: { $gt: "60" } } } }
// );

// db.friends.updateOne({ name: "Laxman" }, { $pull: { hobbies: "Riding" } });

//?!remove "Circket"and "Basketball" from  "Prithivi" hobies
// db.friends.updateOne(
//   { name: "Prithivi" },
//   { $pull: { hobbies: { $in: ["Cricket", "Basketball"] } } }
// );

//?yo cndition ma last ko value remove hunxa due to same field of hobies
// db.friends.updateOne(
//   { name: "Prithivi" },
//   { $pull: { hobbies: "Basketball", hobbies: "Cricket" } }
// );

// db.friends.updateOne(
//   { name: "Laxman" },
//   { $pullAll: { hobbies: ["Dancing", "Singing", "Book"] } }
// );

// db.friends.updateOne(
//   { name: "Laxman" },
//   {
//     $pullAll: {
//       scores: [
//         {
//           sub: "Math",
//           point: 50,
//         },
//         {
//           sub: "Science",
//           point: 65,
//         },
//         {
//           sub: "English",
//           point: 61,
//         },
//       ],
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Laxman" },
//   {
//     $push: {
//       scores: [
//         {
//           sub: "Math",
//           point: 50,
//         },
//         {
//           sub: "Science",
//           point: 65,
//         },
//         {
//           sub: "English",
//           point: 61,
//         },
//       ],
//     },
//   }
// );

db.friends.updateOne({ name: "Laxman" }, { $set: { "scores.sub": "Social" } });

db.friends.find();
