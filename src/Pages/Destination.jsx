import React, { useState } from "react";
import data from "../data.json";

function Destination() {
  const destination = data.destinations;
  const [value, setValue] = useState(0);
  const [destinations, setDestinations] = useState([destination]);
  const planets = destination.map((item) => item.name);

  return (
    <>
      <div className="destination">
        <div className="dest-container">
          <section>
            <p>
              <span>01</span> Pick your destination
            </p>
            {destinations.map((item, index) => {
              const {
                name,
                images: { png },
                description,
                distance,
                travel,
              } = item[value];
              return (
                <section key={index + 1} className="sect-dest">
                  <img src={png} alt={name} />
                  <article className="destination-content">
                    <ul>
                      {planets.map((planet, index) => {
                        return (
                          <li
                            key={index}
                            onClick={() => setValue(index)}
                            className={`${index === value && "selected"}`}
                          >
                            {planet}
                          </li>
                        );
                      })}
                    </ul>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <div className="underline"></div>
                    <article className="metrics">
                      <div className="distance">
                        <h4>Avg. distance</h4>
                        <p>{distance}</p>
                      </div>
                      <div className="travel">
                        <h4>Est. travel time</h4>
                        <p>{travel}</p>
                      </div>
                    </article>
                  </article>
                </section>
              );
            })}
          </section>
        </div>
      </div>
    </>
  );
}

export default Destination;
