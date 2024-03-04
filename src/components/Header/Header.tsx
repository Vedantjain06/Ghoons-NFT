import { useEffect, useState } from "react";
import "./Header.scss";
import Navigation from "./Navigation/Navigation";
import { motion } from 'framer-motion';

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    setTimeout(() => {
      if(isClicked) {
        setIsClicked(!isClicked);
      }
    }, 2000)
  }, [isClicked])

  const buttonContent = isClicked ? "SOON" : "CONNECT WALLET";

  return (
    <header className="header">
      <div className="header__navigation">
        <Navigation />
      </div>

      <ul className="header__list">
        {/* <li className="header__list_item">
          <a href="/" className="bold header__link">
            smv
          </a>
        </li> */}
        <li className="header__list_item">
          {/* <button
            className="header__link header__link--wallet" 
            onClick={handleClick}
          >
            {buttonContent}
          </button> */}
        </li>
      </ul>
    </header>
  );
};

export default Header;
