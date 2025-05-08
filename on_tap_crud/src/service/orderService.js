import axios from 'axios'

export async function getAllOrderProduct(){
    try {
        const response=await axios.get('http://localhost:8080/orderProduct');
        return response.data

    }catch (e) {
        console.log("Lỗi: "+e);
    }
}
export async function createOrderProduct(newProduct){
    try {
        const response=await axios.post('http://localhost:8080/orderProduct',newProduct);
        console.log("Đơn Hàng Thêm Mới: "+ response);
    }catch (e) {
        console.log("Lỗi: "+e);
    }
}
export async function deleteOrderProduct(id){
    try {
        const response=await axios.delete('http://localhost:8080/orderProduct/'+id);
        console.log("Đơn Hàng Bị Xoá: "+ response);
    }catch (e) {
        console.log("Lỗi: "+e)
    }
}
export async function findOrderProductById(id){
    try {
        const response=await axios.get('http://localhost:8080/orderProduct/'+id);
        console.log("Find By ID: "+ response);
        return response.data
    }catch (e) {
        console.log("Lỗi: "+e)
    }
}
export async function updateOrderProduct(id,newProduct){
    try {
        const response=await axios.put('http://localhost:8080/orderProduct/'+id,newProduct);
        console.log("Đơn Hàng Được Chỉnh Sửa: "+ response);
        return response.data
    }catch (e) {
        console.log("Lỗi: "+e);
    }
}
export async function searchByDateOrder(start,end){
    try {
        const response=await axios.get(`http://localhost:8080/orderProduct?dateOrder_gte=${start}&dateOrder_lte=${end}`);
        console.log("Kết quả tìm kiếm: "+ response.data);
        return response.data
    }catch (e) {
        console.log("Lỗi: "+e);
    }
}
export async function top10Order(){
    try {
        const response=await axios.get('http://localhost:8080/orderProduct?_sort=totalPrice&_order=desc&_limit=10');
        console.log("Kết quả top 10: "+ response.data);
        return response.data
    }catch (e) {
        console.log("Lỗi: "+e);
    }
}