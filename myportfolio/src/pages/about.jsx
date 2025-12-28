import "./about.css"

const About = () => {
    return (
        <div>
            <section className="about">
                <div className="about-image slide-left">
                    <img src="/img.jpeg" alt="Lateef Opeyemi" />
                </div>

                <div className="about-text slide-right">
                    <h2>About Me</h2>
                    <p>
                        Hi, I’m Lateef Opeyemi — a Frontend Developer passionate about building clean, modern and user-friendly web experiences. I enjoy turning ideas into real, working products using HTML, CSS and JavaScript, and I’m currently building deeper skills in React to create more dynamic and interactive interfaces.

                        I love learning new technologies, writing clean code, and paying attention to simple but effective UI/UX details. My focus right now is improving my frontend development skills, building more real-world projects, and becoming confident enough to contribute to larger applications and open-source projects.

                        Beyond coding, I enjoy researching tech ideas, experimenting with new design styles, and constantly improving my problem-solving mindset. My long-term goal is to become a highly skilled frontend engineer capable of building scalable products and creating user experiences people enjoy using
                    </p>

                    <div className="about-buttons">
                        <a href="https://github.com/Lateef-Opeyemi" target="_blank">GitHub</a>
                        <a href="https://twitter.com/LATEEF__OPEYEMI" target="_blank">Twitter</a>
                        <a href="https://www.linkedin.com/in/lateef-opeyemi-a05125332" target="_blank">LinkedIn</a>
                        <a href="/Lateef-Opeyemi-Resume.pdf" target="_blank">Resume</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;