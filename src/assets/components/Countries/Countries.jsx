import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ CountryPromise }) => {
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [visitFlag, setVisitFlag] = useState([]);
  const handelVisitedCountry = (country) => {
    console.log("button Clicked", country);
    const newVisitedCountry = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountry);
  };
  const handleVisitedFlag = (flag) => {
    console.log("added visited flag", flag);
    const newVisitedFlag = [...visitFlag, flag];
    setVisitFlag(newVisitedFlag);
  };
  const visitCountries = use(CountryPromise);
  const countries = visitCountries.countries;
  //   console.log(countries);
  return (
    <div>
      <h1>In the Countries {countries.length}</h1>
      <h3>Total Country Visited : {visitedCountry.length}</h3>
      <h3>Total Visited Flag : {visitFlag.length}</h3>
      <ol>
        {visitedCountry.map((country) => (
          <li key={country.ccn3.ccn3}>{country.name.common}</li>
        ))}
      </ol>
      <div className="visited-flag-design">
        {visitFlag.map((flag, index) => (
          <img key={index} src={flag}></img>
        ))}
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handelVisitedCountry={handelVisitedCountry}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
