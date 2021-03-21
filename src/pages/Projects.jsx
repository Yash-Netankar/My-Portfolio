import React from 'react';
import Nav from "../components/Nav";
import Card from "../components/Card";
import react_logo from "../styles/images/react_logo.png";
import fullStack from "../styles/images/full stack.png";
import node from "../styles/images/node.png";
import js from "../styles/images/js.png";
import php from "../styles/images/phplogo.png";

const Projects = () => {

    return (
        <>
            <Nav />
            <h4
                style={{ textAlign: "center", color: "red", background: "whitesmoke" }}>
                Not Every Project Might Be Available Right Now, As they are built for practised and  not as production ready sites!!
            </h4>
            <div className="projects_div">
                <Card img={fullStack} title="Full Stack" desc="Full Stack Web-Apps" no={3} />
                <Card img={react_logo} title="React Js" desc="React.js Projects" no={5} />
                <Card img={node} title="Node Js" desc="Node.js Projects" no={2} />
                <Card img={js} title="Vanilla Js" desc="Vanilla.js Projects" no={13} />
                <Card img={php} title="PHP Mysql" desc="PHP & Mysql Projects" no={7} />
            </div>
        </>
    )
}

export default Projects
