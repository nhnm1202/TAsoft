import { NavLink } from "react-router-dom";
import "./Footer.css";

const GitHubIcon = (props) => (
    <svg viewBox="0 0 24 24" {...props} aria-hidden="true" focusable="false">
        <path
            fill="currentColor"
            d="M12 .5C5.73.5.75 5.72.75 12.17c0 5.16 3.35 9.54 8.01 11.08.59.11.81-.26.81-.58v-2.1c-3.26.73-3.95-1.6-3.95-1.6-.53-1.38-1.3-1.75-1.3-1.75-1.06-.74.08-.72.08-.72 1.17.08 1.79 1.25 1.79 1.25 1.04 1.84 2.74 1.31 3.41 1 .11-.78.41-1.31.74-1.61-2.6-.3-5.34-1.33-5.34-5.93 0-1.31.45-2.38 1.2-3.22-.12-.3-.52-1.53.12-3.18 0 0 .98-.32 3.2 1.23a10.7 10.7 0 0 1 2.91-.4c.99 0 1.99.14 2.91.4 2.22-1.55 3.2-1.23 3.2-1.23.64 1.65.24 2.88.12 3.18.75.84 1.2 1.91 1.2 3.22 0 4.61-2.74 5.62-5.35 5.92.42.38.8 1.12.8 2.25v3.33c0 .32.21.69.82.58 4.66-1.54 8.01-5.92 8.01-11.08C23.25 5.72 18.27.5 12 .5Z"
        />
    </svg>
);

const LinkedInIcon = (props) => (
    <svg viewBox="0 0 24 24" {...props} aria-hidden="true" focusable="false">
        <path
            fill="currentColor"
            d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.35V9h3.42v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.41 4.34 5.55v6.19ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45Z"
        />
    </svg>
);

const FacebookIcon = (props) => (
    <svg viewBox="0 0 24 24" {...props} aria-hidden="true" focusable="false">
        <path
            fill="currentColor"
            d="M13.5 22v-9h3l.5-3h-3.5V8.3c0-.87.28-1.47 1.57-1.47H17V4.12c-.32-.05-1.45-.12-2.76-.12-2.73 0-4.6 1.66-4.6 4.71V10H7v3h2.64v9h3.86Z"
        />
    </svg>
);

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__grid">
                <div className="footer__brand">
                    <div className="brand-row">
                        <span className="footer-brand-mark" aria-hidden="true" />
                        <span className="brand-name">TAsoft</span>
                    </div>

                    <p className="footer__desc">
                        Website giới thiệu công ty phần mềm theo phong cách enterprise (mô phỏng phục vụ đồ án).
                    </p>

                    <div className="social">
                        <a href="#!" onClick={(e) => e.preventDefault()} className="social-link" aria-label="GitHub">
                            <GitHubIcon className="social-icon" />
                        </a>
                        <a href="#!" onClick={(e) => e.preventDefault()} className="social-link" aria-label="LinkedIn">
                            <LinkedInIcon className="social-icon" />
                        </a>
                        <a href="#!" onClick={(e) => e.preventDefault()} className="social-link" aria-label="Facebook">
                            <FacebookIcon className="social-icon" />
                        </a>
                    </div>
                </div>

                <div className="footer__links">
                    <p className="footer__title">Company</p>
                    <NavLink to="/about" className="footer__link">About</NavLink>
                    <NavLink to="/services" className="footer__link">Services</NavLink>
                    <NavLink to="/contact" className="footer__link">Contact</NavLink>
                </div>

                <div className="footer__links">
                    <p className="footer__title">Resources</p>
                    <a className="footer__link" href="#!" onClick={(e) => e.preventDefault()}>Blog (mock)</a>
                    <a className="footer__link" href="#!" onClick={(e) => e.preventDefault()}>Case studies (mock)</a>
                    <a className="footer__link" href="#!" onClick={(e) => e.preventDefault()}>Careers (mock)</a>
                </div>

                <div className="footer__links">
                    <p className="footer__title">Legal</p>
                    <NavLink to="/privacy" className="footer__link">Privacy Policy</NavLink>
                    <NavLink to="/terms" className="footer__link">Terms</NavLink>
                </div>


            </div>

            <div className="container footer__bottom">
                <p className="footer__copy">© {new Date().getFullYear()} TAsoft. All rights reserved.</p>
                <p className="footer__note">
                    *Website được xây dựng phục vụ đồ án học phần. Mọi thông tin mang tính giả lập.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
