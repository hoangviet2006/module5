import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import {deleteProductById} from "../service/ProductService";
import {toast} from "react-toastify";
import {Modal,Button} from "react-bootstrap";


const ModalDelete = ({handleReloadPage,showModal, idDelete, closeModal}) => {
    const deleteStudent = async () => {
        await deleteProductById(idDelete);
        handleReloadPage();
        closeModal();
        toast.success('Xoá thành công!');
    }

    return (
        <Modal show={showModal} onHide={closeModal}> {/* onHide là dấu X ở góc */}
            <Modal.Header closeButton>
                <Modal.Title>Xoá Sản Phẩm</Modal.Title>
            </Modal.Header>
            <Modal.Body>Bạn có muốn xoá sản phẩm có id: {idDelete}</Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={()=>(closeModal())}>
                    Huỷ
                </Button>
                <Button variant="outline-danger" onClick={deleteStudent}>
                    Xoá
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default ModalDelete;