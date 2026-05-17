'use client'
import { useRouter } from "next/navigation";
import './AboutMe.css';
import Image from "next/image";

function AboutMe(){
    const router = useRouter();
    return (
        <>
            <div className="hero">
                <div data-aos="fade-up-right" className="left">
                <h5>Welcom To My Protfolio</h5>
                <h1>
                    Hi! I'am Omar Samir <span> Front End Developer</span>
                </h1>
                <p>
                   Front-End Developer with strong experience in building scalable, high-performance web applications using React.js and Next.js. Specialized in developing complex multi-role systems, including LMS platforms and full-stack e-commerce solutions.

Proficient in building responsive UI/UX, integrating RESTful APIs, and managing state with Redux Toolkit and React Query. Focused on performance optimization, clean architecture, and delivering seamless user experiences.

Passionate about modern web technologies and continuously improving development quality and system design.</p>
                <div className="buttons">
                    <button
                    onClick={()=>{router.push("https://drive.google.com/drive/u/0/folders/1EPYku1sXJEOvQDGPPtyvvt7TZHECIxvp");}}
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