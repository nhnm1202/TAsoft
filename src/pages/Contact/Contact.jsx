import { useMemo, useState } from "react";
import "./Contact.css";

const Contact = () => {
    const initial = useMemo(
        () => ({
            fullName: "",
            email: "",
            subject: "",
            message: "",
            consent: true,
        }),
        []
    );

    const [form, setForm] = useState(initial);
    const [touched, setTouched] = useState({});
    const [status, setStatus] = useState({ type: "", text: "" }); // success | error

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    const errors = useMemo(() => {
        const e = {};
        if (!form.fullName.trim()) e.fullName = "Vui lòng nhập họ và tên.";
        if (!form.email.trim()) e.email = "Vui lòng nhập email.";
        else if (!emailRegex.test(form.email)) e.email = "Email không hợp lệ.";
        if (!form.subject.trim()) e.subject = "Vui lòng nhập tiêu đề.";
        if (!form.message.trim()) e.message = "Vui lòng nhập nội dung.";
        else if (form.message.trim().length < 20)
            e.message = "Nội dung nên tối thiểu 20 ký tự.";
        if (!form.consent) e.consent = "Vui lòng xác nhận đồng ý liên hệ.";
        return e;
    }, [form]);

    const isValid = Object.keys(errors).length === 0;

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
        setStatus({ type: "", text: "" });
    };

    const onBlur = (e) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
    };

    const submit = (e) => {
        e.preventDefault();
        // Mark all touched
        setTouched({
            fullName: true,
            email: true,
            subject: true,
            message: true,
            consent: true,
        });

        if (!isValid) {
            setStatus({ type: "error", text: "Vui lòng kiểm tra lại thông tin trước khi gửi." });
            return;
        }

        // Mock submit (đồ án)
        setStatus({
            type: "success",
            text: "Gửi liên hệ thành công (mô phỏng). TAsoft sẽ phản hồi sớm nhất!",
        });
        setForm(initial);
        setTouched({});
    };

    const showErr = (field) => touched[field] && errors[field];

    return (
        <div className="contact">
            {/* HERO */}
            <section className="contact-hero">
                <div className="container contact-hero__grid">
                    <div>
                        <p className="eyebrow">CONTACT</p>
                        <h1 className="title">Let’s talk about your project</h1>
                        <p className="subtitle">
                            Gửi thông tin liên hệ để TAsoft tư vấn giải pháp phù hợp. Form dưới đây là{" "}
                            <b>mô phỏng phục vụ đồ án</b> — không gửi dữ liệu lên server.
                        </p>

                        <div className="mini-cards">
                            <div className="mini-card">
                                <p className="mini-label">Email</p>
                                <p className="mini-value">contact@tasoft.vn</p>
                            </div>
                            <div className="mini-card">
                                <p className="mini-label">Hotline</p>
                                <p className="mini-value">0123 456 789</p>
                            </div>
                            <div className="mini-card">
                                <p className="mini-label">Location</p>
                                <p className="mini-value">Ho Chi Minh City</p>
                            </div>
                        </div>
                    </div>

                    {/* FORM */}
                    <div className="form-panel">
                        <div className="form-panel__top">
                            <span className="dot" />
                            <span className="dot" />
                            <span className="dot" />
                        </div>

                        <form className="form" onSubmit={submit} noValidate>
                            <div className="form-head">
                                <h2 className="h2">Send a message</h2>
                                <p className="muted">Chúng tôi sẽ phản hồi trong vòng 24–48h (mô phỏng).</p>
                            </div>

                            {status.text && (
                                <div className={`alert ${status.type === "success" ? "alert--success" : "alert--error"}`}>
                                    {status.text}
                                </div>
                            )}

                            <div className="grid-2">
                                <div className="field">
                                    <label htmlFor="fullName">Họ và tên</label>
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        value={form.fullName}
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        placeholder="VD: Minh Nguyễn"
                                        className={showErr("fullName") ? "input input--error" : "input"}
                                    />
                                    {showErr("fullName") && <span className="error">{errors.fullName}</span>}
                                </div>

                                <div className="field">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        name="email"
                                        value={form.email}
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        placeholder="name@example.com"
                                        className={showErr("email") ? "input input--error" : "input"}
                                    />
                                    {showErr("email") && <span className="error">{errors.email}</span>}
                                </div>
                            </div>

                            <div className="field">
                                <label htmlFor="subject">Tiêu đề</label>
                                <input
                                    id="subject"
                                    name="subject"
                                    value={form.subject}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    placeholder="VD: Tư vấn website doanh nghiệp"
                                    className={showErr("subject") ? "input input--error" : "input"}
                                />
                                {showErr("subject") && <span className="error">{errors.subject}</span>}
                            </div>

                            <div className="field">
                                <label htmlFor="message">Nội dung</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={form.message}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    placeholder="Mô tả nhu cầu / yêu cầu dự án (tối thiểu 20 ký tự)..."
                                    rows={5}
                                    className={showErr("message") ? "input input--error" : "input"}
                                />
                                <div className="field-row">
                                    {showErr("message") ? (
                                        <span className="error">{errors.message}</span>
                                    ) : (
                                        <span className="hint">{form.message.trim().length}/500</span>
                                    )}
                                </div>
                            </div>

                            <div className="field field--checkbox">
                                <label className="checkbox">
                                    <input
                                        type="checkbox"
                                        name="consent"
                                        checked={form.consent}
                                        onChange={onChange}
                                        onBlur={onBlur}
                                    />
                                    <span>
                                        Tôi đồng ý cho TAsoft liên hệ lại qua email/điện thoại (mô phỏng).
                                    </span>
                                </label>
                                {showErr("consent") && <span className="error">{errors.consent}</span>}
                            </div>

                            <button className="btn btn--primary" type="submit" disabled={!isValid}>
                                Gửi liên hệ
                            </button>

                            <p className="disclaimer">
                                *Website phục vụ đồ án học phần. Thông tin liên hệ mang tính giả lập.
                            </p>
                        </form>
                    </div>
                </div>
            </section>

            {/* MAP (optional) */}
            <section className="contact-map">
                <div className="container">
                    <div className="map-card">
                        <div className="map-head">
                            <h2 className="h2">Office</h2>
                            <p className="muted">Bản đồ bên dưới chỉ mang tính minh họa.</p>
                        </div>

                        <div className="map-embed">
                            {/* Bạn có thể thay bằng Google Maps embed thật nếu muốn */}
                            <div className="map-placeholder">
                                <div className="map-pin" />
                                <p>Map placeholder (đồ án)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
