db.createCollection("restaurants", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["name", "address", "rating", "type_of_food", "url"],
        properties: {
          name: {
            bsonType: "string",
            description: "Debe ser una cadena y es requerida"
          },
          address: {
            bsonType: "object",
            required: ["street", "city", "postcode"],
            properties: {
              street: {
                bsonType: "string",
                description: "Debe ser una cadena y es requerida"
              },
              city: {
                bsonType: "string",
                description: "Debe ser una cadena y es requerida"
              },
              postcode: {
                bsonType: "string",
                description: "Debe ser una cadena y es requerida"
              }
            }
          },
          rating: {
            bsonType: "int",
            minimum: 0,
            maximum: 5,
            description: "Debe ser un entero entre 0 y 5"
          },
          type_of_food: {
            bsonType: "string",
            description: "Debe ser una cadena y es requerida"
          },
          url: {
            bsonType: "string",
            description: "Debe ser una cadena y es requerida"
          }
        }
      }
    }
  });
  