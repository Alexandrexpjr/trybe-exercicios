// Primeiro jeito
// const getPlanet = () => {
//   setTimeout(() => {
//   const mars = {
//     name: "Mars",
//     distanceFromSun: {
//       value: 227900000,
//       measurementUnit: "kilometers",
//     },
//   };
//   console.log("Returned planet: ", mars);
//   }, 4000)
// };

// getPlanet(); // imprime Marte depois de 4 segundos

// Segundo jeito
const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars);
};

setTimeout(getPlanet, 4000);