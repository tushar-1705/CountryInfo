import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/PostApi";
import Loader from "../Components/Ui/Loader";
import CountryCard from "../Components/Layout/CountryCard";
import SearchFilter from "../Components/Ui/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      //  console.log(res);
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  const searchCountry = (country) => {
    return search
      ? country.name.common.toLowerCase().includes(search.toLowerCase())
      : true;
  };

  const filterRegion = (country) => {
    return filter === "all" ? true : country.region === filter;
  };

  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <>
      <section className="country-section">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          countries={countries} 
          setCountries={setCountries}
        />

        <ul className="grid grid-three-cols">
          {filterCountries.map((Country, idx) => {
            return <CountryCard country={Country} key={idx} />;
          })}
        </ul>
      </section>
    </>
  );
};

export default Country;
