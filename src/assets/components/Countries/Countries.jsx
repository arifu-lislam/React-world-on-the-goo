import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ CountryPromise }) => {
  const [visitedCountry, setVisitedCountry] = useState([]);
  const handelVisitedCountry = (country) => {
    console.log("button Clicked", country);
  };
  const visitCountries = use(CountryPromise);
  const countries = visitCountries.countries;
  //   console.log(countries);
  return (
    <div>
      <h1>In the Countries {countries.length}</h1>
      <h3>Total Country Visited : </h3>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handelVisitedCountry={handelVisitedCountry}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
