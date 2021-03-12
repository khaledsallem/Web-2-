import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Country from './Country';

const Countries = () => {

    const [data, setData] = useState([]);
    const [selectedRadio, setSelectedRadio] = useState("");
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
    useEffect(() => {
        axios.get('http://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag')
            .then((res) => setData(res.data));
        // console.log(data);
    }, [])


    return (
        <div className='countries'>
            <ol className='radio'>
                {radios.map(radio => {
                    return (
                        <li key={radio}>
                            <input type='radio' value={radio} id={radio} checked={radio === selectedRadio}
                                onChange={(e) => setSelectedRadio(e.target.value)} />
                            <label htmlFor={radio}>{radio}</label>

                        </li>
                    )
                })}
            </ol>
            <ol className='countries-list'>
                {data.filter((country) => country.region.includes(selectedRadio))
                    .map((country) => (
                        //  <li>{country.name}</li>
                        <Country country={country} key={country.name} />
                    )
                    )}
            </ol>
        </div>
    );
};

export default Countries;