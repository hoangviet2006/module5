import axios from "axios";
let url='http://localhost:8080/product'
export async function getAllProduct(){
    try {
        const response=await axios.get(`${url}`);
        return response.data
    }catch (e){
        console.log('Lỗi: '+e)
    }
}