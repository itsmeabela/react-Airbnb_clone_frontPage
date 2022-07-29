import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/card";
import data from "./data";

function App() {
  const cardEl = data.map((cardStatus) => {
    const {
      coverImg,
      price,
      title,
      location,
      id,
      stats: { rating, reviewCount },
    } = cardStatus;

    return (
      <Card
        key={id}
        img={coverImg}
        rating={rating}
        reviewCount={reviewCount}
        location={location}
        title={title}
        price={price}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-container">{cardEl}</section>
    </div>
  );
}

export default App;
