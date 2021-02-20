import React from 'react'

const Skills = () => {
    let skills = ["React", "Node + Express", "MongoDB & MySql", "Vanilla JS", "PHP", "HTML & CSS + SASS"];
    let skillProgress = [75, 80, 65, 80, 50, 84];
    let tools = ["Git+GitHub", "FireBase", "Contentful", "VS Code", "Heroku+Netlify"];
    let toolsProgress = [70, 85, 60, 40, 30];
    return (
        <div className="skills_container">
            <section className="sec1">
                <h1>Skills</h1>
                <div className="skills_div parent">
                    {
                        skills.map((value, index) => {
                            let width = skillProgress[index];
                            return (
                                <div className="skill child" key={index}>
                                    <h4>{value}</h4>
                                    <div className="bar" style={{ width: width + "%" }} />
                                    <h5 className="width">{width}%</h5>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section className="sec2">
                <h1>Tools</h1>
                <div className="tools_div parent">
                    {
                        tools.map((value, index) => {
                            let width = toolsProgress[index];
                            return (
                                <div className="tool child" key={index}>
                                    <h4>{value}</h4>
                                    <div className="bar" style={{ width: width + "%" }} />
                                    <h5 className="width">{width}%</h5>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Skills
