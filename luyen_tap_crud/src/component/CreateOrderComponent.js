import {ErrorMessage, Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import {getAllProduct} from "../service/ProductService";
import *as Yup from 'yup'
import {createOrder} from "../service/OrderService";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
const CreateOrderComponent = () =>{
    const [productList,setProductList]= useState([]);
    const navigate=useNavigate();
    useEffect(() => {
        const fetchData =async ()=>{
            const product=await getAllProduct();
            setProductList(product);
        }
        fetchData();
    }, []);
    const handleValidateOrderProduct= Yup.object({
        dateOrder:Yup.date().min(new Date(new Date().setHours(0, 0, 0, 0)),
            'Không được chọn ngày trong quá khứ'),
        quality:Yup.number().required('Số Lượng Không Được Để Trống')
            .min(1,"Số Lượng Ít Nhất Là 1"),
        product:Yup.string().required("Phải Chọn Sản Phẩm")
    });
    const handleSubmit= async (value)=>{
        const newOrder={
            ...value,
            product:JSON.parse(value.product),
            totalPrice:JSON.parse(value.product).price*value.quality
        }
        await createOrder(newOrder);
        navigate('/order');
        toast.success('Mua Sản Phẩm Thành Công!')
    }
    return(
        <>
            <Formik initialValues={
            {
                id:'',
                dateOrder:'',
                quality:'',
                totalPrice:'',
                product:''
            }
            } onSubmit={handleSubmit} validationSchema={handleValidateOrderProduct} >
                <Form>
                    <label>Ngày Mua Sản Phẩm</label>
                    <Field type={'date'} name={'dateOrder'}/>
                    <ErrorMessage style={{color: 'red'}} name={'dateOrder'} component={'div'}/>
                    <Field as={'select'} type={'text'} name={'product'}>
                        <option value={''}>--- Chọn Loại Sản Phẩm Muốn Mua ---</option>
                        {productList&&productList.map((product)=>(
                            <option key={product.id}  value={JSON.stringify(product)}>{product.nameProduct}</option>
                        ))}
                    </Field>
                    <ErrorMessage name="product" style={{color: 'red'}} component="div" />
                    <label>Số Lượng Sản Phẩm Muốn Mua</label>
                    <Field type={'number'} name={'quality'}/>
                    <ErrorMessage name={'quality'} style={{color: 'red'}} component={'div'}/>
                    <button className={'btn btn-sm btn-outline-primary'} type={'submit'}>Mua</button>
                </Form>
            </Formik>
        </>
    );
}
export default CreateOrderComponent;