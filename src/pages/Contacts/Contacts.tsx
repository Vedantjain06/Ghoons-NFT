import { useState } from 'react';
import ContactsHead from './Head/Head';
import { AnimatePresence, useIsPresent } from 'framer-motion';
import Socials from './Socials/Socials';
import Creators from './Creators/Creators';
import { Transition } from '../../components/Transition/Transition'

const Contacts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isPresent = useIsPresent();
  
  return (
    <>
      <main>
        <ContactsHead
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />

        
        <AnimatePresence>
          {isOpen && (
            <>
              <Socials isOpen={isOpen} />
              <Creators />
            </>
          )}
        </AnimatePresence>
      </main>
      <Transition isPresent={isPresent}/>

    </>
  );
};

export default Contacts;
