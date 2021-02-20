import React from 'react';
import SingleCard from "./SingleCard";
import arr from "../../Project Data/fullStack_data";
import Nav from '../../components/Nav';

const FullStackProjects = () => {
    return (
        <>
            <Nav />
            <div className="myProject_div">
                {
                    arr.map(item =>
                        <SingleCard
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            link={item.link}
                            git={item.git}
                            hosted={item.isHosted}
                            key={item.id}
                        />
                    )
                }
            </div>
        </>
    )
}

export default FullStackProjects
