import { Link } from "react-router-dom";
import { services } from "../../data/servicesData";
import "./Services.css";

const Services = () => {
    return (
        <div className="services">
            <section className="services-hero">
                <div className="container">
                    <p className="eyebrow">SERVICES</p>
                    <h1 className="title">Dịch vụ của TAsoft</h1>
                    <p className="subtitle">
                        Các dịch vụ được mô phỏng theo tiêu chuẩn doanh nghiệp, phù hợp đồ án và dễ mở rộng.
                    </p>
                </div>
            </section>

            <section className="services-list">
                <div className="container grid-3">
                    {services.map((s) => (
                        <Link to={`/services/${s.slug}`} className="service-card" key={s.id}>
                            <div className="service-icon">{s.icon}</div>
                            <h3 className="service-title">{s.title}</h3>
                            <p className="service-desc">{s.desc}</p>
                            <span className="service-link">Xem chi tiết →</span>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;
