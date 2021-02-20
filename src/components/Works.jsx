import React, { useEffect, useState } from 'react';
import Modal from "./Modal";
import Button from '@material-ui/core/Button';

const Works = () => {

    const [modal, setModal] = useState(false);
    const setModalFunc = () => setModal(false);

    const img_path = process.env.PUBLIC_URL;
    const work_arr1 = [img_path + "/Project Images/work/bst_img1.jpeg",
    img_path + "/Project Images/work/bst_img2.jpeg"];

    useEffect(() => {
        let tabs = document.querySelectorAll('[data-tab-target]');
        let tabContents = document.querySelectorAll('[data-tab-content]');

        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                const target = document.querySelector(tab.dataset.tabTarget);
                tabContents.forEach(tabContent => {
                    tabContent.classList.remove("active");
                })
                target.classList.add("active");
            })
        })
    })

    return (
        <div className="exp_container">
            <h1>Experience <span className="and">&</span> <span>Activities</span></h1>
            <div className="tab_container">
                <div className="tabs_div">
                    <ul className="tabs">
                        <li data-tab-target="#page1">Best Enlist</li>
                        <li data-tab-target="#page2">Laptop Clinic</li>
                    </ul>
                </div>
                <div className="tab_content">
                    <div id="page1" data-tab-content className="active">
                        <h1>Best Enlist</h1>
                        <p>Worked for best enlist bootcamp of react js for a month. Completed all the daily given tasks and a mini-project at the end.</p>
                        <Button className="modal_btn" onClick={() => setModal(true)}>
                            See Work
                        </Button>
                        <Modal
                            img_arr={work_arr1}
                            modal={modal}
                            ModalFunc={setModalFunc} />
                    </div>
                    <div id="page2" data-tab-content >
                        <h1>Laptop Clinic</h1>
                        <p>Going to develop an E-commerce website for local computer shop "Laptop Clinic" in a month or two. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works
