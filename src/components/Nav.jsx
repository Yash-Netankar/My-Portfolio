import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import Button from "@material-ui/core/Button";
import CloseIcon from '@material-ui/icons/Close';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { motion } from "framer-motion";
import img from "../styles/images/my-photo.png";

const Nav = () => {

    const [slider, setSlider] = useState(false);
    const Drawer = (parameter) => {
        setSlider(parameter);
    }
    // animations
    const animation = {
        initial: { opacity: 0, x: '-20vw' },
        animate: { opacity: 1, x: '0vw' }
    }
    const animation2 = {
        initial: { opacity: 0, x: '20vw' },
        animate: { opacity: 1, x: '0vw' }
    }
    // animations end

    useEffect(() => {
        let nav = document.querySelector("nav");
        window.addEventListener("scroll", () => {
            if (window.scrollY > 20) {
                nav.classList.add("fixed")
            }
            else {
                nav.classList.remove("fixed")
            }
        })
    }, [])

    return (
        <>
            <nav>
                <motion.div className="logo" variants={animation} initial="initial" animate="animate">
                    <NavLink to="/" exact className="logo_link">
                        <h1>
                            Yash Netan<span>kar..</span>
                        </h1>
                    </NavLink>
                </motion.div>
                <motion.div className="navbar" variants={animation2} initial="initial" animate="animate">
                    <NavLink to="/projects" className="link" exact>Projects</NavLink>
                    <Button className="hamburger" onClick={() => setSlider(!slider)}>
                        <MenuIcon />
                    </Button>
                </motion.div>
            </nav>
            <SwipeableDrawer
                className="slider"
                anchor="left"
                open={slider}
                onClose={() => Drawer(false)}
                onOpen={() => Drawer(true)}
            >
                <div className="slider_content">
                    <section className="sec-1" style={{ width: "50vw" }}>
                        <div className="logo_div">
                            <div className="name">
                                <h1>Yash</h1>
                                <h4>Netankar</h4>
                            </div>
                            <Button onClick={() => setSlider(false)}>
                                <CloseIcon className="close_btn" />
                            </Button>
                        </div>
                        <div className="links_div">
                            <NavLink to="/" exact className="Navlink" onClick={() => Drawer(false)}>Home</NavLink>
                            <NavLink to="/projects" exact className="Navlink" onClick={() => Drawer(false)}>Projects</NavLink>
                        </div>
                    </section>
                    <section className="sec-2">
                        <img src={img} alt="Myself" />
                        <p>
                            Hello, I am Yash Netankar. I am currently pursuing BCA(science) from HV Desai College under PUNE UNIVERSITY. I am passionate about full stack development and i've been learning a lot about it. I am very well aware of technologies like React and Nodejs. I am more into MERN STACK develoment.
                        </p>
                    </section>
                </div>
            </SwipeableDrawer>
        </>
    )
}

export default Nav
