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
    name: 'Hoàng Việt5',
    className: 'C10'
}]

export function getStudent() {
    // gọi api lấy dữ liệu
    return studentList;
}

export function addStudent(newStudent) {
    // gọi api thêm mới
    studentList.push(newStudent);
}

export function deleteById(id) {
    // gọi api thêm mới
    studentList = studentList.filter((s) => s.id !== id);
}

export function updateById(id, student) {
    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].id == id) {
            studentList[i]= student
            break
        }
    }
    return true;
}

export function findById(id) {
    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].id == id) {
            return studentList[i];
        }
    }
    return studentList[0];
}

export function searchByName(name) {
    return studentList.filter((s) => s.name.includes(name));
}