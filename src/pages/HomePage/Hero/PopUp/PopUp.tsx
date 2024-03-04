import { useEffect, useRef, useState } from "react";
import "./PopUp.scss";
import { motion, AnimatePresence } from "framer-motion";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const isMobile = window.innerWidth <= 768;
const popUp = {
  open: {
    width: "76vw",
    height: isMobile ? "66vw" : "22vw",
    padding: isMobile ? "11vw 8vw" : "7vw 5vw",
    left: "50%",
    top: "50%",
    opacity: 1,
    transition: {
      duration: 0.8,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
      opacity: { duration: 0.34 },
    },
  },
  closed: {
    top: "2vw",
    left: "3vw",
    width: "7.5vw",
    height: "6vw",
    opacity: 0,
    transition: {
      duration: 0.8,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
      opacity: { duration: 0.7 },
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const popUpText = {
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
    display: "block",
    transition: {
      duration: 0.65,
      delay: 1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

const PopUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popUpRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.pop_up',
          start: '100px top',
          onEnter:() => setIsOpen(false)
        }
      })
  })

  return (
    <div className="pop_up">
      <div
        className="pop_up__button"
        onClick={() => setIsOpen(!isOpen)}
      />
      <AnimatePresence>
        <motion.div
          className="pop_up__text"
          variants={popUp}
          animate={isOpen ? "open" : "closed"}
          initial="closed"
          ref={popUpRef}
        >
          <motion.div
            variants={popUpText}
            animate={isOpen ? "open" : "closed"}
            initial="closed"
          >
            <button
              className="cross"
              onClick={() => setIsOpen(false)}
            />
            <p>
            With a vision to revive the once-dormant market, Ghoons offers not just art, but a gateway to boundless creativity and exclusive benefits for its members. From unique digital masterpieces to immersive experiences, Ghoons NFT unveils a world where the Etheral meets blockchain, where every purchase becomes a cherished relic of the digital age. 
            </p>
            <p>




              With Team of Developer and Artist and experienced peeps we aim to deliever the market hype and craze it needs the most atm. Our partners will update the future benefits for Ghoonies through twitter so Stay Tuned !
            </p>
          </motion.div>
        </motion.div>
          <motion.div
            variants={popUpText}
            animate={isOpen ? "open" : "closed"}
            initial="closed"
            className="pop_up__blur"
            key={2}
          />
      </AnimatePresence>
    </div>
  );
};

export default PopUp;
