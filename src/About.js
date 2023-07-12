import React from "react";
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/ProductContext";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Shopeclues Ecommerce",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
      <p>
        {" "}
        The things we are accusing of these in the explication of the truth
        receives from the flattery of her will never be the trouble and they are
        refused to the pleasures and the pleasures of the pain, explain the
        treatment of excepturi of the blessed sufferings. I never said will
        unfold in him receives at another time he may please the one that those
        works, we are less than they, this refused to the pleasures of deleniti?
        Those are! Will unfold in times of pleasure, this pain will be a right
        enjoyed by corrupt, are accusing him of all pleasures, and seek his own,
        or, to the needs of the agony of the choice. We hate the fellow.
      </p>
    </>
  );
};

export default About;

