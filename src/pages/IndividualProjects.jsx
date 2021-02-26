import React from 'react';
import { useParams } from 'react-router-dom';
import ReactProjects from "./projectsPages/ReactProjects";
import FullStackProjects from "./projectsPages/FullStackProjects";
import NodeProjects from "./projectsPages/NodeProjects";
import VanillaProjects from "./projectsPages/VanillaProjects";
import PHPProjects from "./projectsPages/PhpProjects";

const Individual_Projects = () => {
    let { name } = useParams();
    if (name === "React Js") return <ReactProjects />
    else if (name === "Full Stack") return <FullStackProjects />
    else if (name === "Node Js") return <NodeProjects />
    else if (name === "Vanilla Js") return <VanillaProjects />
    else if (name === "PHP Mysql") return <PHPProjects />
}

export default Individual_Projects
