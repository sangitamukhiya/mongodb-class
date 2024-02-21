use("esports_imdb");

// db.owners.insertMany([
//   { name: "Kamal", address: "Surkhet" },
//   { name: "Laxman", address: "Lalitpur" },
//   { name: "Arun", address: "Tripureshwor" },
// ]);

// db.owners.find();

// db.vehicles.insertOne({
//   name: "FZ",
//   brand: "Yamaha",
//   cc: 250,
//   color: "blue",
//   ownerId: ObjectId("65d5a529936fba536a894cad"),
// });

db.vehicles.aggregate([
  {
    $match: {},
  },

  {
    $lookup: {
      from: "owners",
      localField: "ownerId",
      foreignField: "_id",
      as: "ownersDetails",
    },
  },

  {
    $project: {
      name: 1,
      brand: 1,
      color: 1,
      ownerName: { $first: "$ownersDetails.name" },
    },
  },
]);

//?one to one
//e.g one vehicles has one
// ?one to one =>
// e.g one vehicle has one ownerDetails, one person has one national identity card
// ? one to many =>
// e.g. one person can play multiple games in sport week
// ?many to many => one to many from both direction
// e.g. one student can enroll in multiple courses in broadway
// and one course has multiple students
