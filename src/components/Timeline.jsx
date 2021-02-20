import React from 'react'

const Timeline = () => {
    return (
        <div className="timeline_div">
            <h1>Timeline</h1>
            {/* item 1 */}
            <ul className="timeline">
                <li className="item">
                    <p className="date">May 2016</p>
                    <h2>SSC Board</h2>
                    <p className="desc">
                        I passed my SSC board from <span> Mother Teresa School</span> , Pune, Vadgaon sheri in 2016 with <span> 80</span>%.
                    </p>
                </li>
                {/* item 2 */}
                <li className="item">
                    <p className="date">May 2018</p>
                    <h2>HSC Board (science)</h2>
                    <p className="desc">
                        I passed my HSC board from <span> Pathare Junior College</span> , Chandannagar in 2018 with <span> 60.92</span>% in the science stream.
                    </p>
                </li>
                {/* item 3 */}
                <li className="item">
                    <p className="date">May 2021</p>
                    <h2>BCA (science)</h2>
                    <p className="desc">
                        Currently I am pursuing SY BCA (science) in Haribhai V Desai College, Pune,
                        where my percentile was
                        <div>
                            <span>First Year - 9.1 CGPA.</span>&nbsp;&nbsp;
                            <span>Second Year - 0.0 CGPA.</span>&nbsp;&nbsp;
                            <span>Third Year - 0.0 CGPA.</span>
                        </div>
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default Timeline
