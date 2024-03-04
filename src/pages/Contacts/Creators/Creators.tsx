import { useEffect } from 'react';
import './Creators.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Creators = () => {

  return (
    <section className="creators">
      <div className="container">
        <h1 className="creators__title">
          AUTHORS OF THE PROJECT
        </h1>
        {/* <h2 className="creators__sub_title">
          Bringing power to the people by creating an intergalactic metaverse with next-gen technologies.
        </h2> */}

        <main className="creators__lists">
          <div className="creators_leaders">
            <h2 className="creators__list_title">
             TEAM
            </h2>
            <ul className="creators_list">
              <li className="creators__item">
                <p className="creators_name">
                 Eric
                </p>
                <p className="creators_position">
                  Developer
                </p>
              </li>
              <li className="creators__item">
                <p className="creators_name">
                  Jino
                </p>
                <p className="creators_position">
                  Artist
                </p>
              </li>
              {/* <li className="creators__item">
                <p className="creators_name">
                  Jacob Floyd
                </p>
                <p className="creators_position">
                  Chief Technology Officer
                </p>
              </li> */}
            </ul>
            <h2>
             Community is open to work if you want to work for experience
            </h2>
          </div>

          {/* <div className="creators_investors">
            <h2 className="creators__list_title">
              INVESTORS / SPONSORS
            </h2>
            <p>
              CRAZYEVILCORP® / DeBank® / Nvidia® 
            </p>
          </div> */}

          <footer className="creators_footer">
            <h2 className="creators_footer__title creators__title">
              Join the team
            </h2>
            <div className="creators_footer__text">
              <p className="creators_footer__text_first">
               Join the team and create something worthy for WEB3 community
              </p>
              <p>
                We’re always looking for people
                exceptional abilities, talents and ways of thinking.
                We welcome anyone who can contribute to the project and share experience
              </p>
            </div>

            <a
              href="mailto:JOBSSolarisMV@spacesol.com"
              className="creators_footer__link"
            >
              <span className="creators_footer__link_text">
                GhoonsNFT5555@gmail.com
              </span>
            </a>
          </footer>
        </main>
      </div>
    </section>
  );
};

export default Creators;