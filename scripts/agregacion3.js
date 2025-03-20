db.restaurants.aggregate([
    {
      $lookup: {
        from: "inspections",
        localField: "_id",
        foreignField: "restaurant_id",
        as: "inspection_history"
      }
    }
  ]);
  