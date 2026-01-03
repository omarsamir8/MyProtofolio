'use client'
import "./Services.css";
import Image from "next/image";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

function Services() {
     useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true
    })
  }, [])
  return (
    <>
      <div className="Services">
        <div className="ser-title">
          <h2>Services</h2>
        </div>
        <div className="Services-container">
          <div data-aos="fade-up-right" className="service">
            <div className="service-img">
              <Image
                   src="/Assets/webdesign.avif"
                   alt="MY Professional Image"
                   width={450}
                   height={500}
              />
            </div>
            <div className="service-details">
              <h3>Web Development</h3>
              <p>
                creating the visual and interactive aspects of a website .Using
                Graphics and Images , Navigation ,Responsiveness Using
                frameworks like React
              </p>
            </div>
          </div>
          <div data-aos="fade-up-right" className="service">
            <div className="service-img">
              <Image
                   src="/Assets/uiux.jpg"
                   alt="MY Professional Image"
                   width={450}
                   height={500}
              />
            </div>
            <div className="service-details">
              <h3>UI/UX </h3>
              <p>
                Creating visually appealing and intuitive designs for users &
                Enhancing user experience to ensure ease of use and satisfaction
                with the product
              </p>
            </div>
          </div>
          <div data-aos="fade-up-left" className="service">
            <div className="service-img">
              <Image
                   src="/Assets/intergration backecnd.png"
                   alt="MY Professional Image"
                   width={450}
                   height={500}
              />
            </div>
            <div className="service-details">
              <h3>Backend Integration</h3>
              <p>
                Working with RESTful APIs. Consuming and using APIs to build
                interactive and dynamic interfaces. Integration with Databases:
                to efficiently fetch data
              </p>
            </div>
          </div>
          <div data-aos="fade-up-left" className="service">
            <div className="service-img">
              <Image
                   src="/Assets/performance.jpg"
                   alt="MY Professional Image"
                   width={450}
                   height={500}
              />
            </div>
            <div className="service-details">
              <h3>Performance Optimization</h3>
              <p>
                Improving Load Speed: Reducing the size of images and files,
                using lazy loading techniques, and optimizing code.
              </p>
            </div>
          </div>
          <div data-aos="fade-up-right" className="service">
            <div className="service-img">
              <Image
                   src="/Assets/responsive.png"
                   alt="MY Professional Image"
                   width={450}
                   height={500}
              />
            </div>
            <div className="service-details">
              <h3>Responsive Design</h3>
              <p>
                Ensuring Compatibility Across Devices: Creating designs that
                work well on all devices, from mobile phones to desktop
                computers.
              </p>
            </div>
          </div>
          <div data-aos="fade-up-right" className="service">
            <div className="service-img">
              <Image
                   src="/Assets/animtions.webp"
                   alt="MY Professional Image"
                   width={450}
                   height={500}
              />
            </div>
            <div className="service-details">
              <h3>Interactions and Animations</h3>
              <p>
                Using CSS and JavaScript: Creating interactive effects and
                animations to enhance user experience. Using Libraries like AOS,
                Animate, or Framer Motion: Creating advanced and smooth
                animations.
              </p>
            </div>
          </div>
          <div data-aos="fade-up-left" className="service">
            <div className="service-img">
              <Image
                   src="/Assets/documentaion.png"
                   alt="MY Professional Image"
                   width={450}
                   height={500}
              />
            </div>
            <div className="service-details">
              <h3>Maintenance and Updates</h3>
              <p>
                Regular Updates: Updating website content, performance
                improvements, and security updates. Adding New Features:
                Developing new features based on client requests or user needs.
              </p>
            </div>
          </div>
          <div data-aos="fade-up-left" className="service">
            <div className="service-img">
              <Image
                   src="/Assets/maintance.avif"
                   alt="MY Professional Image"
                   width={450}
                   height={500}
              />
            </div>
            <div className="service-details">
              <h3>Documentation and Training</h3>
              <p>
                Writing clear and understandable code documentation to
                facilitate maintenance and future development. Providing
                training and support to clients or internal development teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Services;