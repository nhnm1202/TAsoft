import "./Legal.css";

const Privacy = () => {
    return (
        <div className="legal">
            <section className="legal-hero">
                <div className="container">
                    <p className="eyebrow">LEGAL</p>
                    <h1 className="title">Privacy Policy</h1>
                    <p className="subtitle">
                        Tài liệu mô phỏng phục vụ đồ án. Nội dung dưới đây chỉ mang tính minh hoạ.
                    </p>
                </div>
            </section>

            <section className="legal-body">
                <div className="container legal-card">
                    <h2>1. Information we collect</h2>
                    <p>
                        Website có thể thu thập thông tin khi bạn gửi form liên hệ (tên, email, nội dung). Trong đồ án hiện tại,
                        dữ liệu <b>không được gửi lên server</b> và chỉ dùng để mô phỏng luồng xử lý.
                    </p>

                    <h2>2. How we use information</h2>
                    <ul>
                        <li>Phản hồi yêu cầu tư vấn (mô phỏng).</li>
                        <li>Cải thiện trải nghiệm người dùng và nội dung website.</li>
                    </ul>

                    <h2>3. Data retention</h2>
                    <p>
                        Trong phiên bản đồ án, hệ thống không lưu trữ dữ liệu thực. Khi triển khai thực tế, dữ liệu có thể được lưu
                        trong database và áp dụng chính sách lưu trữ phù hợp.
                    </p>

                    <h2>4. Security</h2>
                    <p>
                        Khi triển khai backend, TAsoft có thể áp dụng các biện pháp bảo mật (HTTPS, validation, access control)
                        nhằm bảo vệ dữ liệu người dùng.
                    </p>

                    <h2>5. Contact</h2>
                    <p>
                        Nếu có thắc mắc, vui lòng liên hệ qua trang <b>Contact</b> (mô phỏng).
                    </p>

                    <p className="legal-note">
                        *Website phục vụ đồ án học phần. Mọi thông tin mang tính giả lập.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
