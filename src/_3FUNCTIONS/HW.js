function vehicle(choice) {

  const vehicles = {
    car: {
      BMW: {
        wheels: 4,
        fuel: "Petrol",
        color: "Black",
        type: "Sports Car",
        brand: "SUV"
      },

      Audi: {
        wheels: 4,
        fuel: "Diesel",
        color: "White",
        type: "Super Car"
      }
    },

    bike: {
      Duke: {
        wheels: 2,
        fuel: "Petrol",
        color: "Orange",
        type: "Cruiser Bike"
      },

      KTM: {
        wheels: 2,
        fuel: "Petrol",
        color: "Orange",
        type: "Sports Bike"
      }
    },

    auto: {
      BAJAJ: {
        wheels: 3,
        fuel: "CNG",
        color: "Yellow",
        type: "Passenger Auto"
      }
    }
  };

  if (vehicles.car[choice]) {
    return vehicles.car[choice];
  }
  else if (vehicles.bike[choice]) {
    return vehicles.bike[choice];
  }
  else if (vehicles.auto[choice]) {
    return vehicles.auto[choice];
  }
  else {
    return "Vehicle not found";
  }
}

console.log(vehicle("BMW"));
