import {getAll}  from "../services/studentService";

import 'bootstrap/dist/css/bootstrap.min.css';
const StudentListComponent = ()=>{

    return (
        <>
            <table className={'table table-danger'}>
                <thead>
                <tr >
                    <th>STT</th>
                    <th>Công ty</th>
                    <th>Địa chỉ</th>
                    <th>Quốc gia</th>
                </tr>
                </thead>
                <tbody>
                {
                    getAll().map((s, i) =>
                        <tr key={s.id}>
                        <td>{i+1}</td>
                        <td>{s.company}</td>
                        <td>{s.contact}</td>
                        <td>{s.country}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </>
    )
}
export default StudentListComponent;