import "./About.css";
import {
    CheckIcon,
    SparkIcon,
    SpeedIcon,
    ShieldIcon,
} from "../../assets/Icons";

const About = () => {
    const highlights = [
        {
            title: "Product mindset",
            desc: "Thiết kế theo mục tiêu kinh doanh và trải nghiệm người dùng.",
            icon: <SparkIcon />,
        },
        {
            title: "Engineering quality",
            desc: "Code sạch, dễ mở rộng, tối ưu hiệu năng.",
            icon: <CheckIcon />,
        },
        {
            title: "Delivery focused",
            desc: "Quy trình rõ ràng, deadline minh bạch.",
            icon: <SpeedIcon />,
        },
        {
            title: "Security & reliability",
            desc: "Ưu tiên ổn định và bảo trì hệ thống.",
            icon: <ShieldIcon />,
        },
    ];
    const stats = [
        { label: "Years", value: "2+" },
        { label: "Projects", value: "15+" },
        { label: "Clients", value: "10+" },
        { label: "Satisfaction", value: "95%" },
    ];

    const tech = [
        "React", "Vite", "React Router", "Node.js (mock)",
        "MySQL/MongoDB (mock)", "GitHub", "Figma", "CI/CD (mock)",
    ];

    const team = [
        { name: "Nguyễn Văn A", role: "Project Manager" },
        { name: "Trần Văn B", role: "Frontend Engineer" },
        { name: "Lê Thị C", role: "Backend Engineer" },
        { name: "Phạm Văn D", role: "UI/UX Designer" },
    ];


    return (
        <div className="about">
            {/* HERO */}
            <section className="hero">
                <div className="container hero__grid">
                    <div className="hero__left">
                        <p className="eyebrow">ABOUT TAsoft</p>
                        <h1 className="hero__title">
                            We build modern software that helps teams move faster.
                        </h1>
                        <p className="hero__sub">
                            TAsoft là công ty phần mềm <b>giả lập</b> cho đồ án học phần, mô phỏng mô hình agency/SaaS.
                            Tập trung vào <b>Web</b>, <b>Mobile</b> và <b>Hệ thống dữ liệu</b> với tiêu chuẩn giao diện hiện đại.
                        </p>

                        <div className="hero__cta">
                            <a className="btn btn--primary" href="/contact">Talk to us</a>
                            <a className="btn btn--secondary" href="/services">View services</a>
                        </div>

                        <div className="trust">
                            <span className="chip">Fast delivery</span>
                            <span className="chip">Clean UI</span>
                            <span className="chip">Scalable</span>
                        </div>
                    </div>

                    <div className="hero__right">
                        <div className="panel">
                            <div className="panel__top">
                                <span className="dot" />
                                <span className="dot" />
                                <span className="dot" />
                            </div>

                            <div className="panel__body">
                                <p className="panel__kicker">Quick snapshot</p>
                                <div className="stats">
                                    {stats.map((s) => (
                                        <div className="stat" key={s.label}>
                                            <div className="stat__value">{s.value}</div>
                                            <div className="stat__label">{s.label}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="divider" />

                                <p className="panel__note">
                                    *Thông tin giả lập phục vụ đồ án học phần.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* STORY */}
            <section className="section">
                <div className="container section__grid">
                    <div>
                        <h2 className="h2">Our story</h2>
                        <p className="p">
                            TAsoft được xây dựng như một mô hình công ty phần mềm hiện đại: quy trình rõ ràng,
                            tập trung vào kết quả và trải nghiệm người dùng. Mục tiêu của chúng tôi là tạo ra sản phẩm
                            đẹp – nhanh – bền vững.
                        </p>
                    </div>

                    <div className="cards cards--2">
                        <div className="card">
                            <h3 className="h3">Mission</h3>
                            <p className="p">
                                Cung cấp giải pháp phần mềm chất lượng, hỗ trợ doanh nghiệp chuyển đổi số hiệu quả.
                            </p>
                        </div>
                        <div className="card">
                            <h3 className="h3">Vision</h3>
                            <p className="p">
                                Trở thành đơn vị phát triển phần mềm uy tín, áp dụng công nghệ mới và tiêu chuẩn thiết kế hiện đại.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* HIGHLIGHTS */}
            <section className="section section--muted">
                <div className="container">
                    <div className="section__head">
                        <h2 className="h2">What we’re good at</h2>
                        <p className="p p--muted">
                            Tập trung vào chất lượng sản phẩm và tốc độ triển khai — đúng phong cách website công ty Mỹ.
                        </p>
                    </div>

                    <div className="cards cards--4">
                        {highlights.map((item) => (
                            <div className="card card--hover" key={item.title}>
                                <div className="icon-wrap">
                                    {item.icon}
                                </div>
                                <h3 className="h3">{item.title}</h3>
                                <p className="p">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TECH */}
            <section className="section">
                <div className="container">
                    <div className="section__head">
                        <h2 className="h2">Tech stack</h2>
                        <p className="p p--muted">
                            Stack phổ biến, dễ mở rộng. Backend/DB có thể mô phỏng nếu bạn chưa triển khai.
                        </p>
                    </div>

                    <div className="badges">
                        {tech.map((t) => (
                            <span className="badge" key={t}>{t}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* TEAM */}
            <section className="section section--muted">
                <div className="container">
                    <div className="section__head">
                        <h2 className="h2">Team</h2>
                        <p className="p p--muted">Thông tin giả lập để mô phỏng mô hình doanh nghiệp.</p>
                    </div>

                    <div className="team">
                        {team.map((m) => (
                            <div className="member" key={m.name}>
                                <div className="avatar" aria-hidden="true">
                                    {m.name.split(" ").slice(-1)[0][0]}
                                </div>
                                <div>
                                    <div className="member__name">{m.name}</div>
                                    <div className="member__role">{m.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cta">
                        <div>
                            <h3 className="h3">Ready to build something?</h3>
                            <p className="p p--muted">Liên hệ TAsoft để nhận tư vấn giải pháp phù hợp.</p>
                        </div>
                        <div className="cta__actions">
                            <a className="btn btn--primary" href="/contact">Contact</a>
                            <a className="btn btn--secondary" href="/">Home</a>
                        </div>
                    </div>

                    <p className="disclaimer">
                        *Website được xây dựng phục vụ đồ án học phần. Mọi thông tin mang tính giả lập.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
