import Head from "./Head/Head";
import { Transition } from '../../components/Transition/Transition';
import { useIsPresent } from 'framer-motion';

const MarketPlace = () => {
  const isPresent = useIsPresent();

  return (
    <>
      <main>
        <Head />
      </main>

      <Transition isPresent={isPresent}/>
    </>
  );
};

export default MarketPlace;

