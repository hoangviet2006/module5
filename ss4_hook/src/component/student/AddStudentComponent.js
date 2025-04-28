import {useRef, useState} from "react";
import {addStudent, getStudent} from "../../service/studentListService";

const AddStudentComponent = ({loading}) => {
        // console.log('-----add render')
    const idRef = useRef();
    const nameRef = useRef();
    const classRef = useRef();


    const handelSave = () => {
        const newStudent ={
            id: idRef.current.value,
            name: nameRef.current.value,
            className: classRef.current.value
        }
        addStudent(newStudent);
        console.log(getStudent());
        loading();
    }
    return (
        <>
            <form>
                <label>Nhập id</label>
                <input name={'id'} ref={idRef}/>
                <label>Nhập tên</label>
                <input ref={nameRef} />
                <label>Nhập lớp</label>
                <input ref={classRef} />
                <button type="button" onClick={handelSave}>thêm mới</button>
            </form>
        </>
    );
}
export default AddStudentComponent;