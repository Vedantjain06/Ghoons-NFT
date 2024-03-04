import "./NavList.scss";
import { motion } from "framer-motion";
import { perspective } from "./anim";
import HeaderContent from "../../../../data/HeaderContent.json";
import { Link } from "react-router-dom";
import { pdf } from "../../../../pdf/pdf";

function NavList({ setIsActive }) {
  return (
    <div className="nav">
      <div className="nav__body">
        {HeaderContent.map((currentLink, i) => {
          const { title, link, type } = currentLink;
          return (
            <div
              key={`b_${i}`}
              className="nav__linkContainer"
            >
              <motion.div
                className="nav__link"
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                {type === "section-link" ? (
                  <Link
                    to={link}
                    className="nav__link_item"
                    onClick={() => setIsActive(false)}
                  >
                    {title}
                  </Link>
                ) : type === "download" ? (
                  <a
                    href={pdf(title)}
                    className="nav__link_item"
                    download
                    
                  >
                    {title}
                  </a>
                ) : (
                  <a
                    href={link}
                    target="_blank"
                    className="nav__link_item"
                    onClick={() => setIsActive(false)}
                    rel="noreferrer"
                  >
                    {title}
                  </a>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NavList;
