import './AboutMe.css';
import Image from "next/image";
function AboutMe(){
    return (
        <>
            <div className="hero">
                <div data-aos="fade-up-right" className="left">
                <h5>Welcom To My Protfolio</h5>
                <h1>
                    Hi! I'am Omar Samir <span> Full Stack Develober</span>
                </h1>
                <p>
                    I’m a graduate of the Faculty of Computers and Artificial Intelligence from Benha University.
                    I’m a Full-Stack Developer specializing in Next.js, with strong experience in building responsive, user-friendly, and animated web applications.
                    I have worked on multiple projects, including several full-stack applications, where I handled the entire development process—from UI/UX design and front-end development to back-end logic and database integration.
                    I have a solid understanding of modern web development concepts, RESTful APIs, performance optimization, and scalable application architecture.
                    I’m passionate about learning new technologies, writing clean and maintainable code, and building scalable, high-quality applications that provide an excellent user experience.
                </p>
                <div className="buttons">
                    <button
                    className="animate__animated animate__bounceInRight cv"
                    >
                    Download CV{" "}
                    <i style={{ color: "brown " }} className="fa-solid fa-download"></i>
                    </button>
                </div>
                </div>
                <div data-aos="fade-up-left" className="right">
                        <Image
                            src="/Assets/Omarsamir.jpg"
                            alt="MY Professional Image"
                            width={450}
                            height={500}
                        />
                </div>
            </div>
        </>
    )
}
export default AboutMe;