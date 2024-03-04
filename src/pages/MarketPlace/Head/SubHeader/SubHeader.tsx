import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import SubHeaderMenu from '../../../../data/SubHeaderMenu.json'
import "./SubHeader.scss";
import classNames from 'classnames';

type BtnProps = {
  isActive: boolean;
  toggleMenu: () => void;
};

const subMenuAnimate = {
  enter: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.5,
    },
    display: "block",
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const SubHeader = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [activeMenu, setActiveMenu] = useState(-1);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const toggleMouseMenu = (index: number) => {
    setActiveMenu(activeMenu === index ? -1 : index);
  };

  const toggleOnClick = (index: number) => {
    if(activeMenu) {
      setActiveMenu(activeMenu === index ? -1 : index);
    }
  }

  const buttonContent = isClicked ? "**********" : "0.86908862 ETH";

  return (
    <div className="subheader">
    <div className="subheader__menu">
      <h2 className="subheader__logo">MARCKETPLACE SMV</h2>
      {SubHeaderMenu.map((currentCategory, i) => (
        <Menu
          title={currentCategory.title}
          key={i}
          links={currentCategory.links}
          isActive={i === activeMenu}
          handleMouseEnter={() => toggleMouseMenu(i)}
          handleMouseLeave={() => toggleMouseMenu(-1)}
          handleOnClick={() => toggleOnClick(i)}
        />
      ))}
    </div>
      <div
        className="subheader__button"
        onClick={handleClick}
      >
        {buttonContent}
      </div>
    </div>
  );
};

const menuAnim = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: [0.215, 0.61, 0.355, 1],
    },
    transitionEnd: {
      display: "none",
    },
  },
  open: {
    opacity: 1,
    display: "flex",
    transition: {
      duration: 0.2,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
}

type MenuProps = {
  title: string
  links: {
    text: string,
    path: string
  }[]
  isActive: boolean
  handleMouseEnter: () => void
  handleMouseLeave: () => void
  handleOnClick: () => void
}

const Menu: FC<MenuProps> = ({title, links, isActive, handleMouseEnter, handleMouseLeave, handleOnClick}) => {
  const [clickedIndex, setClickedIndex] = useState(-1);

  useEffect(() => {
    if(clickedIndex !== -1) {
      const timer = setTimeout(() => {
        setClickedIndex(-1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [clickedIndex]);

  return (
    <div
      className="menu"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleOnClick}
    >
      <div className={classNames('bold', 'menu__title',
        { 'menu__title--active': isActive }
      )}>
        {title}
      </div>
      <motion.ul
        className="menu__list"
        variants={menuAnim}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        {links.map((currentLink, index) => {
          const handleMenuItem = () => {
            setClickedIndex(index);
          };

          const buttonContent = clickedIndex === index ? "SOON" : currentLink.text;
          return (
          <li className="menu__list_item">
            <span
              className="menu__link"
              onClick={handleMenuItem}
            >
              {buttonContent}
            </span>
          </li>
        )})}
      </motion.ul>
    </div>
  );
};

export default SubHeader;
