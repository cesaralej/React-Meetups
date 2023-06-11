import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function deleteHandler() {
        setModalIsOpen(true);
    }

    function confirmHandler() {
        setModalIsOpen(false);
        console.log('Deleting...');
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsOpen && <Modal onClose={closeModalHandler} onConfirm={confirmHandler} />}
            {modalIsOpen && <Backdrop onClose={closeModalHandler} />}
        </div>

    )
}

export default Todo;