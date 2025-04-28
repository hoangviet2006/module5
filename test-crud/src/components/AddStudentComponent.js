import {useRef} from "react";
import {addStudent} from "../service/StudentList";
import React from "react";

const AddStudentComponent = ({loading}) => {
    const idRef = useRef()
    const nameRef = useRef()
    const classRef = useRef()


    const handelSave = () => {
        let newStudent = {
            id: idRef.current.value,
            name: nameRef.current.value,
            className: classRef.current.value
        }
        addStudent(newStudent);
        loading()
    }
    return (
        <>
            <h1>Thêm mới</h1>
            <form>
                <label>Nhập id</label>
                <input name={'id'} ref={idRef}/>
                <label>Nhập tên</label>
                <input ref={nameRef}/>
                <label>Nhập lớp</label>
                <input ref={classRef}/>
                <button type="button" onClick={handelSave}>thêm mới</button>
            </form>
        </>
    );
}
export default AddStudentComponent;