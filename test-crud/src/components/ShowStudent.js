import {getStudent} from "../service/studentList";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const ShowStudent = () => {

    return (
        <>
            <table className={'table table-active table-hover '}>
                <thead className={'table table-dark'}>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Tên</th>
                    <th>Lớp</th>
                    <th>Chỉnh Sửa</th>
                </tr>
                </thead>
                <tbody>
                {
                    getStudent().map((s, i) =>
                        <tr key={s.id}>
                            <td>{i + 1}</td>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>{s.class}</td>
                            <td>
                                <button className={'btn btn-sm btn-hover  btn-primary'}>Chỉnh Sửa</button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </>

    )
}


export default ShowStudent;