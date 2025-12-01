function ServiceItem({ icon, title, desc }) {
    return (
        <div className="service-box">
            <div className="service-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    );
}

export default ServiceItem;
