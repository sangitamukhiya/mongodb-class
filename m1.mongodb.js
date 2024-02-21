use("esports_relation");

// db.courses.insertMany([
//   {
//     name: "MERN",
//     duration: 90,
//   },
//   {
//     name: "Python",
//     duration: 45,
//   },

//   {
//     name: "Devops",
//     duration: 65,
//   },

//   {
//     name: "AI",
//     duration: 90,
//   },
//   {
//     name: "Flutter",
//     duration: 55,
//   },
// ]);

// db.students.insertOne({
//   name: "Rina",
//   address: "Kalanki",
//   email: "rina@gmail.com",
//   enrolledCourseIds: [
//     ObjectId("65d5ab8c00e6a8a0aae75682"),
//     ObjectId("65d5ab8c00e6a8a0aae75684"),
//   ],
// });

db.students.aggregate([
  {
    $match: {},
  },

  {
    $lookup: {
      from: "courses",
      localField: "enrolledCourseIds",
      foreignField: "_id",
      as: "courseDetails",
    },
  },
  {
    $project: {
      name: 1,
      address: 1,
      email: 1,

      "courseDetails.name": 1,
      "courseDetails.duration": 1,
    },
  },
]);
