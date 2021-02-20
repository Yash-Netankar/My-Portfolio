import React from 'react';
import Nav from "../components/Nav";
import Button from "@material-ui/core/Button";
import About from "../components/About";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";
import Works from "../components/Works";
import Footer from "../components/Footer";
const Home = () => {
    return (
        <>
            <Nav />
            <div className="home" id="home">
                <section className="sec1">
                    <h3>Welcome!!, I AM</h3>
                    <h1>Yash Netan<span>kar</span></h1>
                    <h3>And I am a <span>Full Stack Developer</span></h3>
                    <a href="#about">
                        <Button className="btn">See More</Button>
                    </a>
                </section>
                <section className="sec2">
                </section>
            </div>
            <About />
            <Skills />
            <Timeline />
            <Works />
            <Footer />

        </>
    )
}

export default Home
