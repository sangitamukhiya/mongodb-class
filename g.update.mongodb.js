use("esports_imdb");

// db.friends.updateOne({ name: "Alish" }, { $set: { name: "Laxman" } });

// db.friends.find();
// db.friends.updateOne(
//   { name: "Unique" },
//   { $set: { name: "Jibana", age: 21, contactNumber: "98235637856" } }
// );

//update name

// db.friends.updateOne(
//   { name: "Prakash" },
//   { $set: { name: "Prithivi", age: 22, contactNumber: "98366558764" } }
// );

// db.friends.updateOne(
//   { },
//   { $set: { name: "Prithivi", age: 22, contactNumber: "98366558764" } }
// );

// db.friends.updateOne(
//   { name: Nischal },
//   {
//     $set: {
//       name: "Suvechha",
//       age: 20,
//       contactNumber: "98637543256",
//       isNepali: true,
//     },
//   }
// );
// db.friends.find();

// db.friends.updateOne({ name: "Jibana" }, { $inc: { age: 40 } });

// db.friends.updateOne({ name: "Jibana" }, { $inc: { age: -45 } });

// db.friends.updateMany({}, { $inc: { age: 10 } });

db.friends.find();

//?$mul=>multiplies field by provided value

// db.friends.updateOne({ name: "Nischal" }, { $mul: { age: 2 } });

// db.friends.updateOne({ name: "Jibana" }, { $mul: { age: 2 } });

/// age divide by 2
// db.friends.updateOne({ name: "Jibana" }, { $mul: { age: 0.5 } });

// db.friends.updateOne({ name: "Prithivi" }, { $mul: { age: 0.5 } });
