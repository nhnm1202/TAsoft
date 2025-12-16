import {
  FaCode,
  FaMobileAlt,
  FaCogs,
  FaCloud,
  FaDatabase,
  FaRobot,
} from "react-icons/fa";

export const services = [
  {
    id: 1,
    slug: "phat-trien-website",
    icon: <FaCode />,
    title: "Phát triển Website",
    desc: "Thiết kế website với công nghệ mới nhất hiện nay, chúng tôi luôn tạo ra sự khác biệt để phát triển",
    longDesc:
      "TAsoft xây dựng website doanh nghiệp/landing page theo chuẩn responsive, tối ưu tốc độ tải trang, cấu trúc rõ ràng và dễ mở rộng trong tương lai.",
    technologies: ["React", "Vite", "HTML5", "CSS3", "SEO basics"],
    benefits: ["Giao diện hiện đại", "Tối ưu hiệu năng", "Dễ bảo trì & mở rộng"],
  },
  {
    id: 2,
    slug: "ung-dung-di-dong",
    icon: <FaMobileAlt />,
    title: "Ứng dụng di động",
    desc: "Thiết kế ứng dụng với giao diện đẹp dễ sử dụng, tương thích trên mọi thiết bị. Ứng dụng nhanh chóng, tối ưu hiệu suất và bảo mật dữ liệu người dùng",
    longDesc:
      "Thiết kế và phát triển ứng dụng theo mô hình MVP, tập trung trải nghiệm người dùng, hiệu năng và khả năng nâng cấp.",
    technologies: ["React Native (mock)", "Flutter (mock)", "REST API (mock)"],
    benefits: ["Tương thích đa thiết bị", "Hiệu suất tốt", "Dễ mở rộng tính năng"],
  },
  {
    id: 3,
    slug: "phan-mem-theo-yeu-cau",
    icon: <FaCogs />,
    title: "Phần mềm theo yêu cầu",
    desc: "Giải pháp phần mềm tùy chỉnh theo nhu cầu doanh nghiệp",
    longDesc:
      "Phân tích yêu cầu, thiết kế quy trình và phát triển phần mềm theo đúng bài toán doanh nghiệp, đảm bảo chất lượng và tài liệu bàn giao.",
    technologies: ["Node.js (mock)", "SQL Server/MySQL (mock)", "Git"],
    benefits: ["Đúng nhu cầu", "Quy trình rõ ràng", "Dễ vận hành"],
  },
  {
    id: 4,
    slug: "giai-phap-cloud",
    icon: <FaCloud />,
    title: "Giải pháp Cloud",
    desc: "Triển khai hệ thống cloud linh hoạt & bảo mật",
    longDesc:
      "Tư vấn triển khai hạ tầng cloud (mô phỏng), tối ưu chi phí, bảo mật và sẵn sàng mở rộng theo nhu cầu.",
    technologies: ["Docker (mock)", "CI/CD (mock)", "Cloud basics (mock)"],
    benefits: ["Linh hoạt", "Tiết kiệm chi phí", "Dễ scale"],
  },
  {
    id: 5,
    slug: "co-so-du-lieu",
    icon: <FaDatabase />,
    title: "Cơ sở dữ liệu",
    desc: "Thiết kế, tối ưu và bảo trì hệ thống database",
    longDesc:
      "Thiết kế CSDL, chuẩn hóa dữ liệu, tối ưu truy vấn và đề xuất giải pháp sao lưu/khôi phục (mô phỏng) phù hợp.",
    technologies: ["MySQL", "MongoDB", "PostgreSQL", "Indexing"],
    benefits: ["Tối ưu truy vấn", "Ổn định dữ liệu", "Dễ mở rộng"],
  },
  {
    id: 6,
    slug: "ai-tu-dong-hoa",
    icon: <FaRobot />,
    title: "AI & Tự động hoá",
    desc: "Ứng dụng AI, chatbot và automation trong doanh nghiệp",
    longDesc:
      "Mô phỏng giải pháp AI/automation: chatbot hỗ trợ khách hàng, tự động hóa quy trình, phân loại dữ liệu cơ bản.",
    technologies: ["Chatbot (mock)", "Automation (mock)", "Python (mock)"],
    benefits: ["Tăng hiệu suất", "Giảm thao tác thủ công", "Hỗ trợ 24/7"],
  },
];
