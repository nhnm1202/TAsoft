import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const [open, setOpen] = useState(false);              // mobile menu
    const [openDropdown, setOpenDropdown] = useState(""); // "services" | "solutions" | "resources" | "company" | ""

    const dropdownRef = useRef(null);

    const closeAll = () => {
        setOpen(false);
        setOpenDropdown("");
    };

    const toggleDropdown = (key) => {
        setOpenDropdown((prev) => (prev === key ? "" : key));
    };

    // close dropdown when clicking outside
    useEffect(() => {
        const onDocClick = (e) => {
            if (!dropdownRef.current) return;
            if (!dropdownRef.current.contains(e.target)) setOpenDropdown("");
        };
        document.addEventListener("mousedown", onDocClick);
        return () => document.removeEventListener("mousedown", onDocClick);
    }, []);

    return (
        <header className="site-header">
            <div className="container header-inner">
                <NavLink to="/" className="brand" onClick={closeAll} aria-label="TAsoft Home">
                    <span className="brand-mark" aria-hidden="true" />
                    <span className="brand-name">TAsoft</span>
                </NavLink>

                {/* Desktop nav */}
                <nav className="nav" aria-label="Primary" ref={dropdownRef}>
                    <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                        Home
                    </NavLink>

                    {/* Services dropdown (slug thật của bạn) */}
                    <div className="nav-dropdown">
                        <button
                            type="button"
                            className={`nav-link nav-trigger ${openDropdown === "services" ? "active" : ""}`}
                            aria-haspopup="menu"
                            aria-expanded={openDropdown === "services"}
                            onClick={() => toggleDropdown("services")}
                        >
                            Dịch vụ <span className={`chev ${openDropdown === "services" ? "up" : ""}`} aria-hidden="true">▾</span>
                        </button>

                        <div className={`menu ${openDropdown === "services" ? "open" : ""}`} role="menu">
                            <NavLink to="/services" className="menu-item" onClick={closeAll} role="menuitem">
                                <div className="menu-title">Tất cả</div>
                                <div className="menu-desc">Tổng quan dịch vụ TAsoft</div>
                            </NavLink>

                            <NavLink to="/services/phat-trien-website" className="menu-item" onClick={closeAll} role="menuitem">
                                <div className="menu-title">Phát triển Web</div>
                                <div className="menu-desc">Website doanh nghiệp, landing, CMS</div>
                            </NavLink>

                            <NavLink to="/services/ung-dung-di-dong" className="menu-item" onClick={closeAll} role="menuitem">
                                <div className="menu-title">ứng dụng di động</div>
                                <div className="menu-desc">Android/iOS</div>
                            </NavLink>

                            <NavLink to="/services/co-so-du-lieu" className="menu-item" onClick={closeAll} role="menuitem">
                                <div className="menu-title">Cơ sở dữ liệu</div>
                                <div className="menu-desc">Thiết kế & tối ưu dữ liệu</div>
                            </NavLink>

                            <NavLink to="/services/ai-tu-dong-hoa" className="menu-item" onClick={closeAll} role="menuitem">
                                <div className="menu-title">AI & Tự động hóa</div>
                                <div className="menu-desc">Chatbot</div>
                            </NavLink>
                        </div>
                    </div>

                    <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                        Dự án
                    </NavLink>

                    {/* Resources */}
                    <div className="nav-dropdown">
                        <button
                            type="button"
                            className={`nav-link nav-trigger ${openDropdown === "resources" ? "active" : ""}`}
                            aria-haspopup="menu"
                            aria-expanded={openDropdown === "resources"}
                            onClick={() => toggleDropdown("resources")}
                        >
                            Tài nguyên <span className={`chev ${openDropdown === "resources" ? "up" : ""}`} aria-hidden="true">▾</span>
                        </button>

                        <div className={`menu ${openDropdown === "resources" ? "open" : ""}`} role="menu">
                            <NavLink to="/projects" className="menu-item" onClick={closeAll} role="menuitem">
                                <div className="menu-title">Dự án tiêu biểu</div>
                                <div className="menu-desc"></div>
                            </NavLink>

                            <NavLink to="/coming-soon/blog" className="menu-item" onClick={closeAll} role="menuitem">
                                <div className="menu-title">Blog</div>
                                <div className="menu-desc">Bài viết & kiến thức</div>
                            </NavLink>

                            <NavLink to="/privacy" className="menu-item" onClick={closeAll} role="menuitem">
                                <div className="menu-title">Chính sách bảo mật</div>
                                {/* <div className="menu-desc">Chính sách bảo mật</div> */}
                            </NavLink>

                            <NavLink to="/terms" className="menu-item" onClick={closeAll} role="menuitem">
                                <div className="menu-title">Điều khoản sử dụng</div>
                                {/* <div className="menu-desc">Điều khoản sử dụng</div> */}
                            </NavLink>
                        </div>
                    </div>

                    {/* Company */}
                    <div className="nav-dropdown">
                        <button
                            type="button"
                            className={`nav-link nav-trigger ${openDropdown === "company" ? "active" : ""}`}
                            aria-haspopup="menu"
                            aria-expanded={openDropdown === "company"}
                            onClick={() => toggleDropdown("company")}
                        >
                            Công ty <span className={`chev ${openDropdown === "company" ? "up" : ""}`} aria-hidden="true">▾</span>
                        </button>

                        <div className={`menu ${openDropdown === "company" ? "open" : ""}`} role="menu">
                            <NavLink to="/about" className="menu-item" onClick={closeAll} role="menuitem">
                                <div className="menu-title">Giới thiệu TAsoft</div>
                                {/* <div className="menu-desc">Giới thiệu TAsoft</div> */}
                            </NavLink>

                            <NavLink to="/coming-soon/clients" className="menu-item" onClick={closeAll} role="menuitem">
                                <div className="menu-title">Khách hàng & đối tác</div>
                                {/* <div className="menu-desc">Khách hàng & đối tác</div> */}
                            </NavLink>
                        </div>
                    </div>

                </nav>

                <div className="actions">
                    <NavLink to="/coming-soon/careers" className="btn btn-primary" onClick={closeAll}>
                        Tuyển dụng
                    </NavLink>

                    <button
                        type="button"
                        className="burger"
                        onClick={() => setOpen((v) => !v)}
                        aria-label="Toggle menu"
                        aria-expanded={open}
                    >
                        <span className="burger-line" />
                        <span className="burger-line" />
                        <span className="burger-line" />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={open ? "mobile open" : "mobile"} onClick={closeAll} role="presentation">
                <div className="mobile-panel" onClick={(e) => e.stopPropagation()} role="presentation">
                    <div className="mobile-head">
                        <span className="mobile-title">Menu</span>
                        <button className="mobile-close" onClick={closeAll} aria-label="Close menu">✕</button>
                    </div>

                    <div className="mobile-links">
                        <p className="mobile-group">Main</p>
                        <NavLink to="/" end className="mobile-link" onClick={closeAll}>Trang chủ</NavLink>
                        <NavLink to="/services" className="mobile-link" onClick={closeAll}>Dịch vụ</NavLink>
                        <NavLink to="/projects" className="mobile-link" onClick={closeAll}>Dự án</NavLink>

                        <p className="mobile-group">Company</p>
                        <NavLink to="/about" className="mobile-link" onClick={closeAll}>About</NavLink>
                        <NavLink to="/coming-soon/clients" className="mobile-link" onClick={closeAll}>Khách hàng</NavLink>

                        <p className="mobile-group">Tài nguyên</p>
                        <NavLink to="/coming-soon/blog" className="mobile-link" onClick={closeAll}>Blog</NavLink>
                        <NavLink to="/privacy" className="mobile-link" onClick={closeAll}>Chính sách bảo mật</NavLink>
                        <NavLink to="/terms" className="mobile-link" onClick={closeAll}>Điều khoản sử dụng</NavLink>
                    </div>

                    <NavLink to="/coming-soon/careers" className="btn btn-primary mobile-cta" onClick={closeAll}>
                        Tuyển dụng
                    </NavLink>

                    <p className="mobile-note">
                        *Website trên moblie (test)
                    </p>
                </div>
            </div>
        </header>
    );
};
export default Header;
