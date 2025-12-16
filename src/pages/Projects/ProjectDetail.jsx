import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../../data/projectsData";
import "./Projects.css";

const ProjectDetail = () => {
    const { slug } = useParams();

    const project = useMemo(() => projects.find((p) => p.slug === slug), [slug]);

    if (!project) {
        return (
            <div className="container service-notfound" style={{ padding: "90px 0" }}>
                <h2>Project not found</h2>
                <p className="subtitle">Slug không tồn tại trong projectsData.</p>
                <Link to="/projects" className="back-link">← Quay lại</Link>
            </div>
        );
    }

    return (
        <div className="project-detail">
            <section className="detail-hero">
                <div className="container">
                    <p className="eyebrow">Chi tiết dự án</p>
                    <h1 className="title">{project.name}</h1>
                    <p className="subtitle">{project.summary}</p>

                    <div className="breadcrumbs">
                        <Link to="/" className="crumb">Trang chủ</Link>
                        <span className="sep">/</span>
                        <Link to="/projects" className="crumb">Dự án</Link>
                        <span className="sep">/</span>
                        <span className="crumb active">{project.name}</span>
                    </div>
                </div>
            </section>

            <section className="projects-list">
                <div className="container grid">
                    <div className="card">
                        <p className="label">Tổng quan</p>
                        <div className="divider" />
                        <div className="cols" style={{ gridTemplateColumns: "1fr" }}>
                            <ul className="list" style={{ paddingLeft: 18 }}>
                                <li><b>Type:</b> {project.type}</li>
                                <li><b>Year:</b> {project.year}</li>
                                <li><b>Status:</b> {project.status}</li>
                                <li><b>Client:</b> {project.client}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card">
                        <p className="label">Tech stack</p>
                        <div className="divider" />
                        <div className="tags">
                            {project.stack.map((t) => (
                                <span key={t} className="tag">{t}</span>
                            ))}
                        </div>
                    </div>

                    <div className="card">
                        <p className="label">Highlights</p>
                        <div className="divider" />
                        <ul className="list">
                            {project.highlights.map((h) => (
                                <li key={h}>{h}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="card">
                        <p className="label">Next steps (mock)</p>
                        <div className="divider" />
                        <p className="p">
                            Có thể mở rộng dự án bằng cách tích hợp backend (REST API), xác thực người dùng,
                            lưu dữ liệu vào database và triển khai CI/CD.
                        </p>

                        <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                            <Link to="/contact" className="btn btn-primary">Request similar</Link>
                            <Link to="/projects" className="btn btn-secondary">Quay lại</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;
