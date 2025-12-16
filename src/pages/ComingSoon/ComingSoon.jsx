import { Link, useParams, useLocation } from "react-router-dom";
import "./ComingSoon.css";

const toTitle = (s = "") =>
    s
        .replace(/[-_]+/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

const ComingSoon = () => {
    const { feature } = useParams();
    const { pathname } = useLocation();
    const name = toTitle(feature || "Feature");

    return (
        <div className="cs">
            <div className="container cs__wrap">
                <p className="cs__kicker">COMING SOON</p>
                <h1 className="cs__title">{name}</h1>
                <p className="cs__sub">
                    Trang <b>{name}</b> đang được mô phỏng/định hướng phát triển ở giai đoạn tiếp theo.
                    Hiện tại website tập trung vào các module cốt lõi cho đồ án.
                </p>

                <div className="cs__path">
                    Current route: <span className="cs__mono">{pathname}</span>
                </div>

                <div className="cs__actions">
                    <Link to="/" className="btn btn-primary">Back home</Link>
                    <Link to="/services" className="btn btn-secondary">Services</Link>
                    <Link to="/projects" className="btn btn-secondary">Projects</Link>
                    <Link to="/contact" className="btn btn-secondary">Contact</Link>
                </div>

                <p className="cs__note">
                    *Module này có thể triển khai khi tích hợp backend (API + database) hoặc CMS.
                </p>
            </div>
        </div>
    );
};

export default ComingSoon;
