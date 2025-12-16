import { Link } from "react-router-dom";
import { services } from "../../data/servicesData";
import "./Home.css";
import avatar from "../../assets/avatars/avatar.jpg"

const Home = () => {
    return (
        <div className="home">
            {/* SERVICES PREVIEW */}
            <section className="home-section home-services">
                <div className="container">
                    <div className="section-head">
                        <h2 className="h2">Các dịch vụ</h2>
                        <p className="subtitle">
                            Các dịch vụ và giải pháp của chúng tôi được hỗ trợ bởi trí tuệ nhân tạo và kiến
                            thức chuyên môn sâu rộng nhằm giúp các doanh nghiệp tăng cường khả năng phục hồi, sự linh hoạt và khả năng cạnh tranh.
                        </p>
                    </div>

                    <div className="services-preview">
                        {services.slice(0, 3).map((s) => (
                            <Link
                                to={`/services/${s.slug}`}
                                className="service-preview-card"
                                key={s.id}
                            >
                                <div className="icon-wrap">{s.icon}</div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                                <span className="link">Chi tiết →</span>
                            </Link>
                        ))}
                    </div>

                    <div className="section-cta">
                        <Link to="/services" className="btn btn-secondary">
                            Xem tất cả
                        </Link>
                    </div>
                </div>
            </section>
            {/* CLIENTS */}
            <section className="home-section home-clients">
                <div className="container">
                    <div className="section-head">
                        <h2 className="h2">Được các đội nhóm tin tưởng</h2>
                        <p className="subtitle">
                            Danh sách khách hàng/đối tác đã sử dụng dịch vụ.
                        </p>
                    </div>

                    <div className="clients">
                        {["ABCBank", "TGDD", "Nón Đẹp", "VinaMill", "FBTShop", "Soppe"].map((c) => (
                            <div className="client" key={c} aria-label={`Client ${c}`}>
                                <span className="client-mark" aria-hidden="true" />
                                <span className="client-name">{c}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="home-section home-testimonials">
                <div className="container">
                    <div className="section-head">
                        <h2 className="h2">Đánh giá khách hàng</h2>
                    </div>

                    <div className="testimonials">
                        {[
                            {
                                quote:
                                    "TAsoft triển khai nhanh, giao diện hiện đại và tài liệu bàn giao rõ ràng. Nhóm làm việc rất chuyên nghiệp.",
                                name: "Nguyễn Văn A",
                                role: "Product Lead, ABCBank",
                                avatar: avatar,
                            },
                            {
                                quote:
                                    "Quy trình minh bạch, cập nhật tiến độ đều đặn. Kết quả đúng mục tiêu và dễ mở rộng sau này.",
                                name: "Nguyễn Văn B",
                                role: "COO, VinaMill",
                                avatar: avatar,
                            },
                            {
                                quote:
                                    "UI/UX gọn gàng, tốc độ tải tốt. Những điểm tối ưu nhỏ giúp trải nghiệm người dùng khác biệt.",
                                name: "Nguyễn Văn C",
                                role: "CTO, FBTShop",
                                avatar: avatar,
                            },
                        ].map((t) => (
                            <div className="t-card" key={t.name}>
                                <p className="t-quote">“{t.quote}”</p>
                                <div className="t-person">
                                    <div className="t-avatar" aria-hidden="true">
                                        <img src={t.avatar} alt={t.name} />
                                    </div>
                                    <div>
                                        <div className="t-name">{t.name}</div>
                                        <div className="t-role">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY US */}
            <section className="home-section home-why-us">
                <div className="section-head">
                    <h2 className="h2">Vì sao chọn TAsoft</h2>
                    <p>
                        Những giá trị cốt lõi giúp TAsoft trở thành đối tác công nghệ đáng tin cậy.
                    </p>
                </div>
                <div className="container grid-3">
                    <div className="why-card">
                        <h3>Quy trình triển khai rõ ràng</h3>
                        <p>
                            Chúng tôi áp dụng quy trình phát triển chuẩn, minh bạch từng giai đoạn từ phân tích đến triển khai.
                        </p>
                    </div>
                    <div className="why-card">
                        <h3>Tập trung hiệu quả kinh doanh</h3>
                        <p>
                            Giải pháp được thiết kế xoay quanh mục tiêu vận hành và tăng trưởng của doanh nghiệp.
                        </p>
                    </div>
                    <div className="why-card">
                        <h3>Kiến trúc sẵn sàng mở rộng</h3>
                        <p>
                            Hệ thống được thiết kế linh hoạt, dễ mở rộng và tích hợp trong tương lai.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
