import {startTransition, useEffect, useState} from "react";
import {getAllOrderProduct, searchByDateOrder} from "../service/orderService";
import {deleteOrderProduct} from "../service/orderService";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {Modal,Button} from "react-bootstrap";
import {toast} from "react-toastify";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup'
const OrderList = ()=>{
    const [order,setOrder]=useState([]);
    const [idDelete,setIdDelete]= useState(null);
    const [isShowModal,setIsShowModal]=useState(false)
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        const fetData= async ()=>{
            const orderProduct =await getAllOrderProduct();
            setOrder(orderProduct);
        }
        fetData();
    },[loading])
    const handleShowModal=(id)=>{
        setIdDelete(id);
        setIsShowModal((preV)=>!preV);
    }
    const closeModal=()=>{
        setIsShowModal((preV)=>!preV)
    }
    const reload=()=>{
        setLoading((preV)=>!preV)
    }
    const handleDelete= async ()=>{
       await deleteOrderProduct(idDelete);
       closeModal();
       reload();
       toast.success('Xoá  Đơn Hàng Thành Công!')
    }
    const validateSearch = Yup.object({
        start: Yup.string()
            .required('Không được để trống')
            .matches(/^\d{4}-\d{2}-\d{2}$/, 'Ngày không hợp lệ'),

        end: Yup.string()
            .required('Không được để trống')
            .matches(/^\d{4}-\d{2}-\d{2}$/, 'Ngày không hợp lệ')
            .test('is-greater', 'Ngày kết thúc phải sau hoặc bằng ngày bắt đầu', function (value) {
                const { start } = this.parent;
                return !start || !value || new Date(value) >= new Date(start);
            })
    });
    const handleSearch=(value)=>{
        const fetData= async ()=>{
            const search=await searchByDateOrder(value.start,value.end);
            setOrder(search);
            console.log("Danh Sách Tìm Kiếm: "+search)
        }
        fetData();
    }


    return(
      <>
          <h2>Danh Sách Đơn Hàng</h2>
          <Link to={'/orderList/createOrderProduct'} className={'btn btn-outline-success btn-sm'}>Thêm Mới Đơn Hàng</Link>
          <Link to={'/orderList/top10'} className={'btn btn-outline-success btn-sm'}>Top 10</Link>
          <Formik initialValues={{
              start:'',
              end:''
          }} onSubmit={handleSearch} validationSchema={validateSearch}>
              <Form>
                  <label>Nhập Thời Gian Trong Khoản Từ</label>
                  <Field name={'start'} type={'date'}></Field>
                  <ErrorMessage name={'start'} component={'div'}></ErrorMessage>
                  <label> Đến</label>
                  <Field name={'end'} type={'date'}></Field>
                  <ErrorMessage name={'end'}  component={'div'}></ErrorMessage>
                  <button type={'submit'}>Tìm Kiếm</button>
              </Form>
          </Formik>
          <table className={'table table-hover table-primary'}>
              <thead className={'table table-danger'}>
              <tr>
                  <th>Id</th>
                  <th>Ngày Mua</th>
                  <th>Tên Sản Phẩm</th>
                  <th>Đơn Giá Sản Phẩm</th>
                  <th>Số Lượng </th>
                  <th>Tổng tiền</th>
                  <th>Xoá Đơn Hàng</th>
                  <th>Chỉnh Sửa Đơn Hàng</th>
              </tr>
              </thead>
              <tbody>
              {order&&order.map((o)=>(
                  <tr key={o.id}>
                      <td>{o.id}</td>
                      <td>{o.dateOrder}</td>
                      <td>{o.product.nameProduct}</td>
                      <td>{o.product.price}</td>
                      <td>{o.quality}</td>
                      <td>{o.totalPrice}</td>
                      <td>
                          <button className={'btn btn-sm btn-outline-success'} onClick={()=>(
                              handleShowModal(o.id))}>
                              Xoá Đơn Hàng</button>
                      </td>
                      <td>
                          <Link className={'btn btn-sm btn-outline-success'} to={'/orderList/updateOrderProduct/'+o.id}>Chỉnh Sửa Đơn Hàng</Link>
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
      </>
    );
}
export default OrderList;