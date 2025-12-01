import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo/logo.png";

function Header() {
    return (
        <header className="header">
            <Link to="/" ><img src={logo} alt="logo" className="logo-image" /> </Link>

            <nav className="nav">
                <Link to="/">Trang chủ</Link>
                <Link to="/about">Giới thiệu</Link>
                <Link to="/services">Dịch vụ</Link>
                <Link to="/projectst">Dự án</Link>
                <Link to="/contact">Liên hệ</Link>
            </nav>

            <div className="space"></div>
        </header >
    );
}

export default Header;
