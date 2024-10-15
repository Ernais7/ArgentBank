import React from "react";
import chat from "../../assets/icon-chat.webp";
import security from "../../assets/icon-security.webp";
import money from "../../assets/icon-money.webp";
import Hero from "../../components/Hero/hero";
import Features from "../../components/Features/features";

function Home() {
  const features = [
    {
      icon: chat,
      title: "You are our #1 priority",
      description: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
      alt: "Chat Icon",
    },
    {
      icon: money,
      title: "More savings means higher rates",
      description: "The more you save with us, the higher your interest rate will be!",
      alt: "Money Icon",
    },
    {
      icon: security,
      title: "Security you can trust",
      description: "We use top of the line encryption to make sure your data and money is always safe.",
      alt: "Security Icon",
    },
  ];
  return (
    <main>
      <Hero />
      <Features features={features} />
    </main>
  );
}
export default Home;
