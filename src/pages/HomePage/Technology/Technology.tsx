import React, { useState } from "react";
import "./Technology.scss";

import SEI from "../../../images/technology/SEI.svg";
import Phantom from "../../../images/technology/phantom.svg";
// import Polygon from "../../../images/technology/polygon.svg";
// import Litecoin from "../../../images/technology/litecoin.svg";
import Solana from "../../../images/technology/solana.svg";
// import BNB from "../../../images/technology/bnb.svg";
// import Tron from "../../../images/technology/tron.svg";
// import Ripple from "../../../images/technology/ripple.svg";
// import Avalanche from "../../../images/technology/avalanche.svg";

interface Button {
  id: number;
  name: string;
  color: string;
  svg: string;
  link: string;
  isHovered?: boolean;
}

const Technology: React.FC = () => {
  const [buttonData, setButtonData] = useState<Button[]>([
    {
      id: 1,
      name: "S E I",
      color: "#2D89DF",
      svg: SEI,
      link: "https://docs.sei.io/develop/get-started",
    },
    {
      id: 2,
      name: "Phantom",
      color: "#13B5EC",
      svg: Phantom,
      link: "https://fantom.foundation/",
    },
    // // {
    // //   id: 3,
    // //   name: "Polygon",
    // //   color: "#B630A0",
    // //   svg: Polygon,
    // //   link: "https://polygon.technology/",
    // // },
    // {
    //   id: 4,
    //   name: "Litecoin",
    //   color: "#878C8E",
    //   svg: Litecoin,
    //   link: "https://www.litecoin.net/",
    // },
    {
      id: 3,
      name: "Solana",
      color: "#207D46",
      svg: Solana,
      link: "https://solana.com/",
    },
    // {
    //   id: 6,
    //   name: "BNB",
    //   color: "#F68C3F",
    //   svg: BNB,
    //   link: "https://www.bnbchain.org/en",
    // },
    // {
    //   id: 7,
    //   name: "Tron",
    //   color: "#B81515",
    //   svg: Tron,
    //   link: "https://tron.network/",
    // },
    // {
    //   id: 8,
    //   name: "Ripple",
    //   color: "#0A88BF",
    //   svg: Ripple,
    //   link: "https://www.ripple.com/",
    // },
    // {
    //   id: 9,
    //   name: "Avalanche",
    //   color: "#E84142",
    //   svg: Avalanche,
    //   link: "https://www.avax.network/",
    // },
  ]);

  const handleHover = (id: number) => {
    setButtonData((prevData) =>
      prevData.map((button) =>
        button.id === id ? { ...button, isHovered: true } : button
      )
    );
  };


  
  const handleLeave = (id: number) => {
    setButtonData((prevData) =>
      prevData.map((button) =>
        button.id === id ? { ...button, isHovered: false } : button
      )
    );
  };

  return (
    <section className="technology">
      <div className="technology__text">
        <h1 className="technology__title">BASED ON MULTICHAIN DEVELOPMENT </h1>
        <div className="button-grid">
          {buttonData.map((button) => (
            <a
              key={button.id}
              href={button.link}
              style={{ backgroundColor: button.isHovered ? button.color : "" }}
              onMouseEnter={() => handleHover(button.id)}
              onMouseLeave={() => handleLeave(button.id)}
              target="_blank"
              rel="noreferrer"
            >
              {button.name}
              <img src={button.svg} alt={button.name} />
            </a>
          ))}
        </div>
        <p>
        Multichain development involves building applications and systems that can interact with and utilize multiple blockchains simultaneously.At GHOONS we are building projects on SEI AND SOLANA chains and offering benefits of SOLANA to SEI peeps
        </p>
      </div>
    </section>
  );
};

export default Technology;
