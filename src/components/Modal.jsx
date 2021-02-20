import React from 'react';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';


const Modal = (props) => {

    return (
        <div className={props.modal ? "modal show" : "modal"}>
            <header>
                <h1>Certifications etc.</h1>
                <Button className="close_btn">
                    <ClearIcon onClick={() => props.ModalFunc(false)} />
                </Button>
            </header>
            <main className="modal-content">
                {
                    props.img_arr.map((item, index) => <img src={item} alt="Work Photo" key={index} />)
                }
            </main>
        </div>
    )
}

export default Modal
