import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import {deleteById, getStudent} from "../../service/studentListService";
import {logDOM} from "@testing-library/dom";


const ModalDelete = ({isShowModal, idDelete, closeModal,loading}) => {
    const deleteStudent = () => {
        console.log(getStudent())
        closeModal()
        loading()
    }

    return (
        isShowModal && <div className="modal show" tabIndex="-1" style={{display: 'block'}}>
            <div className="modal-dialog">

                <div className="modal-content">
                    {console.log('------modal render')}
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.{idDelete}</p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={closeModal} type="button"
                                className="btn btn-secondary">Close
                        </button>
                        <button onClick={deleteStudent} type="button" className="btn btn-primary">Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ModalDelete;