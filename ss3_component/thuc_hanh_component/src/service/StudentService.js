let studentList = [{
    id:1,
    name:'Hoàng Việt1',
    class: 'C10'
},{
    id:2,
    name:'Hoàng Việt2',
    class: 'C10'
},{
    id:3,
    name:'Hoàng Việt3',
    class: 'C10'
},{
    id:4,
    name:'Hoàng Việt4',
    class: 'C10'
},{
    id:5,
    name:'Hoàng Việt5',
    class: 'C10'
}]
export function getStudent(){
    // gọi api lấy dữ liệu
    return studentList;
}
export function addStudent(newStudent){
    // gọi api thêm mới
    studentList.push(newStudent);
}
export function deleteById(id){
    // gọi api thêm mới
 studentList   = studentList.filter((s)=>s.id!=id);
}