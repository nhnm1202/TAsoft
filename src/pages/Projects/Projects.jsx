import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projectsData";
import "./Projects.css";

const Projects = () => {
    const [filter, setFilter] = useState("All");

    const types = useMemo(() => {
        const set = new Set(projects.map((p) => p.type));
        return ["All", ...Array.from(set)];
    }, []);

    const filtered = useMemo(() => {
        if (filter === "All") return projects;
        return projects.filter((p) => p.type === filter);
    }, [filter]);

    return (
        <div className="projects">
            <section className="projects-hero">
                <div className="container">
                    {/* <p className="eyebrow">Dự án</p> */}
                    <h1 className="title">Tổng quan về các dự án</h1>
                    <p className="subtitle">
                        Danh sách dự án về sản phẩm doanh nghiệp.
                    </p>

                    <div className="filters">
                        {types.map((t) => (
                            <button
                                key={t}
                                type="button"
                                className={t === filter ? "chip chip--active" : "chip"}
                                onClick={() => setFilter(t)}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="projects-list">
                <div className="container grid">
                    {filtered.map((p) => (
                        <div className="card" key={p.id}>
                            <div className="card-top">
                                <div>
                                    <p className="meta">
                                        <span className="badge">{p.type}</span>
                                        <span className="dot-sep">•</span>
                                        <span className="muted">{p.year}</span>
                                    </p>
                                    <h3 className="h3">{p.name}</h3>
                                    <p className="p">{p.summary}</p>
                                </div>
                                <span className={p.status === "Completed" ? "status ok" : "status"}>
                                    {p.status}
                                </span>
                            </div>

                            <div className="divider" />

                            <div className="cols">
                                <div>
                                    <p className="label">Tech</p>
                                    <div className="tags">
                                        {p.stack.map((s) => (
                                            <span key={s} className="tag">{s}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="label">Highlights</p>
                                    <ul className="list">
                                        {p.highlights.map((h) => (
                                            <li key={h}>{h}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="card-actions">
                                <span className="client">
                                    Client: <b>{p.client}</b>
                                </span>

                                <Link className="btn btn-secondary" to={`/projects/${p.slug}`}>
                                    Xem chi tiết
                                </Link>

                            </div>
                        </div>
                    ))}
                </div>

                <div className="container cta">
                    <div>
                        <h3 className="h3">Want a similar solution?</h3>
                        <p className="p p--muted">
                            Gửi yêu cầu để TAsoft tư vấn hướng triển khai.
                        </p>
                    </div>
                    <Link to="/contact" className="btn btn-primary">Liên hệ ngay</Link>
                </div>
            </section>
        </div>
    );
};

export default Projects;
