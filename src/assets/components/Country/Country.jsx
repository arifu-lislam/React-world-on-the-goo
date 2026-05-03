import { useState } from "react";
import "./Country.css";

const Country = ({ country, handelVisitedCountry }) => {
  // console.log(handelVisitedCountry);
  const [visited, setVisited] = useState(false);
  const handleEvent = () => {
    // basic system
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }

    // Second System
    // setVisited(visited ? false : true);

    // third system
    setVisited(!visited);
    handelVisitedCountry(country);
  };

  //   console.log(country.area.area);
  return (
    //  <div className={`country border-lg text-center &{visited ? 'country-visited' : 'country-not-visited'}`}></div>
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h1>Name : {country.name.official}</h1>
      <h2>Population : {country.population.population} </h2>
      <p>
        Area : {country.area.area}{" "}
        {country.area.area > 300000 ? " Big Country" : " Small Country"}
      </p>
      <button className="btn" onClick={handleEvent}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
