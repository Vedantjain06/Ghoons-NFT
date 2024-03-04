import React, { useState, useEffect } from "react";

import FullWidthBg from "../../../components/FullWidthBg/FullWidthBg";
import SubHeader from './SubHeader/SubHeader';

import headBg from "../../../images/MarketPlace/marketplace.jpg";
import "./Head.scss";

const Head = () => {
  const [daysToOpening, setDaysToOpening] = useState(216);

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const buttonContent = isClicked ? "***********" : "Натисни мене";

  useEffect(() => {
    const interval = setInterval(() => {
      setDaysToOpening((prevDays) => Math.max(0, prevDays - 1));
    }, 86400000); // 1 день в мілісекундах

    return () => clearInterval(interval);
  }, []);

  const marketplaceData = {
    title: "Solaris Metaverse eco system Marketplace",
    expectText: "Expect in 2024",
    openingText: `Opening of trading in ${daysToOpening} days`,
    description:
      "Sell and buy spaceships, rare weapons, resources and much more.",
    redemptionInfo:
      'Rare "Platinum" tokens are automatically redeemed by our system with a fixed payout of 1.5 ETH.',
    temporarily:
      "This page is not the final solution for the visual design and functionality of the Solaris MetaVerse Marketplace.",
    trading:
      "On the day of release, more than 1,000 ETH and 50 bitcoins will be introduced into circulation on the trading platform.",
  };

  const partners = ["MEXC", "Binance", "Bybit", "PROJECT PARTNERS"];

  return (
    <section className="marketplace">
      <h1 style={{padding:"50px", color:"black"}}>
        Will Be updated Soon
        </h1>
      {/* <SubHeader />

      <FullWidthBg
        url={headBg}
        type="image"
        classSection="head"
        customClass="head__image"
      >
        <div className="head__body">
          <div className="head__expect">
            <h2>{marketplaceData.title}</h2>
            <div>
              <h2 className="head__lock">{marketplaceData.expectText}</h2>
              <p>{marketplaceData.openingText}</p>
            </div>
          </div>
          <div className="head__text">
            <h2>{marketplaceData.description}</h2>
            <h2>{marketplaceData.redemptionInfo}</h2>
          </div>
        </div>
  
      
      <div className="marketplace_bottom">
        <div className="temporarily">
          <div className="temporarily__cube"></div>
          <p>{marketplaceData.temporarily}</p>
        </div>

        <div className="trading">
          <h3 className="trading-text">{marketplaceData.trading}</h3>
          <div className="trading__partners">
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`partner ${
                  index === partners.length - 1 ? "small-text" : ""
                }`}
                style={index === partners.length - 1 ? { margin: "0 auto" } : {}}
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
      </FullWidthBg> */}
    </section>
  );
};

export default Head;
