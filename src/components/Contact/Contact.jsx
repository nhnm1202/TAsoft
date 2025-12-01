import "./Contact.css";
import { useState } from "react";

function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.message) {
            alert("Vui lòng nhập đầy đủ thông tin bắt buộc!");
            return;
        }

        console.log("Dữ liệu gửi đi:", form);
        alert("Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất.");

        setForm({
            name: "",
            email: "",
            phone: "",
            message: "",
        });
    };

    return (
        <section id="contact" className="contact">
            <h2 className="contact-title">Liên hệ</h2>
            <p className="contact-subtitle">
                Để lại thông tin, đội ngũ TAsoft sẽ liên hệ với bạn trong thời gian sớm nhất
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Họ và tên (*)"
                    value={form.name}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email (*)"
                    value={form.email}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Số điện thoại"
                    value={form.phone}
                    onChange={handleChange}
                />

                <textarea
                    name="message"
                    placeholder="Nội dung liên hệ (*)"
                    value={form.message}
                    onChange={handleChange}
                ></textarea>

                <button type="submit">Gửi</button>
            </form>

            <div className="map-wrapper">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.126136853456!2d106.3439443737556!3d9.92345159017803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0175ea296facb%3A0x55ded92e29068221!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBUcsOgIFZpbmg!5e0!3m2!1svi!2s!4v1748521552812!5m2!1svi!2s"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
            </div>
        </section>
    );
}

export default Contact;
