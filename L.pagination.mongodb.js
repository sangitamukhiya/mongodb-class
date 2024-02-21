use("esports_imdb");

//?pagination
//?$skip
//?$limit

//?skip=>(page-1)*limit

let page = 2;
const limit = 10;

let skip = (page - 1) * limit;

let searchText = "G";

db.movies.aggregate([
  {
    $match: { name: { $regex: "searchText", $options: "i" } },
  },

  { $skip: skip },
  { $limit: limit },

  {
    $project: {
      name: 1,
      id: 1,
      _id: 0,
    },
  },
]);
