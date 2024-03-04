import "./Footer.scss"

import FooterLinks from '../../../data/FooterLinks.json'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__text">
        <h2 className="bold">
          MARKETPLACE AND PROJECT-X ANNOUNCEMENTS WILL BE UPDATED ON SOCIAL MEDIA SOON
        </h2>
        {/* <h2 className="bold">
          FOLLOW US ON SOCIAL NETWORKS AND BE THE FIRST TO KNOW ABOUT UNANNOUNCED EVENTS!
        </h2> */}
      </div>

      <div className="footer__bottom small-text">
        {/* <p>
          Trademarks belong to their respective owners. All Rights Reserved.
        </p> */}
        <p>
          Ghoons NFT ®
        </p>
        <ul className="footer__links">
          {FooterLinks.map((curentLink, i) => {
            const { link, title } = curentLink
            return (
              <li key={i}>
                <a href={link} className="footer__link">
                  {title}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;