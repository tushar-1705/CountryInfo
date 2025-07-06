import React from "react";

const SearchFilter = ({ search, setSearch, filter, setFilter, countries, setCountries }) => {
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };
  const handleSelect = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const sortCountries = (value) => {
  const sortedCountry = [...countries].sort((a, b) => {
    return value === 'asc'
      ? a.name.common.localeCompare(b.name.common)
      : b.name.common.localeCompare(a.name.common);
  });

  setCountries(sortedCountry);
};

  return (
    <>
      <section className="section-searchFilter container">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleInputChange}
        />

        <div>
            <button onClick={() => sortCountries('asc')}>Asc</button>
        </div>
        <div>
            <button onClick={() => sortCountries('desc')}>Desc</button>
        </div>

        <div>
          <select
            className="select-section"
            value={filter}
            onChange={handleSelect}
          >
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </section>
    </>
  );
};

export default SearchFilter;
