import {useEffect, useState} from "react";
import React from "react";
import {getAllOrder, deleteOrder, search, searchOption} from "../service/OrderService";
import {Link, useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Modal} from "react-bootstrap";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import '../Order.css'
import *as Yup from 'yup'
import {getAllProduct} from "../service/ProductService";

const OrderListComponent = () => {
    const [order, setOrder] = useState([]);
    const [product, setProduct] = useState([]);
    const [isShowModal, setIsShowModal] = useState(false);
    const [idDelete, setIdDelete] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const orderList = await getAllOrder();
            setOrder(orderList);
            const product= await getAllProduct();
            setProduct(product)
        }
        fetchData();
    }, [isLoading]);
    const handleShowModal = (id) => {
        setIsShowModal((preV) => !preV);
        setIdDelete(id)
    }
    const closeModal = () => {
        setIsShowModal((preV) => !preV);
    }
    const handleReload = () => {
        setIsLoading((preV) => !preV)
    }
    const handleDelete = async () => {
        await deleteOrder(idDelete);
        closeModal();
        toast.success('Xoá Đơn Hàng Thành Công!')
        handleReload();
    }
    const handleSearch = async (value) => {
        const searchDate = await search(value.start, value.end);
        console.log(searchDate);
        setOrder(searchDate);
    }
    const validateOption = Yup.object({
        product: Yup.string().required('Phải Chọn Sản Phẩm')
    })
    const handleSearchOppion =async (value) => {
       const searchProduct=await searchOption(value.product);
        setOrder(searchProduct);
    }

    return (
        <div className="container">
            <Link to={'/order/create'} className={'btn btn-sm btn-outline-primary'}>Thêm Mới Đơn Hàng </Link>
            <Formik initialValues={{
                start: '',
                end: ''
            }} onSubmit={handleSearch}>
                <Form>
                    <label>Thời Gian Từ</label>
                    <Field type={'date'} name={'start'}></Field>
                    <ErrorMessage style={{color: 'red'}} name={'start'} component={'div'}/>
                    <label>Đến</label>
                    <Field type={'date'} name={'end'}></Field>
                    <ErrorMessage style={{color: 'red'}} name={'end'} component={'div'}/>
                    <button className={'btn btn-sm btn-outline-primary'} type={'submit'}>Tìm Kiếm</button>
                </Form>
            </Formik>
            <Formik initialValues={{
                product: ''
            }} onSubmit={handleSearchOppion} validationSchema={validateOption}>
                <Form>
                    <label>Chọn Sản Phẩm Cần Tìm</label>
                    <Field as={'select'} name={'product'} type={'text'}>
                        <option value={''}>--- Chọn Sản Phẩm Cần Tìm ---</option>
                        {product&&product.map((product)=>(
                            <option value={product.id}>{product.nameProduct}</option>
                        ))}
                    </Field>
                    <ErrorMessage style={{color: 'red'}} name={'product'} component={'div'}/>
                    <button className={'btn btn-sm btn-outline-primary'} type={'submit'}>Tìm Kiếm</button>
                </Form>
            </Formik>

            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Ngày Mua</th>
                    <th>Tên Sản Phẩm</th>
                    <th>Giá Tiền</th>
                    <th>Số Lượng Mua</th>
                    <th>Tổng Tiền</th>
                    <th>Chỉnh Sửa</th>
                    <th>Xoá</th>
                </tr>
                </thead>
                <tbody>
                {order && order.map((o) => (
                    <tr>
                        <td>{o.id}</td>
                        <td>{o.dateOrder}</td>
                        <td>{o.product.nameProduct}</td>
                        <td>{o.product.price}</td>
                        <td>{o.quality}</td>
                        <td>{o.totalPrice}</td>
                        <td>
                            <Link className={'btn btn-sm btn-outline-primary'} to={'/order/update/' + o.id}> Chỉnh
                                Sửa</Link>
                        </td>
                        <td>
                            <button className={'btn btn-sm btn-outline-primary'}
                                    onClick={() => {
                                        handleShowModal(o.id)
                                    }}>
                                Xoá
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Modal show={isShowModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác Nhận Xoá Đơn Hàng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Bạn Có Muốn Xoá Đơn Hàng Có ID {idDelete} này không?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}> Huỷ</Button>
                    <Button variant="primary" onClick={handleDelete}>Xác Nhận Xoá</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default OrderListComponent;