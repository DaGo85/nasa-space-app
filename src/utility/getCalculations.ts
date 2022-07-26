const getCalculations = (asteroidData: any) => {
  const keys = Object.keys(asteroidData["near_earth_objects"]);

  let fad = {
    dangerousAsteroids: 0,
    harmlessAsteroids: 0,
    asteroidsTotal: asteroidData["element_count"],
    nearestAsteroid: Number.MAX_VALUE,
  };

  keys.forEach((day) => {
    asteroidData["near_earth_objects"][day].forEach((asteroid: any) => {
      if (asteroid["is_potentially_hazardous_asteroid"] === true)
        fad.dangerousAsteroids++;
    });
  });

  keys.forEach((day) => {
    asteroidData["near_earth_objects"][day].forEach((asteroid: any) => {
      if (
        parseInt(
          asteroid["close_approach_data"][0]["miss_distance"]["kilometers"],
          10
        ) <= fad.nearestAsteroid
      )
        fad.nearestAsteroid = parseInt(
          asteroid["close_approach_data"][0]["miss_distance"]["kilometers"],
          10
        );
    });
  });

  fad.harmlessAsteroids = fad.asteroidsTotal - fad.dangerousAsteroids;

  return fad;
};

export default getCalculations;
