import Session from "./Session";
import SessionControl from "./SessionControl";
import TimerControl from "./TimerControl";
import styles from "../styles/components/Timer.module.scss";
import Caption from "./Caption";

const Timer = () => {
    return (
        <div className={styles.Timer}>
            <Caption />
            <Session />
            <SessionControl />
            <TimerControl />
        </div>
    );
};

export default Timer;
