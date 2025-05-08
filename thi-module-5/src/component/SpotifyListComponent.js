import {useEffect, useState} from "react";
import {getAllSpotify, findById, searchMusic, updateSpotify} from "../service/SpotifyService";
import {data, Link} from "react-router-dom";
import {Button, Modal} from "react-bootstrap";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../Spotify.css'
import {toast} from "react-toastify";
const SpotifyListComponent =()=>{
    const [spotifyList,setSpotifyList]=useState([]);
    const [isShowModal,setIsShowModal]=useState(false);
    const [idUpdate,setIdUpdate]=useState(null);
    const [nameSong,setNameSong]=useState(null);
    const [isLoading,setIsLoading]=useState(false);
    const [detail,setDetail]=useState(null);
    useEffect(() => {
        const fetchData = async ()=>{
            const data =await getAllSpotify();
            setSpotifyList(data);
        }
        fetchData();
    }, [isLoading]);

    const handleShowModal = (id,nameSong) => {
        setIsShowModal((preV) => !preV);
        setIdUpdate(id);
        setNameSong(nameSong);
    }
    const closeModal = () => {
        setIsShowModal((preV) => !preV);
    }
    const handleReload = () => {
        setIsLoading((preV) => !preV)
    }
    const handleUpdate= async ()=>{
        const data= await findById(idUpdate);
        const newMusic = {
            ...data,
            statusMusic:"Công Khai"
        }
       await updateSpotify(idUpdate,newMusic);
        closeModal();
        handleReload();
        toast.success('Công Khai Bài Hát Thành Công')
    }

    const handleSearch = async (value) => {
        const searchProduct= await searchMusic(value.songName);
        setSpotifyList(searchProduct);
    }
    const handleDetail = (id)=>{
       const fetchData= async ()=>{
           const detailData = await findById(id);
           setDetail(detailData);
       }
       fetchData();
    }
    return(
        <div className="container">
            <h1 style={{textAlign:'center'}}>Danh Sách Bài Hát</h1>
            {detail &&  (
                <>
                    <h5><strong>Tên Bài Hát: </strong>{detail.songName}</h5>
                    <h5><strong>Ca Sĩ: </strong>{detail.singerName}</h5>
                    <button className={'btn btn-sm btn-outline-primary'} > Phát Nhạc </button>
                </>
            )}

            <Link to={'/spotify/create'} className={'btn btn-sm btn-outline-primary'}>Đăng Kí Bài Hát</Link>
            <Formik initialValues={{
                songName: ''
            }} onSubmit={handleSearch} >
                <Form>
                    <label>Nhập Tên Bài Hát Cần Tìm</label>
                    <Field name={'songName'} type={'text'}/>
                    <ErrorMessage style={{color: 'red'}} name={'songName'} component={'div'}/>
                    <button className={'btn btn-sm btn-outline-primary'} type={'submit'}>Tìm Kiếm</button>
                </Form>
            </Formik>
            <table>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên Bài Hát</th>
                    <th>Ca Sĩ</th>
                    <th>Thời Gian Phát</th>
                    <th>Số Lượt Thích</th>
                    <th>Trạng Thái</th>
                    <th>Chức Năng</th>
                </tr>
                </thead>
                <tbody>
                {spotifyList && spotifyList.map((sp) => (
                    <tr key={sp.id}>
                        <td>{sp.id}</td>
                        <td>
                            <span style={{ cursor: 'pointer' }} onClick={()=>{
                                handleDetail(sp.id)}}>
                                 {sp.songName}
                            </span>
                        </td>
                        <td>{sp.singerName}</td>
                        <td>{sp.playtime}</td>
                        <td>{sp.likes}</td>
                        <td>{sp.statusMusic}</td>
                        <td>
                            <button onClick={() => {
                                handleShowModal(sp.id,sp.songName)
                            }} className={'btn btn-sm btn-outline-primary'}>Công Khai
                            </button>
                        </td>
                    </tr>
                ))}
                {
                    spotifyList.length === 0 ?
                        ( <tr> <td colSpan={8}>Không tìm thấy kết quả tìm kiếm</td> </tr> )
                        :''
                }

                </tbody>
            </table>
            <Modal show={isShowModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác Nhận Công Khai</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Bạn Có Muốn Công Khai bài hát  "{nameSong}"   không?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}> Huỷ</Button>
                    <Button variant="primary" onClick={handleUpdate}>Xác Công Khai</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default SpotifyListComponent;