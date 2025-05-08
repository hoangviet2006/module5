import {useEffect, useState} from "react";
import {top10Order} from "../service/orderService";

const Top10TotalPrime = ()=>{
    const [order,setOrder]=useState([]);
    useEffect(() => {
        const fetData= async ()=>{
            const top10=await top10Order();
            setOrder(top10)
        }
        fetData()
    }, []);
    return(
        <>
            <h1>Top 10 Đơn Hàng Có Tổng Tiền Cao Nhất</h1>
            {order&&order.map((order,index)=>(
                <>
                    <h5>Đơn Hàng Thứ: {index+1}</h5>
                    <span><strong>ID: </strong>{order.id}</span><br/>
                    <span><strong>Ngày Mua: </strong>{order.dateOrder}</span><br/>
                    <span><strong>Tên Sản Phẩm:</strong> {order.product.nameProduct}</span><br/>
                    <span><strong>Giá Sản Phẩm:</strong> {order.product.price}</span><br/>
                    <span><strong>Số Lượng: </strong>{order.quality}</span><br/>
                    <span><strong>Tổng Tiền: </strong>{order.totalPrice}</span><br/>
                </>

            ))}
        </>
    );
}
export default Top10TotalPrime;