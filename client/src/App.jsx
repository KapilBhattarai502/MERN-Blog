import React from "react";
import "./App.css";

const App = () => {
  return (
    <main>
      <header>
        <a href="#" className="logo">
          My Blog
        </a>
        <nav>
          <a href="#">Login</a>
          <a href="#">Register</a>
        </nav>
      </header>
      <div className="post">
      <div className="images">
        <img
          src="https://helios-i.mashable.com/imagery/articles/02C1arSK02HaAzNhFWnsVIQ/hero-image.fill.size_1536x863.v1719323406.png"
          alt="post1"
        />
        </div>
        <div className="texts">
          <h2>
            Grab an unlocked iPhone 15 from Woot for $120 off and level up your
            smartphone{" "}
          </h2>
          <p>
            As of June 25, get a new, unlocked iPhone 15 (128 GB) for $679.99 at
            Woot. That's a discount of 15%.
          </p>
        </div>
      </div>
    </main>
  );
};

export default App;
