import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="nf">
            <div className="container nf__wrap">
                <p className="nf__code">404</p>
                <h1 className="nf__title">Page not found</h1>
                <p className="nf__sub">
                    Trang bạn truy cập không tồn tại hoặc đã bị thay đổi đường dẫn.
                    (Website mô phỏng phục vụ đồ án)
                </p>

                <div className="nf__actions">
                    <Link to="/" className="btn btn-primary">Back home</Link>
                    <Link to="/services" className="btn btn-secondary">View services</Link>
                    <Link to="/contact" className="btn btn-secondary">Contact</Link>
                </div>

                <div className="nf__hint">
                    Gợi ý: kiểm tra lại URL hoặc dùng menu để điều hướng.
                </div>
            </div>
        </div>
    );
};

export default NotFound;
