db.restaurants.aggregate([
    {
      $group: {
        _id: "$type_of_food",
        averageRating: { $avg: "$rating" },
        count: { $sum: 1 }
      }
    }
  ]);
  