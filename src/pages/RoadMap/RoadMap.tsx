import { useIsPresent } from 'framer-motion';
import { Transition } from '../../components/Transition/Transition';
import Events from './Events/Events';
import Footer from './Footer/Footer';
import Head from './Head/Head';

const RoadMap = () => {
  const isPresent = useIsPresent();

  return (
    <>
    <main>
      <Head />

      <Events />

      <Footer />
    </main>
    
      <Transition isPresent={isPresent}/>
    </>
  );
};

export default RoadMap;
