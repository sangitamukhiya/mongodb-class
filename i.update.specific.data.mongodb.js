use("esports_imdb");

// db.friends.updateOne(
//   { name: "Jibana", "scores.sub": "Science" },
//   { $set: { "scores.$.sub": "Nepali" } }
// );

//?$[]=>it helps to change multiple
// db.friends.updateOne({ name: "Nischal" },
//  { $set: { "scores.$[].point": 70 } });

//  db.friends.updateOne({ name: "Nischal" },
//  { $set: { "scores.$[].point": 70 } });

// db.friends.updateOne(
//   { name: "Nischal", "scores.sub": "Science" },
//   { $set: { "scores.$.point": 65 } }
// );

// db.friends.updateOne(
//   { name: "Nischal" },
//   { $inc: { "scores.$[].point": -10 } }
// );

//

// db.friends.updateOne(
//   { name: "Jibana", hobbies: "Cycling" },
//   { $set: { "hobbies.$": "Rafting" } }
// );

// db.friends.updateOne(
//     { name: "Jibana", hobbies: "Cycling" },
//     { $set: { "hobbies.$": "Rafting" } }
//   );

// db.friends.updateOne(
//   { name: "Nischal" },
//   { $set: { "scores.$[item].point": 70 } },
//   {
//     arrayFilters: [{ "item.point": { $gte: 58 } }],
//   }
// );

// db.friends.updateOne(
//   { name: "Nischal" },
//   {
//     $set: {
//       "scores.$[item].point": 70,
//     },
//   },
//   {
//     arrayFilters: [{ "item.point": { $gte: 60 } }],
//   }
// );

db.friends.find();
