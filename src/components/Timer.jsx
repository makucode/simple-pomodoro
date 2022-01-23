import Session from "./Session";
import SessionControl from "./SessionControl";
import TimerControl from "./TimerControl";
import styles from "../styles/components/Timer.module.scss";
import Caption from "./Caption";
import Credits from "./Credits";

const Timer = () => {
    return (
        <div className={styles.Timer}>
            <Caption />
            <Session />
            <SessionControl />
            <TimerControl />
            <Credits />
        </div>
    );
};

export default Timer;
