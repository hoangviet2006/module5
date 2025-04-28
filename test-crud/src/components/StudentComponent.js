import {useEffect, useState} from "react";
import {getAllStudent} from "../service/StudentList";
import React from "react";
import AddStudentComponent from "./AddStudentComponent";
import ModalDelete from "./ModalDelete";

const StudentComponent = () => {
    const [student, setStudent] = useState([])
    const [reload, setReload] = useState(false);
    const [isShowModal, setIsShowModal] = useState(false);
    const [idDelete, setIdDelete] = useState(null);
    useEffect(() => {
        setStudent(() => (
            [
                ...getAllStudent()
            ]
        ))
    }, [reload])
    const loading = ()=>{
        setReload((preV)=>!preV)
    }

    const isShowModalDelete = (id) => {
        setIdDelete(id);
        setIsShowModal((preV)=>!preV);
    }
    return (
        <> <AddStudentComponent loading={loading}/>
            <table>
                <thead>
                <tr>
                    <th>Stt</th>
                    <th>Id</th>
                    <th>Tên</th>
                    <th>Lớp</th>
                    <th>Xoá</th>
                </tr>
                </thead>
                <tbody>
                {student && student.map((s, i) =>
                    <tr key={s.id}>
                        <td>{i + 1}</td>
                        <td>{s.id}</td>
                        <td>{s.name}</td>
                        <td>{s.className}</td>
                        <td>
                            <button onClick={() => isShowModalDelete(s.id)}>
                                Xoá
                            </button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
            <ModalDelete closeModal={isShowModalDelete} idDelete={idDelete} loading={loading} showModal={isShowModal}/>
        </>
    );
}
export default StudentComponent;