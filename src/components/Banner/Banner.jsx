import "./Banner.css";
import bannerImage from "../../assets/images/banner.jpg";
import { Link } from "react-router-dom";

function Banner() {
    return (
        <div
            className="banner"
            style={{ backgroundImage: `url(${bannerImage})` }}
        >

            <div className="banner-overlay">
                <h1 className="banner-title">Giải pháp phần mềm cho doanh nghiệp</h1>
                <p className="banner-subtitle">
                    Chúng tôi hỗ trợ doanh nghiệp đạt được tiềm năng cao nhất với năng lực chuyên sâu,
                    chuyên môn sâu rộng và các giải pháp AI tiên tiến.
                </p>

                <div className="banner-buttons">
                    <Link to="/contact" className="btn-secondary">Liên hệ</Link>
                </div>
            </div>
        </div>
    );
}

export default Banner;
