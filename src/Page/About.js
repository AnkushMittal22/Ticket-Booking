import AboutApp from "../Component/AboutApp/AboutApp";
import style from "./About.module.css";
const About = () => {
  return (
    <div className={style.about_main}>
      <div>
        <AboutApp />
      </div>
    </div>
  );
};

export default About;
