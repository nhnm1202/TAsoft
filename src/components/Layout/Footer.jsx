import "./Footer.css";
import { FaFacebook, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-section">
                    <h2 className="footer-logo">TAsoft</h2>
                    <p>Giải pháp phần mềm cho doanh nghiệp.</p>
                </div>

                <div className="footer-section">
                    <h3>Liên hệ</h3>
                    <p>Email: aaa@tasoft.com</p>
                    <p>Phone: 0123 456 789</p>
                    <p>Địa chỉ: Trà Vinh</p>
                </div>

                <div className="footer-section">
                    <h3>Menu</h3>
                    <a href="#home">Trang chủ</a>
                    <a href="#about">Giới thiệu</a>
                    <a href="#services">Dịch vụ</a>
                    <a href="#projects">Dự án</a>
                    <a href="#contact">Liên hệ</a>
                </div>

                <div className="footer-section">
                    <div className="social">
                        <a href="#" target="_blank">
                            <FaFacebook />
                        </a>
                        <a href="#" target="_blank">
                            <FaLinkedin />
                        </a>
                        <a href="#" target="_blank">
                            <FaGithub />
                        </a>
                        <a href="#" target="_blank">
                            <FaYoutube />
                        </a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                Copyright @ 2025 TA Software
            </div>
        </footer>
    );
}

export default Footer;
