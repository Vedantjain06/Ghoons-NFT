"use client";
import { FC, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Navigation.scss";
import NavList from "./NavList/NavList";

type BtnProps = {
  isActive: boolean;
  toggleMenu: () => void;
};

// const menu = {
//   open: {
//     width: "max-content",
//     height: "max-content",
//     left: '-1.6vw',
//     transition: {
//       duration: 0.8,
//       type: "tween",
//       ease: [0.76, 0, 0.24, 1]
//     },
//   },
//   closed: {
//     width: "10px",
//     height: "10px",
//     transition: {
//       duration: 0.8,
//       delay: 0.45,
//       type: "tween",
//       ease: [0.76, 0, 0.24, 1],
//     },
//     transitionEnd: {
//       display: 'none'
//     }
//   },
// };

export default function Navigation() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

useEffect(() => {
  const handleResize = () => setWindowWidth(window.innerWidth);
  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

const menu = {
  open: {
    width: "max-content",
    height: windowWidth <= 768 ? "70vw" : "max-content", // change "60vh" to the height you want on mobile
    left: '-1.6vw',
    transition: {
      duration: 0.8,
      type: "tween",
      ease: [0.76, 0, 0.24, 1]
    },
  },
  closed: {
    width: "10px",
    height: "10px",
    transition: {
      duration: 0.8,
      delay: 0.45,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
    transitionEnd: {
      display: 'none'
    }
  },
};

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="navigation">
      <motion.div
        className="navigation__menu"
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>
          {isActive && <NavList setIsActive={setIsActive} />}
        </AnimatePresence>
      </motion.div>
      <Button
        isActive={isActive}
        toggleMenu={() => {
          setIsActive(!isActive);
        }}
      />
    </div>
  );
}

const Button: FC<BtnProps> = ({ isActive, toggleMenu }) => {
  return (
    <div className="navigation__button">
      <motion.div
        className="navigation__button_slider"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className="el"
          onClick={() => {
            toggleMenu();
          }}
        >
          <div className="perspectiveText">
            <p>Menu</p>
          </div>
        </div>
        <div
          className="el"
          onClick={() => {
            toggleMenu();
          }}
        >
          <div className="perspectiveText">
            <p>Close</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
