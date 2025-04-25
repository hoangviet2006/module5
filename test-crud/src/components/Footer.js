import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-4 pb-2 mt-5">
            <div className="container text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <h5 className="text-uppercase">Thông tin</h5>
                        <p>Ứng dụng quản lý sinh viên - React CRUD demo. Học là đỉnh!</p>
                    </div>

                    <div className="col-md-3 mb-3">
                        <h5 className="text-uppercase">Liên kết</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none">Trang chủ</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Về chúng tôi</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Liên hệ</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-3">
                        <h5 className="text-uppercase">Mạng xã hội</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none">Facebook</a></li>
                            <li><a href="#" className="text-white text-decoration-none">GitHub</a></li>
                            <li><a href="#" className="text-white text-decoration-none">YouTube</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center py-2 bg-secondary">
                © {new Date().getFullYear()} Bản quyền thuộc về bạn ❤️
            </div>
        </footer>
    );
}

export default Footer;