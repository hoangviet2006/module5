let checkPrime = (num) => {
    let check = 0;
    for (let i = 2; i < num; i++) {
        if (num === 2) {
            console.log(num + " là số nguyên tố");
        }
        if (num % i === 0) check++;

    }
    if (check === 0) {
        console.log(num + " là số nguyên tố");
    } else {
        console.log(num + " k phai số nguyên tố");
    }
}
let arr = [1,2,3,6,8,19,30,4];
arr.forEach(a=>checkPrime(a));

