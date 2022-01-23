import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";
import { fadeInBlur } from "../utils/animations.js";
import styles from "../styles/components/Caption.module.scss";

const Caption = () => {
    const { isRunning, isBreak, isPause } = useContext(TimerContext);

    const animations = fadeInBlur;

    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                key={[isRunning, isBreak, isPause]}
                initial="pageInitial"
                animate="pageAnimate"
                variants={animations}
            >
                <h1
                    id="timer-label"
                    className={`${styles.Caption} ${
                        isRunning && styles.CaptionRunning
                    } ${isRunning && isBreak && styles.CaptionBreak} ${
                        isRunning && isPause && styles.CaptionPause
                    }`}
                >
                    {isRunning && !isBreak && !isPause && "Focus"}
                    {isRunning && isBreak && !isPause && "Break"}
                    {isRunning && isPause && "Paused"}
                    {!isRunning && "Get shit done!"}
                </h1>
            </motion.div>
        </AnimatePresence>
    );
};

export default Caption;
