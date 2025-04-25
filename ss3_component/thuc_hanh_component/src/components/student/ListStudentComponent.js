import React, {Component} from "react";
import {getStudent} from "../../service/StudentService";
import AddStudentComponent from "./AddStudentComponent";

class ListStudentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: [],
            showModal: false,
            addSusses: false
        }
    }


    componentDidMount() {
        console.log("didMount-------")
        /// gọi dữ liệu
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
                                <button>Xoá</button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </>
        )
    }
}

export default ListStudentComponent;