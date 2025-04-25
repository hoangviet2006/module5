import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import {logDOM} from "@testing-library/dom";
import {deleteById, getStudent} from "../../../service/StudentService";

class ModalDelete extends Component {
    constructor(props) {
        super(props);
    }

    handleDelete() {
        deleteById(this.props.deleteId);
        this.props.closeModal();
    }

    render() {
        return (
            this.props.showModal && <div className="modal show" tabIndex="-1" style={{display: 'block'}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here.{this.props.deleteId}</p>
                        </div>
                        <div className="modal-footer">
                            <button onClick={this.props.closeModal} type="button"
                                    className="btn btn-secondary">Close
                            </button>
                            <button type="button" onClick={this.handleDelete.bind(this)} className="btn btn-primary">Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalDelete;