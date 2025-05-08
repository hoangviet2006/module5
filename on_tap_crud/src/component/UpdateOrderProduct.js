import {useNavigate, useParams} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from "formik";
import React, {useEffect, useState} from "react";
import {findOrderProductById, updateOrderProduct} from "../service/orderService";
import * as Yup from 'yup'
import {getAllProduct} from "../service/productService";
import {toast} from "react-toastify";
const UpdateOrderProduct = () => {
    const [orderUpdate, setOrderUpdate] = useState(null);
    const [product, setProduct] = useState([]);
    const {id} = useParams();
    const navigate=useNavigate();
    useEffect(() => {
        const fetData = async () => {
            const newOrderUpdate = await findOrderProductById(id);
            setOrderUpdate(()=>({
                ...newOrderUpdate,
                product:JSON.stringify(newOrderUpdate.product)
            }));
            const product = await getAllProduct();
            setProduct(product);
        }
        fetData();
    }, []);
    const handleValidateOrderProduct = Yup.object({
        dateOrder: Yup.date().min(new Date(new Date().setHours(0, 0, 0, 0)),
            'Không được chọn ngày trong quá khứ'),
        quality: Yup.number().required('Số Lượng Không Được Để Trống')
            .min(1, "Số Lượng Ít Nhất Là 1"),
        product: Yup.string().required("Phải Chọn Sản Phẩm")
    })
    const handleUpdateOrderProduct = async (value) => {
        const partProduct=JSON.parse(value.product)
        const newProduct = {
            ...value,
            product: partProduct,
            totalPrice: partProduct.price*value.quality
        }

        await updateOrderProduct(id, newProduct);
        navigate('/orderList');
        toast.success('Chỉnh Sửa Thành Công!')
    }

    if(!orderUpdate){
        return ""
    }
    return (
        <>
            <h2>Thêm Mới Đơn Hàng</h2>
            <Formik initialValues={orderUpdate}
                    onSubmit={handleUpdateOrderProduct} validationSchema={handleValidateOrderProduct}>
            <Form>
                    <label>Nhập Ngày Mua Hàng</label>
                    <Field name={'dateOrder'} type={'date'}></Field>
                    <ErrorMessage name={'dateOrder'} component={'div'} style={{color: 'red'}}/>
                    <Field as={'select'} name={'product'}>
                        {product && product.map((p) => (
                            <option key={p.id} value={JSON.stringify(p)}>{p.nameProduct}</option>
                        ))}

                    </Field>
                    <ErrorMessage name={'product'} component={'div'} style={{color: 'red'}}/>
                    <label>Nhập Số Lượng</label>
                    <Field name={'quality'} type={'number'}/>
                    <ErrorMessage name={'quality'} component={'div'} style={{color: 'red'}}/>
                    <button type={'submit'}>Chỉnh Sửa</button>
            </Form>
            </Formik>
        </>
    );

}
export default UpdateOrderProduct;