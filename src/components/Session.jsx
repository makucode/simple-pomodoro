import { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";
import styles from "../styles/components/Session.module.scss";

const Session = () => {
    const { timeLeftMinutes, timeLeftSeconds } = useContext(TimerContext);

    const formatTime = (time) => {
        let formatted = time;

        if (time === 60) formatted = "00";
        if (time < 10) formatted = "0" + time;

        return formatted;
    };

    return (
        <div className={styles.Session}>
            <span className={styles.SessionTime}>
                {timeLeftMinutes}
                <span className={styles.SessionTimeDivider}></span>
                {formatTime(timeLeftSeconds)}
            </span>
        </div>
    );
};

export default Session;
