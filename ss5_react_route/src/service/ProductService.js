import axios from "axios";
export async function getAllProduct(page,size) {
    try {
        const response = await axios.get(`https://back-end-c11.onrender.com/products?_page=${page}&_limit=${size}`);
        const data= response.data
        const totalRecord=response.headers['x-total-count'];
        return {data,totalRecord}
    } catch (e) {
        console.log('lỗi ' + e)
    }
}

export async function createProduct(newProduct) {
    try {
        const response = await axios.post('https://back-end-c11.onrender.com/products', newProduct)
        console.log(response.data)
    } catch (e) {
        console.log('lỗi ' + e)
    }
}

export async function deleteProductById(id) {
    try {
        const response =await axios.delete('https://back-end-c11.onrender.com/products/'+id)
    }catch (e) {
        console.log('lỗi ' + e)
    }
}

export async function searchByName(name) {
    try {
        const response = await axios.get('https://back-end-c11.onrender.com/products?nameProduct_like='+name)
        console.log(response.data)
        return response.data

    }catch (e) {
        console.log('lỗi ' + e)
    }
}

export async function findById(id) {
    try {
        const response = await axios.get('https://back-end-c11.onrender.com/products/' + id);
        return response.data
    } catch (e) {
        console.log('lỗi ' + e)
    }
}

export async function updateById(id, product) {
    try {
        const response =await axios.put('https://back-end-c11.onrender.com/products/' + id, product)
        return response.data
    } catch (e) {
        console.log('lỗi ' + e)
    }
}