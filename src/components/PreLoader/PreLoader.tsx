import { FC, useEffect, useRef } from 'react';
import './PreLoader.scss'
import gsap from 'gsap';

const PreLoader = () => {
  const blind1 = useRef(null);
  const blind2 = useRef(null);
  
  useEffect(() => {
      gsap.to([blind1.current, blind2.current], {
        top: '-100vh',
        stagger: 0.3,
        ease: 'power3.out',
        duration: 1,
        delay: 2
      });
  }, []);

  return (
    <div className="preloader">
      <div className="preloader__blind" ref={blind1}/>
    </div>
  );
};

export default PreLoader;