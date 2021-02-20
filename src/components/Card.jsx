import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({ img, title, desc, no }) => {
    return (
        <div className="card">
            <div className="img_div">
                <div className="circle">
                    <img src={img} alt={img} />
                </div>
            </div>
            <div className="info">
                <h1 className="title">{title}<h6>({no})</h6></h1>
                <h5>{desc}</h5>
                <div className="go">
                    <NavLink to={`/Individual_Projects/${title}`}>
                        <button>See All Projects</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Card
