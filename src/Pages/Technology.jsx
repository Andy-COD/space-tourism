import React, { useState, useEffect } from "react";
import data from "../data.json";

function Technology() {
  const tech = data.technology;
  const [technology, setTech] = useState([tech]);
  const [value, setValue] = useState(0);
  const [size, setSize] = useState(window.innerWidth);

  const getSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getSize);
    return () => {
      window.removeEventListener("resize", getSize);
    };
  }, [size]);

  return (
    <>
      <section className="tech">
        <div className="tech-container">
          <p>
            <span>03</span> meet your crew
          </p>
          <article>
            <div className="container">
              <div className="btn-group">
                {data.technology.map((_, index) => {
                  return (
                    <button
                      onClick={() => setValue(index)}
                      className={`tech-item ${
                        index === value && "tech-active"
                      }`}
                      key={index}
                    >{`0${index + 1}`}</button>
                  );
                })}
              </div>
              {technology.map((item, index) => {
                const { name, description } = item[value];
                return (
                  <div className="tech-content" key={index}>
                    <p>The terminology...</p>
                    <h1>{name}</h1>
                    <p>{description}</p>
                  </div>
                );
              })}
            </div>
            {technology.map((image, index) => {
              const {
                images: { portrait, landscape },
              } = image[value];
              return (
                <div
                  className="tech-image"
                  key={index}
                  style={{
                    width: "100%",
                    backgroundImage: `url(${
                      size < 781 ? landscape : portrait
                    })`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right",
                    display: "block",
                    height: "60vh",
                  }}
                ></div>
              );
            })}
          </article>
        </div>
      </section>
    </>
  );
}

export default Technology;
