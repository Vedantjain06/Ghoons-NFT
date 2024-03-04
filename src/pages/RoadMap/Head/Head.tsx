import FullWidthBg from '../../../components/FullWidthBg/FullWidthBg';
import './Head.scss'
import headBg from '../../../images/RoadMap/RoadMap_head.jpg'
import Roades from '../../../data/RoadMapContent.json'
import AnchorLink from '../../../components/AnchorLink/AnchorLink';

const Head = () => {
  return (
    <section>
      <FullWidthBg
        url={headBg}
        type='image'
        classSection="head"
        customClass='head__image'
      >
        <h2 className="head__title">
          Road Map
          <br />
          Ghoons_NFT 
          <br />
          
        </h2>

        <div className="head__phases">
          <h2 className="head__phases_title">
            Phase one
          </h2>
          <ul className="head__phases_list">
            {Roades.map((currentEvent, i) =>(
              <li key={i} className="head__phases_item">
                {
                  currentEvent.href.slice(0, 1) === '#' ? (
                    <AnchorLink
                      toSection={currentEvent.href}
                      customClass="head__phases_link"
                    >
                      {currentEvent.title}
                    </AnchorLink>
                  ) : (
                  <a
                    href={currentEvent.href}  
                    className="head__phases_link"
                  >
                    {currentEvent.title}
                  </a>
                  )
                }
              </li>
            ))}

            <li className="head__phases_item">
              ?
            </li>
          </ul>
        </div>
      </FullWidthBg>
    </section>
  );
};

export default Head