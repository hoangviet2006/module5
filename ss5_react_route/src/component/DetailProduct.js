import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {findById} from "../service/ProductService";

const DetailProduct = () => {
    const {id} = useParams();
    const [detail, setDetail] = useState({
    });
    useEffect(() => {
        const fetData = async () => {
            const product = await findById(id);
            console.log("Sản phẩm:", product)
            setDetail(product);
        }
        fetData();

    }, []);
    return (
        <>
            <h3>Chi tiết sản phẩm</h3><br/>
            <span>ID : {detail&&detail.id}</span><br/>
            <span>Tên Sản Phẩm : {detail&&detail.nameProduct}</span><br/>
            <span>Loại Sản Phẩm : {detail?.typeProduct?.type}</span><br/>
        </>
    );
}
export default DetailProduct;