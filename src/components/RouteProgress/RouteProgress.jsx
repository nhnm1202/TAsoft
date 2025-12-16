import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./RouteProgress.css";

const RouteProgress = () => {
    const { pathname } = useLocation();
    const [show, setShow] = useState(false);
    const [value, setValue] = useState(0);
    const timers = useRef([]);

    const clearTimers = () => {
        timers.current.forEach((t) => clearTimeout(t));
        timers.current = [];
    };

    useEffect(() => {
        clearTimers();

        // start
        setShow(true);
        setValue(12);

        timers.current.push(setTimeout(() => setValue(45), 80));
        timers.current.push(setTimeout(() => setValue(72), 160));
        timers.current.push(setTimeout(() => setValue(86), 240));

        // finish
        timers.current.push(
            setTimeout(() => {
                setValue(100);
                timers.current.push(
                    setTimeout(() => {
                        setShow(false);
                        setValue(0);
                    }, 220)
                );
            }, 320)
        );

        return () => clearTimers();
    }, [pathname]);

    return (
        <div className={show ? "rp rp--show" : "rp"} aria-hidden="true">
            <div className="rp__bar" style={{ width: `${value}%` }} />
        </div>
    );
};

export default RouteProgress;
