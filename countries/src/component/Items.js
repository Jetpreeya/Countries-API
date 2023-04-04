import React from "react";
import { Link } from "react-router-dom";
import './Items.css'; 

export default function Article({
  flags,
  name,
  capital,
  population,
  region,
}) {
  return (
    <>
      <Link to={`/${name.common}`}>
        <article className="main">
          <img src={flags.svg} width="250 px" alt="" className="picture" />
          <div className="p-4">
            <h2 className="name">
              {name.common}
            </h2>
            <ul className="population">
                <li>Capital: {capital}</li>
              <li>Population: {population.toLocaleString()}</li>
              <li>Region: {region}</li>
            </ul>
          </div>
        </article>
      </Link>

    </>
  );
}