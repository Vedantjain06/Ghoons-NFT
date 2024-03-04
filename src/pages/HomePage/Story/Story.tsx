import FullWidthBg from '../../../components/FullWidthBg/FullWidthBg';
import StoryBg from '../../../videos/Game.mp4'
import './Story.scss'

const Story = () => {
  return (
    <section id="story">
      <FullWidthBg
        type='video'
        url={StoryBg}
        classSection="story"  
      >
        <div className="story__text">  
          <h2 className="bold">TELL YOUR PARAMORMAL EXPERIENCES</h2>
          <p>
          "Tell Your Ghost Stories" is a platform where users can share their most spine-chilling and eerie supernatural encounters. From encounters with restless spirits to inexplicable phenomena in haunted houses, users can recount their ghostly experiences in vivid detail.
          </p>
        </div>
      </FullWidthBg>
    </section>
  );
}

export default Story;