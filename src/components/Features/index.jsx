import React, { useState } from "react";
import "./Features.css";

export default function Features() {
  const [expandedFeature, setExpandedFeature] = useState(null);

  const features = [
    {
      id: 1,
      title: "Milk Source",
      img: "image/milks1.png",
      shortDesc: "A2 milk products for better digestion and health.",
      detailedDesc: (
        <>
          <p>
            A2 milk comes from cows producing only A2 beta-casein protein,
            making it easier to digest and suitable for people with milk
            intolerance.
          </p>
          <ul>
            <li>
              <strong>A2 Milk:</strong> Milk sourced from indigenous cows like
              Gir or Sahiwal.
            </li>
            <li>
              <strong>A2 Ghee:</strong> Promotes gut health, made using the
              traditional bilona method.
            </li>
            <li>
              <strong>A2 Paneer:</strong> Fresh cottage cheese, rich in protein
              and calcium.
            </li>
            <li>
              <strong>A2 Peda:</strong> A traditional sweet, easy to digest.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 2,
      title: "Free Delivery",
      img: "image/03_image.png",
      shortDesc: "Enjoy free delivery on all your orders.",
      detailedDesc: (
        <p>
          We offer free delivery for all orders, ensuring your products arrive
          conveniently at your doorstep without any extra charge.
        </p>
      ),
    },
    {
      id: 3,
      title: "Easy Payment",
      img: "image/feature-img-3.png",
      shortDesc: "Hassle-free and secure payment options.",
      detailedDesc: (
        <p>
          Choose from multiple secure payment methods, including credit/debit
          cards, UPI, and digital wallets for a seamless shopping experience.
        </p>
      ),
    },
  ];

  const toggleFeature = (id) => {
    setExpandedFeature(expandedFeature === id ? null : id);
  };

  return (
    <section className="features" id="features">
      <div className="content">
        <h1 className="heading">
          our <span>features</span>
        </h1>
        <div className="box-container">
          {features.map((feature) => (
            <div className="box" key={feature.id}>
              <img src={feature.img} alt={feature.title} />
              <h3>{feature.title}</h3>
              <p>{feature.shortDesc}</p>
              {expandedFeature === feature.id && (
                <div className="detailed-description align-left">
                  {feature.detailedDesc}
                </div>
              )}
              <button
                className="btn"
                onClick={() => toggleFeature(feature.id)}
              >
                {expandedFeature === feature.id ? "Show Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
