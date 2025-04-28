import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import {findById, getStudent, updateById} from "../../service/studentListService";
import {useEffect, useRef, useState} from "react";


const ModalUpdate = ({loading, isShowModalUpdate, closeModal, idUpdate}) => {

    const [studentUpdate, setStudentUpdate] = useState({
        id: -1,
        name:"",
        className:""
    })


    useEffect(() => {
        console.log('id chỉnh sửa '+idUpdate)
        const student = findById(idUpdate);

        console.log('đối tượng chỉnh sửa:   '+student.name)
        if (student != null) {
            setStudentUpdate(student)
        }
    }, [idUpdate]);
    const handleOnchangeUpdate = (event)=>{
        console.log(event.target.name)
        console.log(event.target.value)
        setStudentUpdate((prev)=>({
            ...prev,
            [event.target.name]: event.target.value,
        }))

    }

    const handleUpdate = () => {
        console.log(studentUpdate)
        updateById(studentUpdate.id,studentUpdate)
        console.log(getStudent())
        closeModal();
        loading()
    }
    if(!isShowModalUpdate){
        return null;
    }
    return (

        isShowModalUpdate &&
        <div className="modal fade show" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel"
             style={{display: 'block'}} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form>
                        <div className="modal-header">
                            <h5 className="modal-title" id="editModalLabel">Chỉnh sửa thông tin</h5>
                            <button onClick={closeModal} type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Đóng"></button>
                        </div>
                        <div className="modal-body">
                            <input type="hidden" value={studentUpdate.id}/>
                            <div className="mb-3">
                                <label>Tên</label>
                                <input  className="form-control" name={'name'} onChange={(event)=>{
                                    handleOnchangeUpdate(event)
                                }}  value={studentUpdate.name}/>
                            </div>
                            <div className="mb-3">
                                <label>className</label>
                                <input className="form-control" name={'className'} onChange={(event)=>{
                                    handleOnchangeUpdate(event)
                                }} value={studentUpdate.className}/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button onClick={closeModal} type="button" className="btn btn-secondary"
                                    data-bs-dismiss="modal">Hủy
                            </button>
                            <button onClick={handleUpdate} type="button" className="btn btn-primary">Lưu thay đổi</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ModalUpdate;