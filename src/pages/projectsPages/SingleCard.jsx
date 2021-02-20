import React, { useState } from 'react';
const SingleCard = ({ img, title, desc, link, git, hosted }) => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="single_card">
            <div className="img_div">
                <img src={process.env.PUBLIC_URL + img} alt="Project_Image" />
            </div>
            <h1 className="title">{title}</h1>
            <p className="desc">
                {toggle ? `${desc} ` : `${desc.substr(0, 60) + "...  "}`}
                <button onClick={() => { setToggle(!toggle) }}>
                    {toggle ? "Show Less" : "Show More"}
                </button>
            </p>
            <div className="btns_div">
                {
                    hosted ? <a href={link} target="_blank"><button>Site</button></a> : ""
                }
                <a href={git} target="_blank"><button>Code</button></a>
            </div>
        </div>
    )
}

export default SingleCard
