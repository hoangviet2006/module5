import axios from "axios";

export async function getAccount() {
    try {
        const response = await axios.get('https://back-end-c11.onrender.com/account');
        return response.data
    } catch (e) {
        console.log("lỗi: " + e)
    }
}

export async function checkAccount(account) {
    try {
        let acc = await getAccount()
        for (let i = 0; i < acc.length; i++) {
            if (account.username === acc[i].username && account.password === acc[i].password) {
                return acc[i]
            }
        }
        return null;

    } catch (e) {
        console.log("lỗi: " + e)
    }
}