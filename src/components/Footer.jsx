import React from 'react';
import { NavLink } from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import GitHubIcon from '@material-ui/icons/GitHub';


const Footer = () => {
    return (
        <footer>
            <h2>Portfolio Website of Yash Netankar.</h2>
            <div className="sections_div">
                <section className="f_sec1">
                    <h1 style={{color:"white"}}>Contact Me:</h1>
                    <div className="contacts_div">
                        <a href="mailto:netankaryash2002@gmail.com"
                            title="netankaryash2002@gmail.com">
                            <EmailIcon />
                        </a>
                        <a href="https://www.linkedin.com/in/yash-netankar-29b8ba200/" target="_blank" rel="noreferrer">
                            <LinkedInIcon />
                        </a>
                        <a href="https://github.com/yash-netankar/" target="_blank" rel="noreferrer">
                            <GitHubIcon />
                        </a>
                        <a href="tel:9284954495" title="9284954495">
                            <PhoneIcon />
                        </a>
                    </div>
                </section>
                <section className="f_sec2">
                    <div className="links_div">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <NavLink className="a" to="/projects">Projects</NavLink>
                    </div>
                </section>
            </div>
            <p>This website is built by Yash Netankar with React and Framer Motion.</p>
            <p>&copy; 2021-2022 by Yash Netankar.</p>
            <a href="#home">Back To Top</a>
        </footer>
    )
}

export default Footer
