import {Component} from "react";
import {addStudent, getStudent} from "../../service/StudentService";

class AddStudentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student: {
                id: '',
                name: '',
                class: ''
            }
        }
        this.handelSave = this.handelSave.bind(this);
    }

    handelSave() {
        // gọi api thêm mới
        addStudent(this.state.student)
        console.log(getStudent())
        this.props.handleAddSusses();
    }

    handelOnchange(event) {
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState((preV) => ({
            ...preV,
            student: {
                ...preV.student,
                [event.target.name]: event.target.value
            }
        }))
    }

    render() {
        return (
            <>
                <form>
                    <label>Nhập id</label>
                    <input name={'id'} onChange={(event) => {
                        this.handelOnchange(event)
                    }}/>
                    <label>Nhập tên</label>
                    <input name='name' onChange={(event) => {
                        this.handelOnchange(event)
                    }}/>
                    <label>Nhập lớp</label>
                    <input name='class' onChange={(event) => {
                        this.handelOnchange(event)
                    }}/>
                    <button type="button" onClick={this.handelSave}>thêm mới</button>
                </form>
            </>
        )
    }
}

export default AddStudentComponent;