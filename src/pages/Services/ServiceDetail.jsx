import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { services } from "../../data/servicesData";
import "./Services.css";

const ServiceDetail = () => {
    const { slug } = useParams();

    const service = useMemo(
        () => services.find((s) => s.slug === slug),
        [slug]
    );

    if (!service) {
        return (
            <div className="container service-notfound">
                <h2>Không tìm thấy dịch vụ</h2>
                <p className="subtitle">Slug không tồn tại hoặc bạn chưa khai báo trong servicesData.</p>
                <Link to="/services" className="back-link">← Quay lại Services</Link>
            </div>
        );
    }

    return (
        <div className="service-detail">
            <section className="detail-hero">
                <div className="container detail-head">
                    <div className="detail-icon">{service.icon}</div>
                    <div>
                        {/* <p className="eyebrow">SERVICE DETAIL</p> */}
                        <h1 className="title">{service.title}</h1>
                        <p className="subtitle">{service.longDesc || service.desc}</p>

                        <div className="breadcrumbs">
                            <Link to="/" className="crumb">Home</Link>
                            <span className="sep">/</span>
                            <Link to="/services" className="crumb">Services</Link>
                            <span className="sep">/</span>
                            <span className="crumb active">{service.title}</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="detail-content">
                <div className="container grid-2">
                    <div className="panel">
                        <h3>Technologies</h3>
                        <div className="tags">
                            {(service.technologies || []).map((t) => (
                                <span key={t} className="tag">{t}</span>
                            ))}
                        </div>
                    </div>

                    <div className="panel">
                        <h3>Key benefits</h3>
                        <ul className="benefits">
                            {(service.benefits || []).map((b) => (
                                <li key={b}>{b}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="container cta-box">
                    <div>
                        <h3>Bạn cần tư vấn về {service.title}?</h3>
                        <p className="subtitle">Gửi yêu cầu để TAsoft phản hồi (mô phỏng).</p>
                    </div>
                    <Link to="/contact" className="btn btn-primary">Liên hệ ngay</Link>
                </div>

                <div className="container bottom-links">
                    <Link to="/services" className="back-link">← Back to Services</Link>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
