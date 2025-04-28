import React, {useEffect, useState} from "react";
import {getAllProduct} from "../service/ProductService";
import {Link} from "react-router-dom";

const ProductListComponent = () => {
    const [product, setProduct] = useState([]);
    const [loadDing, setLoadDing] = useState(false)
    useEffect(() => {
        console.log('------use effect render------')
        setProduct(() => (
            [
                ...getAllProduct()
            ]
        ))
    }, [loadDing])
    const reLoad = () => {
        setLoadDing((preV) => !preV)
    }

    return (
        <>
            {console.log('-------list render------')}
            <h2 style={{textAlign: 'center'}}>Danh Sách Sản Phẩm</h2>
            <Link to={'/products/create'}>Thêm Mới Sản Phẩm</Link>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Mã Sản Phẩm</th>
                    <th>Tên Sản Phẩm</th>
                    <th>Số Lượng</th>
                    <th>Giá Thành</th>
                    <th>Xoá</th>
                </tr>
                </thead>
                <tbody>
                {product.map((p) =>
                    <tr key={p.id}>
                        <td>{p.id}</td>
                        <td>{p.codeProduct}</td>
                        <td>{p.nameProduct}</td>
                        <td>{p.quantity}</td>
                        <td>{p.price}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </>

    );
}
export default ProductListComponent;