import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";
import { fadeInRotate } from "../utils/animations";
import styles from "../styles/components/Session.module.scss";

const Session = () => {
    const { timeLeftMinutes, timeLeftSeconds } = useContext(TimerContext);

    const animations = fadeInRotate;

    const formatTime = (time) => {
        let formatted = time;

        if (time === 60) formatted = "00";
        if (time < 10) formatted = "0" + time;

        return formatted;
    };

    return (
        <div className={styles.Session}>
            <span className={styles.SessionTime}>
                <AnimatePresence exitBeforeEnter>
                    <motion.div
                        key={timeLeftMinutes}
                        initial="pageInitial"
                        animate="pageAnimate"
                        exit="pageExit"
                        variants={animations}
                        transition={{ duration: 0.2 }}
                    >
                        {timeLeftMinutes}
                    </motion.div>
                </AnimatePresence>
                <span className={styles.SessionTimeDivider}></span>
                <span className={styles.SessionSeconds}>
                    {formatTime(timeLeftSeconds)}
                </span>
            </span>
        </div>
    );
};

export default Session;
