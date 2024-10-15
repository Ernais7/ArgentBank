import React from "react";

function Features({ features }) {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {features.map((feature, index) => (
        <div key={index} className="feature-item">
          <img className="feature-icon" src={feature.icon} alt={feature.alt} />
          <h3 className="feature-item-title">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
