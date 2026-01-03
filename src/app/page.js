import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import ToolsExperience from "./components/Tools/Tools";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
        <AboutMe/>
        <Services/>
        <ToolsExperience/>
        <Education/>
        <Projects/>
        <Contact/>
    </div>
  );
}
