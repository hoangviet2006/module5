import React, {useEffect, useRef, useState} from "react";
import {createProduct} from "../service/ProductService";
import {useNavigate} from "react-router-dom";
import {toast} from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup'
import {getAllTypeProduct} from "../service/TypeProductService";



const CreateProductComponent = () => {
    const [product, setProduct] = useState({
        id: '',
        nameProduct: ''
    })
    const [typeProduct, setTypeProduct] = useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
            let typeProduct = await getAllTypeProduct();
            setTypeProduct(typeProduct)
        }
        fetchData();
    },[])
    const navigate = useNavigate() // dùng để chuyển hướng
    const handleSubmitProduct = async (value) => {
        const product = {
            ...value,
            typeProduct: JSON.parse(value.typeProduct)
        }
        await createProduct(product);
        toast.success('Thêm Mới thành công!');
        navigate('/products')
    }

    const handleValidate = Yup.object({
        nameProduct: Yup.string().required('tên sản phẩm không được để trống'),
        typeProduct: Yup.string().required('loại sản phẩm không được để trống')
    });

    return (
        <>
            <h3 style={{textAlign: 'center'}}> Thêm Mới Sản Phẩm</h3>
            <Formik initialValues={product} onSubmit={handleSubmitProduct} validationSchema={handleValidate}>
                <Form>
                    <div>
                        <label>Tên Sản Phẩm: </label>
                        <Field className={'form-control'} type={'text'} name={'nameProduct'}/>
                        <ErrorMessage style={{color: 'red'}} name={'nameProduct'} component={'div'}/>
                    </div>
                    <div>
                        <label>Loại Sản Phẩm: </label>
                        <Field as='select' name={'typeProduct'}>
                            <option value={''}>--- Chọn Loại Sản Phẩm ---</option>
                            {typeProduct&&typeProduct.map((tp)=> (
                                <option key={tp.id} value={JSON.stringify(tp)}>{tp.type}</option>
                            ))}
                        </Field>
                        <ErrorMessage style={{color: 'red'}} name={'typeProduct'} component={'div'}/>
                    </div>
                    <button className={'btn btn-outline-success'} type={'submit'}>Thêm Mới</button>
                </Form>
            </Formik>
        </>
    )
}
export default CreateProductComponent;