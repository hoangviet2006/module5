import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useEffect, useState} from "react";
import {findOrderByID, updateOrder} from "../service/OrderService";
import {useNavigate, useParams} from "react-router-dom";
import {getAllProduct} from "../service/ProductService";
import {toast} from "react-toastify";

const UpdateOrderComponent = ()=>{
    const [orderUpdate,setOrderUpdate]=useState([]);
    const [productList,setProductList]= useState([]);
    const {id} = useParams();
    useEffect(() => {
        const fetchData = async ()=>{
            const order= await findOrderByID(id);
            setOrderUpdate(()=>(
                {
                    ...order,
                    product:JSON.stringify(order.product)
                }
            ));
            const product=await getAllProduct();
            setProductList(product)
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
    const navigate=useNavigate();
    const handleSubmit= async (value)=>{
        const newOrder={
            ...value,
            product:JSON.parse(value.product),
            totalPrice:JSON.parse(value.product).price*value.quality
        }
       await updateOrder(id,newOrder)
        navigate('/order');
        toast.success('Chỉnh Sửa Thành Công!');
    }
    return(
        <>
            <Formik initialValues={
                orderUpdate
            } onSubmit={handleSubmit} validationSchema={handleValidateOrderProduct} enableReinitialize={true}>
                <Form>
                    <label>Ngày Mua Sản Phẩm</label>
                    <Field type={'date'} name={'dateOrder'}/>
                    <ErrorMessage name={'dateOrder'}  style={{color: 'red'}} component={'div'}/>
                    <Field as={'select'} type={'text'} name={'product'}>
                        {productList&&productList.map((product)=>(
                            <option key={product.id}  value={JSON.stringify(product)}>{product.nameProduct}</option>
                        ))}
                    </Field>
                    <ErrorMessage name="product" style={{color: 'red'}} component="div" />
                    <label>Số Lượng Sản Phẩm Muốn Mua</label>
                    <Field type={'number'} name={'quality'}/>
                    <ErrorMessage name={'quality'} style={{color: 'red'}} component={'div'}/>
                    <button className={'btn btn-sm btn-outline-primary'} type={'submit'}>Chỉnh Sửa</button>
                </Form>
            </Formik>

        </>
    );
}
export default UpdateOrderComponent;