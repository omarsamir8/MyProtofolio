import "./Tools.css";
function ToolsExperience() {
  return (
    <>
      <div className="toolsandexperience">
        <div data-aos="fade-up-right" className="ToolContainer">
          <h2>Tools</h2>
          <div className="tools">           
            <div className="tool">
              <div className="i">
                <i className="fa-brands fa-html5"></i>
              </div>
              <p>HTML 5</p>
            </div>           
            <div className="tool">
              <div className="i">
                <i
                  style={{ color: "rgb(89, 159, 250)" }}
                  className="fa-brands fa-css3"
                ></i>
              </div>
              <p>CSS 3</p>
            </div>
            <div className="tool">
              <div className="i">
                <i style={{ color: "blue" }} className="fa-brands fa-bootstrap"></i>
              </div>
              <p style={{ width: "90px", overflow: "clip" }}>BOOTSTRAP</p>
            </div>
            <div className="tool">
              <div className="i">
                <i style={{ color: "red" }} className="fa-brands fa-sass"></i>
              </div>
              <p>SAAS</p>
            </div>
            <div className="tool">
              <div className="i">
                <i
                  style={{ color: "yellow" }}
                  className="fa-brands fa-square-js"
                ></i>
              </div>
              <p>JS</p>
            </div>
            <div className="tool">
              <div className="i">
                <i
                  style={{ color: "turquoise" }}
                  className="fa-brands fa-react"
                ></i>
              </div>
              <p>REACT</p>
            </div>
            <div className="tool">
              <div style={{backgroundColor:"black",color:"white"}} className="i">
                <i style={{color:"white"}} className="fa-solid fa-n"></i>
              </div>
              <p>Next.js</p>
            </div>
            <div className="tool">
              <div className="i">
                <i style={{color:"green"}} className="fa-solid fa-leaf"></i>
              </div>
              <p>Mongo DB</p>
            </div>
            <div className="tool">
              <div className="i">
                <i className="fa-brands fa-node-js"></i>
              </div>
              <p>NODE.JS</p>
            </div>
            <div className="tool">
              <div className="i">
                <i
                  style={{ color: "green" }}
                  className="fa-brands fa-asymmetrik"
                ></i>
              </div>
              <p>APIS</p>
            </div>
            <div className="tool">
              <div className="i">
                <i
                  style={{ color: "blueviolet" }}
                  className="fa-brands fa-asymmetrik"
                ></i>
              </div>
              <p>Animate</p>
            </div>
            <div className="tool">
              <div className="i">
                <i
                  style={{ color: "turquoise" }}
                  className="fa-brands fa-uikit"
                ></i>
              </div>
              <p>Mat UI</p>
            </div>

            <div className="tool">
              <div className="i">
                <i style={{ color: "hotpink" }} className="fa-solid fa-a"></i>
              </div>
              <p>AOS </p>
            </div>
            <div className="tool">
              <div className="i">
                <i style={{ color: "white" }} className="fa-brands fa-github"></i>
              </div>

              <p>Git/Hub</p>
            </div>
            <div className="tool">
              <div className="i">
                <i style={{ color: "currentcolor" }} className="fa-solid fa-f"></i>
              </div>
              <p>Font Aws</p>
            </div>


<div className="tool">
  <div className="i">
    <i style={{ color: "#3178C6" }} className="fa-solid fa-code"></i>
  </div>
  <p>TypeScript</p>
</div>


<div className="tool">
  <div className="i">
    <i style={{ color: "#ffca28" }} className="fa-solid fa-magnifying-glass"></i>
  </div>
  <p>React Query</p>
</div>



<div className="tool">
  <div className="i">
    <i style={{ color: "#4db33d" }} className="fa-solid fa-database"></i>
  </div>
  <p>MongoDB</p>
</div>

<div className="tool">
  <div className="i">
    <i style={{ color: "#000" }} className="fa-brands fa-git-alt"></i>
  </div>
  <p>Git</p>
</div>
<div className="tool">
  <div className="i">
    <i style={{ color: "#61DAFB" }} className="fa-solid fa-database"></i>
  </div>
  <p>Redux Toolkit</p>
</div>
<div className="tool">
  <div className="i">
    <i style={{ color: "#000" }} className="fa-solid fa-rocket"></i>
  </div>
  <p>Vercel</p>
</div>

<div className="tool">
  <div className="i">
    <i style={{ color: "#ff6b6b" }} className="fa-solid fa-bolt"></i>
  </div>
  <p>Performance</p>
</div>
            <div className="tool">
  <div className="i">
    <i style={{ color: "#38BDF8" }} className="fa-solid fa-wind"></i>
  </div>
  <p>Tailwind CSS</p>
</div>
          </div>
        </div>
        <div data-aos="fade-up-left" className="experienceContainer">
          <h2>Experience</h2>
          <div className="expreiences">
            <div className="expreience">
              <i className="fa-brands fa-square-upwork"></i>
              <div className="up-details">
                <h3>Front-End Developer (Freelance) – LMS Platform</h3>
                <p>2026/03 – Present</p>
                <h5> Developed a large-scale LMS with 4 interconnected platforms (Client,
Organization, Admin, Company) </h5>
                <h5>  Built scalable architecture using
Next.js and React.js with role-based access control </h5>
                <h5>  Integrated
RESTful APIs and managed state using Redux Toolkit & React Query </h5>
                <h5> 
Created reusable UI components with Tailwind CSS and ensured
responsive design</h5>
                <h5> Optimized performance and improved load times
across all platforms</h5>
              </div>
            </div>
            <div className="expreience">
              <i className="fa-brands fa-square-upwork"></i>
              <div className="up-details">
                <h3> Full-Stack Developer (Freelance) – Brezada E-commerce</h3>
                <p>2025/12 – 2026/01</p>
                <h5> Developed a full-stack e-commerce platform using Next.js and
MongoDB </h5>
                <h5> Implemented key features: product management, cart,
checkout, authentication, and orders </h5>
                <h5> Built responsive UI with
Tailwind CSS and integrated RESTful APIs </h5>
<h5>Optimized performance
and ensured scalable architecture</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ToolsExperience;