import FullWidthBg from '../../../components/FullWidthBg/FullWidthBg';
import AboutVideo from '../../../videos/AboutProject.mp4'
import './AboutProject.scss'

const AboutProject = () => {
  return (
    <section id="about-project">
      <FullWidthBg
        type='video'
        url={AboutVideo}
        customClass="about_project__image" 
        classSection="about_project" 
      >
        <div className="about_project__text">  
          <h2 className="bold">EXPLORE THE GHOST MANSION</h2>
          <p>
          As you approach the eerie gates of the ghost mansion, the night air grows colder, and a sense of foreboding envelops you. Share the experiences of mansion with fellow members . 
          </p>
        </div>
      </FullWidthBg>
    </section>
  );
}

export default AboutProject;