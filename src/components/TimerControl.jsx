import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";
import styles from "../styles/components/TimerControl.module.scss";
import { fadeInScale } from "../utils/animations";

const TimerControl = () => {
    const {
        breakLength,
        setBreakLength,
        timerLength,
        setTimerLength,
        isRunning,
    } = useContext(TimerContext);

    const animations = fadeInScale;

    return (
        <div className={styles.TimerControl}>
            <div className={styles.TimeControlTimer}>
                <div>
                    <span className={styles.Label} id="session-label">
                        Focus
                    </span>
                    <div className={styles.Length}>
                        <span id="session-length">{timerLength}</span> min
                    </div>
                    <AnimatePresence exitBeforeEnter>
                        <motion.div
                            key={isRunning}
                            initial="pageInitial"
                            animate="pageAnimate"
                            exit="pageExit"
                            variants={animations}
                        >
                            {!isRunning ? (
                                <div className={styles.TimerController}>
                                    <span
                                        id="session-increment"
                                        className={styles.Inc}
                                        onClick={() =>
                                            setTimerLength(timerLength + 5)
                                        }
                                    ></span>
                                    <span
                                        id="session-decrement"
                                        className={styles.Dec}
                                        onClick={() =>
                                            setTimerLength(timerLength - 5)
                                        }
                                    ></span>
                                </div>
                            ) : (
                                <div
                                    className={styles.TimerControlPlaceholder}
                                ></div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            <div className={styles.TimerControlDivider}></div>
            <div className={styles.TimeControlBreak}>
                <div>
                    <span className={styles.Label} id="break-label">
                        Break
                    </span>
                    <div className={styles.Length}>
                        <span id="break-length">{breakLength}</span> min
                    </div>
                    <AnimatePresence exitBeforeEnter>
                        <motion.div
                            key={isRunning}
                            initial="pageInitial"
                            animate="pageAnimate"
                            exit="pageExit"
                            variants={animations}
                        >
                            {!isRunning ? (
                                <div className={styles.TimerController}>
                                    <span
                                        id="break-increment"
                                        className={styles.Inc}
                                        onClick={() =>
                                            setBreakLength(breakLength + 5)
                                        }
                                    ></span>
                                    <span
                                        id="break-decrement"
                                        className={styles.Dec}
                                        onClick={() =>
                                            setBreakLength(breakLength - 5)
                                        }
                                    ></span>
                                </div>
                            ) : (
                                <div
                                    className={styles.TimerControlPlaceholder}
                                ></div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default TimerControl;
