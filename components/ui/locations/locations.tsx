import classes from "./locations.module.scss";

const Locations = ({
  country,
  city,
  hotel,
}: {
  country: {countryName: string; state: string} | undefined;
  city: string;
  hotel: string;
}) => {
  return (
    <div className={classes.locations}>
      {country && <h3 className={classes.locations_location}>{country.countryName.toLowerCase()}</h3>}
      <span>•</span>
      {country && <h3 className={classes.locations_location}>{country.state.toLowerCase()}</h3>}
      <span>•</span>
      <h3 className={classes.locations_location}>{city}</h3>
      <span>•</span>
      <h3 className={classes.locations_location}>{hotel}</h3>
    </div>
  );
};

export default Locations;
