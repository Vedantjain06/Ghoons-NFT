import { motion, useInView } from 'framer-motion';
import React, { FC, useRef } from 'react';

import './TextSplit.scss';

const slideUp = {
  initial: {
    y: '100%',
  },
  open: (i: number) => ({
    y: '0%',
    transition: {
      duration: 0.7,
      delay: (0.01 * i) + 0.3,
    },
  }),
  closed: {
    y: '100%',
    transition: { duration: 0.5 },
  },
};

type Props = {
  phrase: string
}

export const TextSplit: FC<Props> = ({
  phrase,
}) => {
  const description = useRef(null);
  const isInView = useInView(description, { once: true
  });

  return (
    <p
      ref={description}
      className="text_split"
    >
      {phrase.split('').map((word, index) => (
        <span
          key={index}
          className="text_split__mask"
        >
          <motion.span
            variants={slideUp}
            custom={index}
            animate={isInView ? 'open' : 'closed'}
            key={word}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </p>
  );
};
