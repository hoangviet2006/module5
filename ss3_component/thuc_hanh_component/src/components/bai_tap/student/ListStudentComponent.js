import React, {Component} from "react";
import {getStudent} from "../../../service/StudentService";
import AddStudentComponent from "./AddStudentComponent";
import ModalDelete from "./ModalDelete";

class ListStudentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: [],
            showModal: false,
            addSusses: false,
            deleteId: 0,
        }
    }
    closeModal(){
        this.setState((preV)=>({
            ...preV,
            studentList: [...getStudent()],
            showModal:!preV.showModal
        }))
    }


    componentDidMount() {
        console.log("didMount-------")
        // gọi dữ liệu
        this.setState((preS) => ({
            ...preS,
            studentList: [...getStudent()]
        }))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("updateMount=====")
        if (prevState.addSusses !== this.state.addSusses) {
            this.setState((preS) => ({
                ...preS,
                studentList: [...getStudent()],
                addSusses:false
            }))
        }
    }

    handleAddSusses() {
        this.setState((preV) => ({
            ...preV,
            addSusses: true
        }))
    }
    handleShowModal(id){
        console.log(id)
        this.setState((preV)=>({
            ...preV,
            deleteId : id,
            showModal:!preV.showModal,
        }))
    }

    render() {
        return (
            <>
                <AddStudentComponent handleAddSusses={this.handleAddSusses.bind(this)}/>
                <table>
                    <thead>
                    <tr>
                        <th>Stt</th>
                        <th>Id</th>
                        <th>Tên</th>
                        <th>Lớp</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.studentList && this.state.studentList.map((s, i) =>
                        <tr key={s.id}>
                            <td>{i + 1}</td>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>{s.class}</td>
                            <td>
                                <button onClick={() => this.handleShowModal(s.id)}>
                                    Xoá</button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
                <ModalDelete closeModal={this.closeModal.bind(this)} deleteId ={this.state.deleteId}  showModal = {this.state.showModal}/>
            </>
        )
    }
}

export default ListStudentComponent;