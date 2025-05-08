import axios from "axios";
let url='http://localhost:8080/orderProduct'
export async function getAllOrder(){
    try {
        const response =await axios.get(`${url}`);
        console.log('Danh Sách Order: '+response.data)
        return response.data
    }catch (e) {
        console.log('Lỗi: '+e)
    }
}
export async function createOrder(newOrder){
    try {
        const response =await axios.post(`${url}`,newOrder);
        console.log('Order Thêm Mới: '+response.data)
    }catch (e) {
        console.log('Lỗi: '+e)
    }
}
export async function findOrderByID(id){
    try {
        const response =await axios.get(`${url}/${id}`);
        console.log('Find OrderById: '+response.data);
        return response.data
    }catch (e) {
        console.log('Lỗi: '+e)
    }
}
export async function updateOrder(id,newOrder){
    try {
        const response =await axios.put(`${url}/${id}`,newOrder);
        console.log('Update Order: '+response.data);
    }catch (e) {
        console.log('Lỗi: '+e)
    }
}
export async function deleteOrder(id){
    try {
        const response =await axios.delete(`${url}/${id}`);
        console.log('Delete Order: '+response.data);
    }catch (e) {
        console.log('Lỗi: '+e)
    }
}
export async function search(start,end){
    try {
        const response =await axios.get(`http://localhost:8080/orderProduct?dateOrder_gte=${start}&dateOrder_lte=${end}`);
        return response.data
    }catch (e) {
        console.log('Lỗi: '+e)
    }
}
export async function searchOption(product){
    try {
        const response =await axios.get(`http://localhost:8080/orderProduct?product.id=${product}`);
        return response.data
    }catch (e) {
        console.log('Lỗi: '+e)
    }
}
