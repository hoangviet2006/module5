let studentList = [{
    id: 1,
    name: 'Hoàng Việt1',
    className: 'C10'
}, {
    id: 2,
    name: 'Hoàng Việt2',
    className: 'C10'
}, {
    id: 3,
    name: 'Hoàng Việt3',
    className: 'C10'
}, {
    id: 4,
    name: 'Hoàng Việt4',
    className: 'C10'
}, {
    id: 5,
    name: 'Hoàng Việt55',
    className: 'C10'
}]

export function getAllStudent() {
    return studentList;
}

export function addStudent(newStudent) {
    return studentList.push(newStudent)
}

export function deleteById(id) {
    return studentList=studentList.filter((s) => s.id != id)
}