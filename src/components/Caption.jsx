import { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";
import styles from "../styles/components/Caption.module.scss";

const Caption = () => {
    const { isRunning, isBreak, isPause } = useContext(TimerContext);
    return (
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
    );
};

export default Caption;
