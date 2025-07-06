import React, { useState, useTransition, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { getIndividualCountryData } from '../../api/PostApi';
import Loader from '../Ui/Loader';

const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      const res = await getIndividualCountryData(params.id);
      if (res.status === 200 && res.data && res.data.length > 0) {
        setCountry(res.data[0]);
      }
    });
  }, [params.id]);

  if (isPending || !country) return <Loader />;

  return (
    <section className='card country-details-card container'>
      <div className='container-card bg-white-box'>
        <div className='country-image grid grid-two-cols'>
          <img
            src={country.flags?.svg}
            alt={country.name?.common}
            className='flag'
          />

          <div className='country-content'>
            <p className='card-title'>{country.name?.official}</p>

            <div className='infoContainer'>
              <p>
                <span className='card-description'>Native Names: </span>
                {country.name?.nativeName &&
                  Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(', ')}
              </p>
              <p>
                <span className='card-description'>Population: </span>
                {country.population?.toLocaleString()}
              </p>
              <p>
                <span className='card-description'>Region: </span>
                {country.region}
              </p>
              <p>
                <span className='card-description'>Sub Region: </span>
                {country.subregion}
              </p>
              <p>
                <span className='card-description'>Capital: </span>
                {country.capital?.[0]}
              </p>
              <p>
                <span className='card-description'>Top Level Domain: </span>
                {country.tld?.[0]}
              </p>
              <p>
                <span className='card-description'>Currencies: </span>
                {country.currencies &&
                  Object.keys(country.currencies)
                    .map((currKey) => country.currencies[currKey].name)
                    .join(', ')}
              </p>
              <p>
                <span className='card-description'>Languages: </span>
                {country.languages &&
                  Object.values(country.languages).join(', ')}
              </p>
            </div>
          </div>
        </div>

        <div className='country-card-backBtn'>
          <NavLink to='/country' className='backBtn'>
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
