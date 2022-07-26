const getCalculations = (asteroidData: any) => {
  const keys = Object.keys(asteroidData["near_earth_objects"]);

  let fad = {
    dangerousAsteroids: 0,
    harmlessAsteroids: 0,
    asteroidsTotal: asteroidData["element_count"],
    nearestAsteroid: 0,
  };
  console.log(JSON.stringify(asteroidData));

  keys.map((day) => {
    asteroidData["near_earth_objects"][day].map((asteroid: any) => {
      if (asteroid["is_potentially_hazardous_asteroid"] === true)
        fad.dangerousAsteroids++;
    });
  });

  fad.harmlessAsteroids = fad.asteroidsTotal - fad.dangerousAsteroids;

  return fad;
};

export default getCalculations;
