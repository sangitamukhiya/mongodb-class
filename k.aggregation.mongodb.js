use("esports_imdb");

// db.movies.find()
//aggregation=>query tool
// ?aggregate is read operation
// ? makes no changes to db

// ? pipeline stages
// ?$match
// ?$sort
// ?$limit
// ?$skip
// ?$project
// ?$group
// ?unwind
// ?$lookup

// ?$match => It is a filter stage , similar to read operation
// ?$project => select field
//?$sort=>sort document based upon value and field provides
//1=>ascending=>small to big
//-1=>descending=>big to small

// db.movies.aggregate([
//     {
//         $match:{status:"Ended","rating.average":{$gte:7}}
//     },
//     {
//         $project:{

//             name:1,
//             status:1,

//             summary:1,
//             averageRating:"$rating.average"
//         }
//     }
// ])

// db.movies.find();

// db.movies.find().count();

db.movies.aggregate([
  {
    $match: { "rating.average": { $gt: 8 } },
  },
  {
    $project: {
      name: 1,
      genres: 1,
      avgRating: "$rating.average",
      scheduleDay: { $first: "$schedule.days" },

      genres: 1,
      // secondGenres: { $arrayElemAt: ["$genres", 1] },
      // lastGenres: { $last: "$genres" },
    },
  },
  {
    $sort: {
      avgRating: 1,
    },
  },
]);
