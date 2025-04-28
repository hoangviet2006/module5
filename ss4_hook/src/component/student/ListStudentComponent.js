import {useEffect, useRef, useState} from "react";
import {getStudent, searchByName} from "../../service/studentListService";
import AddStudentComponent from "./AddStudentComponent";
import ModalDelete from "./ModalDelete";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import ModalUpdate from "./ModalUpdate";


const ListStudentComponent = () => {
    const [student, setStudent] = useState([]);
    const [reload, setReload] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [idDelete, setIdDelete] = useState(null);
    const [idUpdate, setIdUpdate] = useState(null);
    const [showModalUpdate, setShowModalUpdate] = useState(false);
    useEffect(() => {
        console.log("useEffect render")
        setStudent(() => (
            [
                ...getStudent()
            ]
        ))
        }, [reload]);


    const loading = () => {
        setReload((preV) => !preV)
    }

    const isShowModalDelete = (id) => {
        setIdDelete(id);
        setShowModalDelete((preV) => !preV)
    }
    const isShowModalUpdate = (id) => {
        setIdUpdate(id);
        setShowModalUpdate((preV) => !preV)
    }
    const searchNameRef = useRef()

    const handleSearchByName = () => {
        let nameSearch = searchNameRef.current.value;
        console.log('nameSearch:    ' + nameSearch)
        let listSearch = searchByName(nameSearch);
        console.log('listSearch:    ' + listSearch)
        setStudent(() => [
            ...listSearch
        ])
    }
    return (
        <>
            <AddStudentComponent loading={loading}/>
            {console.log('list render')}
            <form>
                <input ref={searchNameRef} placeholder={'Nhập tên cần tìm'}/>
                <button type={'button'} onClick={handleSearchByName}> Tìm kiếm</button>
            </form>
            <table>
                <thead>
                <tr>
                    <th>Stt</th>
                    <th>Id</th>
                    <th>Tên</th>
                    <th>Lớp</th>
                    <th>Xoá</th>
                    <th>Chỉnh Sửa</th>
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
                        <td>
                            <button onClick={() => isShowModalUpdate(s.id)}>Chỉnh Sửa</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
            <ModalDelete loading={loading} closeModal={isShowModalDelete} isShowModal={showModalDelete}
                         idDelete={idDelete}/>
            <ModalUpdate loading={loading} isShowModalUpdate={showModalUpdate} idUpdate={idUpdate}
                         closeModal={isShowModalUpdate}/>
        </>
    );
}
export default ListStudentComponent;