import {Formik, Form, Field, ErrorMessage} from "formik";
import React, {useEffect, useState} from "react";
import {getAllProduct} from "../service/productService";
import {createOrderProduct} from "../service/orderService";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import * as Yup from 'yup'

const CreateOrderProduct = ()=>{
    const [product,setProduct]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        const fetData = async ()=>{
            const product= await getAllProduct();
            setProduct(product)
        }
        fetData();
    },[]);
    const handleCreateOrderProduct= async (value)=>{
        const partProduct=JSON.parse(value.product);
        const newOrder= {
            ...value,
            product: partProduct,
            totalPrice: value.quality*partProduct.price
        }
        await createOrderProduct(newOrder);
        navigate('/orderList');
        toast.success('Thêm Mới Đơn Hàng Thành Công');
    }
    const handleValidateOrderProduct= Yup.object({
        dateOrder:Yup.date().min(new Date(new Date().setHours(0, 0, 0, 0)),
            'Không được chọn ngày trong quá khứ'),
        quality:Yup.number().required('Số Lượng Không Được Để Trống')
            .min(1,"Số Lượng Ít Nhất Là 1"),
        product:Yup.string().required("Phải Chọn Sản Phẩm")
    })
    return(
        <>
            <h2>Thêm Mới Đơn Hàng</h2>
            <Formik initialValues={
                {
                    id:'',
                    dateOrder:'',
                    quality:'',
                    totalPrice:'',
                    product:''
                }
            } onSubmit={handleCreateOrderProduct} validationSchema={handleValidateOrderProduct}>
                <Form>
                    <label>Nhập Ngày Mua Hàng</label>
                    <Field name={'dateOrder'} type={'date'}></Field>
                    <ErrorMessage name={'dateOrder'} component={'div'} style={{color: 'red'}}/>
                    <Field as={'select'} name={'product'}>
                        <option value={''}>--- Chọn Sản Phẩm Muốn Mua ---</option>
                        {product && product.map((p) => (
                            <option key={p.id} value={JSON.stringify(p)}>{p.nameProduct}</option>
                        ))}
                    </Field>
                    <ErrorMessage name={'product'} component={'div'} style={{color: 'red'}}/>
                    <label>Nhập Số Lượng</label>
                    <Field name={'quality'} type={'number'}/>
                    <ErrorMessage name={'quality'} component={'div'} style={{color: 'red'}}/>
                    <button type={'submit'}>Thêm Mới</button>
                </Form>
            </Formik>
        </>
    );
}
export default CreateOrderProduct;