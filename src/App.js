import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/card";
import data from "./data";

function App() {
  const cardEl = data.map((cardStatus) => {
    const { id } = cardStatus;

    return <Card key={id} cardStatus={cardStatus} />;
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
