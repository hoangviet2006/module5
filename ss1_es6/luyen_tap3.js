







const getInfo = (student) => {
    const  {firstName="Quân",degree="NA",...rest}=student;
    console.log('firstName: '+firstName)
    console.log('degree: '+degree)
    console.log(rest)

}
let sv = {
    firstName: 'hoangviet',
    gender: 'male',
    languages: 'English',
    age: 45
}
getInfo(sv)


