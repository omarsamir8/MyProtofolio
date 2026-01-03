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
          </div>
        </div>
        <div data-aos="fade-up-left" className="experienceContainer">
          <h2>Experience</h2>
          <div className="expreiences">
            <div className="expreience">
              <i className="fa-brands fa-square-upwork"></i>
              <div className="up-details">
                <h3>Freelancer E-Commerce Project</h3>
                <p>oct,2025-dec,2025</p>
                <h5> 1-Make More Interactive </h5>
                <h5> 2-Make High Responsive </h5>
                <h5> 4-Make Smart Cart </h5>
                <h5> 5-Make Smart Dashboard For Owner </h5>
              </div>
            </div>
            <div className="expreience">
              <i className="fa-brands fa-square-upwork"></i>
              <div className="up-details">
                <h3> Web Based Information System For Stdent Portal Project</h3>
                <p>Jan,2024-mar,2024</p>
                <h5> 1-Make More Interactive </h5>
                <h5> 2-Make High Responsive </h5>
                <h5> 3-Make Real Time Chat </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ToolsExperience;