import {getAll}  from "../services/studentService";
import '../style/styleTable.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const StudentListComponent = ()=>{

    return (
        <>
            <table>
                <tr >
                    <th>STT</th>
                    <th>Công ty</th>
                    <th>Địa chỉ</th>
                    <th>Quốc gia</th>
                </tr>
                {
                    getAll().map((s, i) =>
                        <tr>
                        <td>{i+1}</td>
                        <td>{s.company}</td>
                        <td>{s.contact}</td>
                        <td>{s.country}</td>
                        </tr>
                    )
                }
            </table>
        </>
    )
}
export default StudentListComponent;