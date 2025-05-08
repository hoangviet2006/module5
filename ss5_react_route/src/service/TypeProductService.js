import axios from "axios";
export async function getAllTypeProduct(){
    try {
        const response = await axios.get('https://back-end-c11.onrender.com/typeProduct')
        return response.data
    }catch (e) {
        console.log('lỗi '+e)
    }
}

