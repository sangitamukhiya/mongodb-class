use("esports_imdb");

//array read operation
//?$all=>field array hunuparxa $all use

//?elemMatch
//?size

// db.students.insertMany([
//   {
//     name: "Manish",
//     favoriteSingers: ["Arijit", "Menuka", "Shreya"],
//     hobbies: [
//       {
//         name: "Badminton",
//         frequency: 5,
//       },
//       {
//         name: "PubG",
//         frequency: 7,
//       },
//       {
//         name: "Dancing",
//         frequency: 2,
//       },
//     ],
//   },

//   {
//     name: "Sona",
//     favoriteSingers: ["Sonu", "Narayan", "Pramod"],
//     hobbies: [
//       {
//         name: "Singing",
//         frequency: 4,
//       },
//       {
//         name: "Football",
//         frequency: 5,
//       },
//       {
//         name: "Volleyball",
//         frequency: 3,
//       },
//     ],
//   },

//   {
//     name: "Arun",
//     favoriteSingers: ["Aatif", "Sushant", "Udit"],
//     hobbies: [
//       {
//         name: "PubG",
//         frequency: 5,
//       },
//       {
//         name: "Singing",
//         frequency: 7,
//       },
//       {
//         name: "Bikes",
//         frequency: 2,
//       },
//     ],
//   },
// ]);

// db.students.find();
// db.students.find({
//   $and: [{ favoriteSingers: "Arijit" }, { favoriteSingers: "Shreya" }],
// });

// db.students.find({ favoriteSingers: { $all: ["Arijit", "Shreya"] } });

// db.students.insertOne({
//   name: "Rina",
//   favoriteSingers: ["Neha", "Tony"],
//   hobbies: [
//     {
//       name: "Dancing",
//       frequency: 10,
//     },
//   ],
// });

//?find the student who has size two favorite singers

//!$size does not accept range such as $gt,$lt
// db.students.find({ favoriteSingers: { $size: 2 } });

// db.students.find({ favoriteSingers: { $size: 3 } });

//?find student who has only one hobbies
// db.students.find({ hobbies: { $size: 1 } });

// db.students.find({ hobbies: { $size: 2 } });

//?$elemMatch
// db.students.find({
//   $and: [{ "hobbies.name": "PubG" }, { "hobbies.frequency": { $gt: 6 } }]});

// db.students.find({
//   hobbies: { $elemMatch: { name: "PubG", frequency: { $gt: 7 } } },
// });

db.students.find({
  hobbies: { $elemMatch: { name: "Singing", frequency: { $gte: 5 } } },
});
