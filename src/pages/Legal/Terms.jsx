import "./Legal.css";

const Terms = () => {
    return (
        <div className="legal">
            <section className="legal-hero">
                <div className="container">
                    <p className="eyebrow">LEGAL</p>
                    <h1 className="title">Terms & Conditions</h1>
                    <p className="subtitle">
                        Điều khoản sử dụng mô phỏng phục vụ đồ án. Nội dung chỉ mang tính minh hoạ.
                    </p>
                </div>
            </section>

            <section className="legal-body">
                <div className="container legal-card">
                    <h2>1. Use of website</h2>
                    <p>
                        Website này được xây dựng nhằm mục đích học tập và trình bày đồ án. Người dùng có thể xem nội dung và
                        trải nghiệm giao diện.
                    </p>

                    <h2>2. Intellectual property</h2>
                    <p>
                        Giao diện, bố cục và nội dung mô phỏng thuộc về TAsoft (giả lập). Không sử dụng cho mục đích thương mại.
                    </p>

                    <h2>3. Disclaimer</h2>
                    <ul>
                        <li>Thông tin dự án, khách hàng, số liệu là mô phỏng.</li>
                        <li>Form liên hệ không gửi dữ liệu thật lên server (trừ khi bạn triển khai backend sau).</li>
                    </ul>

                    <h2>4. Changes</h2>
                    <p>
                        Điều khoản có thể được cập nhật để phù hợp khi website được phát triển thêm các module backend/fullstack.
                    </p>

                    <p className="legal-note">
                        *Website phục vụ đồ án học phần. Mọi thông tin mang tính giả lập.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Terms;
