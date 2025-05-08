import React, {useEffect, useState} from "react";
import {findById, getAllProduct, searchByName} from "../service/ProductService";
import {Link, useNavigate} from "react-router-dom";
import ModalDelete from "./ModalDelete";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Field, Form, Formik} from "formik";
import {Button} from "react-bootstrap";
import {useSelector} from "react-redux";

const ProductListComponent = () => {
    const [product, setProduct] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [idDelete, setIdDelete] = useState(null);
    const [loading, setLoading] = useState(false);
    const [size, setSize] = useState(2);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    useEffect(() => {
        console.log('------use effect render------')
        // sử dụng async/await
        const fetchData = async () => {
            const {data,totalRecord} = await getAllProduct(page,size);
            setProduct(data);
            setTotalPage(()=>Math.ceil(totalRecord/size));
        }
        fetchData();
        // sử dụng promise
        // getAllProduct().then((list)=>{
        //     setProduct(list)
        // })
        //     .catch((error)=>{
        //         console.log("Lỗi: "+ error)
        //     })
    }, [loading,page])
    const handleReloadPage = () => {
        setLoading((preV) => !preV)
    }
    const handleShowModal = (id) => {
        setShowModal((preV) => !preV)
        setIdDelete(id)
    }
    const handleSearch = (value) => {
        let nameSearch = value.nameProduct;
        const fetData = async () => {
            let search = await searchByName(nameSearch);
            setProduct(search)
        }
        fetData();
    }
    const account = useSelector((state)=>state.user.account);
    const handleNextPage=()=>{
        if (page<totalPage){
            setPage((preV)=>preV+1)
        }

    }
    const handlePrePage=()=>{
        if (page>1){
            setPage((preV)=>preV-1)
        }

    }

    return (
        <>
            {console.log('-------list render------')}
            <h2 style={{textAlign: 'center'}}>Danh Sách Sản Phẩm</h2>
            <div style={{display: 'flex'}}>
                {account && account.role==="admin"&& (
                    <>
                        <Link className={'btn btn-sm btn-outline-success btn-hover'}
                              to={'/products/create'}>
                            Thêm Mới Sản Phẩm</Link>
                    </>
                )}

                <Formik initialValues={{nameProduct: ''}} onSubmit={handleSearch}>
                    <Form>
                        <Field placeholder={'Nhập tên sản phẩm cần tìm'} name={'nameProduct'} type={'text'}></Field>
                        <button type={'submit'} className={'btn btn-sm btn-outline-success btn-hover'}>Tìm Kiếm</button>
                    </Form>
                </Formik>
            </div>

            <table className={'table table-primary table-sm'}>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Tên Sản Phẩm</th>
                    <th>Xoá</th>
                    <th>Chi tiết</th>
                    <th>Chỉnh Sửa</th>
                </tr>
                </thead>
                <tbody>
                {product && product.map((p) =>
                    <tr key={p.id}>
                        <td>{p.id}</td>
                        <td>{p.nameProduct}</td>
                        <td>
                            {account && account.role==="admin"&& (
                                <>
                                    <Button variant="outline-success"
                                            onClick={() =>
                                                handleShowModal(p.id)}>
                                        Xoá
                                    </Button>
                                </>
                            )}
                        </td>
                        <td>
                            <Link className={'btn btn-sm btn-outline-success btn-hover'}
                                  to={'/products/detail/' + p.id}>
                                  Chi tiết
                            </Link>
                        </td>
                        <td>
                            {account &&   account.role==="admin"&& (
                                <>
                                    <Link className={'btn btn-sm btn-outline-success btn-hover'}
                                          to={'/products/update/' + p.id}>
                                        Chỉnh Sửa
                                    </Link>
                                </>
                            )}
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
            <div style={{justifyContent:'center', textAlign:'center'}}>
                <button className={'btn btn-sm btn-outline-success btn-hover'} onClick={()=>(handlePrePage())}>Trang Trước</button>
                {[...new Array(totalPage)].map((p, i) => (
                    <button className={`btn btn-sm btn-outline-success btn-hover ${page === i + 1 ? 'active' : ''}`}
                                    onClick={() => (setPage(i + 1))}>{i + 1}</button>
                ))}
                <button className={'btn btn-sm btn-outline-success btn-hover'} onClick={()=>(handleNextPage())}>Trang Sau</button>
            </div>
            <ModalDelete handleReloadPage={handleReloadPage}
                         idDelete={idDelete}
                         showModal={showModal}
                         closeModal={handleShowModal}
            />
        </>
    );
}
export default ProductListComponent;