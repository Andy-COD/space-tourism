import React, { useState } from "react";
import NavBar from "./NavBar";
import data from "./data.json";

function Crew() {
  const crew = data.crew;
  // eslint-disable-next-line
  const [team, setTeam] = useState([crew]);
  const [value, setValue] = useState(0);
  return (
    <>
      <section className="crew">
        <NavBar />
        <p>
          <span>02</span> Meet your crew
        </p>
        <article>
          <div className="crew-content">
            {team.map((item, index) => {
              const { name, role, bio } = item[value];
              return (
                <article key={index}>
                  <h1>{role}</h1>
                  <h3>{name}</h3>
                  <p>{bio}</p>
                  <aside>
                    {data.crew.map((item, index) => {
                      return (
                        <div
                          className={`crew-nav ${
                            index === value ? "choosen" : "in-active"
                          }`}
                          onClick={() => setValue(index)}
                          key={index}
                        ></div>
                      );
                    })}
                  </aside>
                </article>
              );
            })}
          </div>
          {team.map((image, index) => {
            const {
              images: { webp },
            } = image[value];
            return (
              <div
                className="crew-image"
                key={index}
                style={{
                  width: "100%",
                  backgroundImage: "url(" + webp + ")",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center bottom",
                  height: "calc(100vh - 150px)",
                }}
              ></div>
            );
          })}
        </article>
      </section>
    </>
  );
}

export default Crew;
