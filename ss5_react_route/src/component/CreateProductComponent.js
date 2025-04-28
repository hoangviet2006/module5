import React, {useRef} from "react";
import {createProduct, getAllProduct} from "../service/ProductService";
import {useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';
const CreateProductComponent = () => {
    const idRef = useRef();
    const codeProductRef = useRef();
    const nameProductRef = useRef();
    const quantityProductRef = useRef();
    const priceProductRef = useRef();
    const navigate = useNavigate() // dùng để chuyển hướng
    const handleCreateProduct = () => {
        const newProduct = {
            id: idRef.current.value,
            codeProduct: codeProductRef.current.value,
            nameProduct: nameProductRef.current.value,
            quantity: quantityProductRef.current.value,
            price: priceProductRef.current.value,

        }
        createProduct(newProduct);
         /// thực hiện chuyển hướng trang danh sách sau khi thêm mới
        toast.success('Thêm Mới thành công!');
        navigate('/products')
    }

    return (
        <>
            <form>
                <input ref={idRef} placeholder={'Nhập Id sản phẩm'}/>
                <input ref={codeProductRef} placeholder={'Nhập mã sản phẩm'}/>
                <input ref={nameProductRef} placeholder={'Nhập tên sản phẩm'}/>
                <input ref={quantityProductRef} placeholder={'Nhập số lượng sản phẩm'}/>
                <input ref={priceProductRef} placeholder={'Nhập giá sản phẩm'}/>
                <button onClick={handleCreateProduct} type={'button'}>Thêm Mới</button>
            </form>
        </>
    )
}
export default CreateProductComponent;