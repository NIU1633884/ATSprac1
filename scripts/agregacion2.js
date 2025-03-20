db.inspections.aggregate([
    {
      $group: {
        _id: "$result",
        count: { $sum: 1 }
      }
    },
    {
      $group: {
        _id: null,
        results: { $push: { result: "$_id", count: "$count" } },
        total: { $sum: "$count" }
      }
    },
    { $unwind: "$results" },
    {
      $project: {
        _id: 0,
        result: "$results.result",
        count: "$results.count",
        percentage: { $multiply: [ { $divide: [ "$results.count", "$total" ] }, 100 ] }
      }
    }
  ]);
  