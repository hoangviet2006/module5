const  student=[
    {
    id: 1,
    name:'Hoàng Việt',
    class: 'C10'
    },
    {
        id:2,
        name: 'Mít Tơ Đạt ',
        class: 'C11'
    },
    {
        id:3,
        name: 'Chiến',
        class: 'C02'
    },
    {
        id: 4,
        name: 'Chung',
        class: 'C02'
    }
    ,
    {
        id:5,
        name: 'Mít Tơ Đạt ',
        class: 'C11'
    },
    {
        id:6,
        name: 'Chiến',
        class: 'C02'
    },
    {
        id: 7,
        name: 'Chung',
        class: 'C02'
    },
    {
        id:8,
        name: 'Mít Tơ Đạt ',
        class: 'C11'
    },
    {
        id:9,
        name: 'Chiến',
        class: 'C02'
    },
    {
        id: 10,
        name: 'Chung',
        class: 'C02'
    }
]
export function getStudent(){
    return student;
}
export function addStudent(newStudent){
        student.push(newStudent);
}