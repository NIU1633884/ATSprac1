db.createCollection("inspections", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["restaurant_id", "certificate_number", "date", "result", "sector", "address"],
        properties: {
          restaurant_id: {
            bsonType: "objectId",
            description: "Debe ser un ObjectId que referencia a un restaurante"
          },
          certificate_number: {
            bsonType: "int",
            description: "Debe ser un número entero y es requerido"
          },
          date: {
            bsonType: "date",
            description: "Debe ser una fecha (preferiblemente en formato ISODate)"
          },
          result: {
            bsonType: "string",
            description: "Debe ser una cadena y es requerida"
          },
          sector: {
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
          }
        }
      }
    }
  });
  