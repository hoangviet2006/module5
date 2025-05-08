import axios from "axios";

export async function getAllProduct(){
    try {
        const response=await axios.get('http://localhost:8080/product');
        return response.data;
    }catch (e) {
        console.log("Lỗi: "+e)
    }
}