import "./contact.css"

const Contact = () => {
    return (
        <div className="contact-section">
            <div className="contact slide-up">
                <h4 className="slide-up">GET IN TOUCH</h4>
                <h1 className="slide-up">I love to hear from you whether you have a question or want to collaborate, shoot me a message.</h1>

                <h4 className="slide-up">REACH ME AT</h4>
                 <a href="mailto:opeyemilateef021@gmail.com" className="email">
                    opeyemilateef021@gmail.com
                </a>

                <div className="social slide-up">
                    <h4>SOCIAL</h4>
                    <a href="https://github.com/Lateef-Opeyemi" target="_blank">GitHub</a>
                    <a href="https://twitter.com/LATEEF__OPEYEMI" target="_blank">Twitter</a>
                    <a href="https://www.linkedin.com/in/lateef-opeyemi-a05125332" target="_blank">LinkedIn</a>
                </div>
            </div>
        </div>
    )
}

export default Contact;




