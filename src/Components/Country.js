import React from 'react';

const Country = ({ country }) => {

    return (
        <div>
            <li className="card">
                <img src={country.flag} alt='flag' />
                <div className='data-container'>
                    <ul>
                        <li>- Pays : {country.name}</li>
                        <li>- Capital : {country.capital}</li>
                        <li>- Population : {country.population}</li>
                        <li>- Continent : {country.region}</li>

                    </ul>
                </div>
            </li>
        </div>
    );
};

export default Country;