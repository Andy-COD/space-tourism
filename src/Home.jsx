import React from "react";
import NavBar from "./NavBar";

function Home() {
  return (
    <div className="home">
      <NavBar />
      <section>
        <article className="home-desc">
          <h1>So, you want to travel to</h1>
          <span>space</span>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </article>
        <div className="explore">
          <p>Explore</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
