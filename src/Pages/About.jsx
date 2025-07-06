import React from "react";
import CountryData from "../api/CountryData.json";


const About = () => {
  return (
    <>
      <section className="section-about container">
        <h2 className="container-title">
          Here are the Interesting Facts
          <br />
          we're proud of
        </h2>

        <div className="gradient-card grid grid-two-cols">
          {CountryData.map((country) => {
            const { id , countryName , capital , population , interestingFact } = country
            return (
              <div className="card " key={id}>
                <div className="container-card  bg-yellow-box">
                  <p className="card-title">{countryName}</p>
                  <p>
                    <span className="card-description">Capital: </span>
                    {capital}
                  </p>
                  <p>
                    <span className="card-description">Population: </span>
                    {population}
                  </p>
                  <p>
                    <span className="card-description">Interesting Facts: </span>
                    {interestingFact}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;
