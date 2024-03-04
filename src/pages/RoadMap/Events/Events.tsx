import EventCard from './EventCard'
import first from '../../../images/RoadMap/Rally_event.png'
import second from '../../../images/RoadMap/New_Year_Event.jpg'
import third from '../../../images/RoadMap/ReadyTo.jpg'
import EventsContent from '../../../data/Events.json'

import './Events.scss'

function getImage(image: string) {
  switch(image) {
    case 'Social Media':
      return first
    
    case 'Reward$':
      return second
    
    case 'Project-X?':
      return third
  }
}

const Events = () => {
  return (
    <section className="events">
      {EventsContent.map((currentEvent, i) => {
        const {date, id, leftText, rigthText, title, type} = currentEvent

        return (
          <EventCard
            id={id}
            image={getImage(title)}
            title={title}
            date={date}
            type={type}
            leftText={leftText}
            rightText={rigthText}
            key={i}
          />
        )
      })}
    </section>
  )
}

export default Events