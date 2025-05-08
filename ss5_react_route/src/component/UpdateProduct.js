import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useParams} from "react-router-dom";
import {findById, updateById} from "../service/ProductService";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {getAllTypeProduct} from "../service/TypeProductService";

const UpdateProduct = () => {
    const [productUpdate, setProductUpdate] = useState({});
    const [typeProductUpdate,setTypeProductUpdate] = useState([])
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
       const fetData = async ()=>{
           const product = await findById(id);
           setProductUpdate(()=>({
               ...product,
               typeProduct:product.typeProduct.id
           }))
           const allTypeProduct = await getAllTypeProduct();
           setTypeProductUpdate(allTypeProduct);
       }
       fetData();
    }, []);

    const handleUpdateProduct = async (value) => {

        const product = {
            ...value,
            typeProduct: typeProductUpdate.find((tp)=>tp.id===parseInt(value.typeProduct))
        }
        await updateById(id, product)

        navigate('/products');
        toast.success('Chỉnh Sửa Thành Công!')
    }



    const handleValidate = Yup.object({
        nameProduct: Yup.string().required('tên sản phẩm không được để trống'),
       })
    return (
        <>

            <h3>Chỉnh Sửa Sản Phẩm</h3>
            <Formik initialValues={productUpdate} onSubmit={handleUpdateProduct} validationSchema={handleValidate}  enableReinitialize={true}>
     {/*enableReinitialize={true} bắt buộc cần có cái này vì nó sẽ cập  nhật lại form mỗi khi render dữ useEffect thay đổi nếu không có sẽ nhận giá tri rỗng ban đầu và không cập nhật lại*/}
                <Form>
                    <div>
                        <Field className={'form-control'} type={'hidden'}  name={'id'}/>
                        <ErrorMessage style={{color: 'red'}} name={'id'} component={'div'}/>
                    </div>
                    <div>
                        <label>Tên Sản Phẩm: </label>
                        <Field className={'form-control'}  type={'text'}
                               name={'nameProduct'}/>
                        <ErrorMessage style={{color: 'red'}} name={'nameProduct'} component={'div'}/>
                    </div>
                    <div>
                        <label>Loại Sản Phẩm: </label>
                        <Field as={'select'} name={'typeProduct'} >
                            {typeProductUpdate&& typeProductUpdate.map((tp)=>(
                                <option  value={tp.id}>{tp.type}</option>
                            ))}
                        </Field>
                        <ErrorMessage style={{color: 'red'}} name={'typeProduct'} component={'div'}/>
                    </div>
                    <button className={'btn btn-outline-success'} type={'submit'}>Chỉnh Sửa</button>
                </Form>
            </Formik>
        </>
    );

}
export default UpdateProduct;