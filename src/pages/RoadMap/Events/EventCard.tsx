import FullWidthBg from '../../../components/FullWidthBg/FullWidthBg'
import { FC, useRef } from 'react'

import './Events.scss'
import { useInView } from 'framer-motion'
import { TextSplit } from '../../../components/TextSplit/TextSplit'

type Props = {
  image: string
  title: string
  date: string
  type: string
  leftText: string
  rightText: string
  id: string
}

export const opacity = (isInView: boolean) => {
  return {
    opacity: isInView ? 1 : 0,
    transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
  }
}

const EventCard: FC<Props> = ({ id, title, image, date, type, leftText, rightText }) => {
  const description = useRef(null);
  const isInView = useInView(description, { once: true
  });

  return (
    <div>
      <h1 className="big-text event__title">{title}</h1>

      <FullWidthBg
        url={image}
        type="image"
        classSection="event_card"
        style={opacity(isInView)}
      >
        <div className="event_card__text" ref={description} id={`${id}`}>
          <p
            style={opacity(isInView)}
            className="event_card__main_text"
          >
            {leftText}
          </p>
          <div>
            <h1 className="big-text event_card__date_event">
              <TextSplit
                phrase={date}
              />
            </h1>
            <h1 className="big-text event_card__type_event">
            <TextSplit
                phrase={type}
              />
            </h1>
          </div>
          <p
            style={opacity(isInView)}
            className="event_card__main_text"
          >
            {rightText}
          </p>
        </div>
      </FullWidthBg>
    </div>
  );
};

export default EventCard