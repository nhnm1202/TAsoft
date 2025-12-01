import "./Services.css";
import ServiceItem from "./ServiceItem";
import { services } from "../../data/servicesData";

function Services() {
    return (
        <section id="services" className="services">
            <h2 className="services-title">Dịch vụ của chúng tôi</h2>
            <p className="services-subtitle">
                TAsoft cung cấp giải pháp phần mềm toàn diện cho doanh nghiệp.
            </p>

            <div className="services-container">
                {services.map((item, index) => (
                    <ServiceItem
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        desc={item.desc}
                    />
                ))}
            </div>
        </section>
    );
}

export default Services;
