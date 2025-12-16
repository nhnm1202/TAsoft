import "./Banner.css";
import bannerImage from "../../assets/images/banner.jpg";
import { Link } from "react-router-dom";

function Banner() {
    return (
        <section
            className="banner"
            style={{ backgroundImage: `url(${bannerImage})` }}
        >
            <div className="banner-overlay">
                <div className="banner-content">
                    <h1 className="banner-title">
                        Giải pháp phần mềm cho <span>doanh nghiệp</span>
                    </h1>

                    <p className="banner-subtitle">
                        Chúng tôi hỗ trợ doanh nghiệp đạt được tiềm năng cao nhất với năng lực
                        chuyên sâu, chuyên môn sâu rộng và các giải pháp AI tiên tiến.
                    </p>

                    <div className="banner-buttons">
                        <Link to="/contact" className="btn btn-gradient">
                            → Bắt đầu dự án cùng TAsoft
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
