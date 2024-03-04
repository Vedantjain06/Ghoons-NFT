import FullWidthBg from '../../../components/FullWidthBg/FullWidthBg';
import FutureImage from '../../../images/future/future.png';

import './Future.scss';


const Future = () => {
  return (
    <section>
      <FullWidthBg
        type='image'
        url={FutureImage}
        classSection="future"
        customClass="future__image"
      >
        <div className="future__text">  
          <h1 className="future__title">ASPIRATIONS OF PROJECT</h1>
          <p>
          We're aspire to create a sensational name through Ghoons.We're here to provide the space crazy illustrations and good profit making projects with our brand Ghoons_NFT. Stay tuned with us for upcoming updates !!
          </p>
          <p>
          In this trend of high paid mint we're trying to give Web3 community and mint with reasonably lower MP and High valued utility 
          
          </p>
        </div>
      </FullWidthBg>
    </section>
  );
}

export default Future;