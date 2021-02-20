import React from 'react';
import Button from "@material-ui/core/Button";

const About = () => {
    return (
        <div className="about_container" id="about">
            <h1>About Me</h1>
            <div className="info">
                <section className="sec_1"></section>
                <section className="sec_2">
                    <p>Hello, I am Yash Netankar. I am currently pursuing <span>BCA(science)</span> from HV Desai College under <span>PUNE UNIVERSITY</span>. I am passionate about full stack development and i've been learning a lot about it. I am very well aware of technologies like React and Nodejs. I am more into <span>MERN STACK develoment.</span>
                    </p>
                    <a href={process.env.PUBLIC_URL + 'Yash Resume.pdf'} download>
                        <Button className="btn">Download Resume</Button>
                    </a>
                </section>
            </div>
        </div>
    )
}

export default About;
