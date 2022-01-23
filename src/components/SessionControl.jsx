import PlayIcon from "./icons/PlayIcon";
import styles from "../styles/components/SessionControl.module.scss";
import PauseIcon from "./icons/PauseIcon";
import StopIcon from "./icons/StopIcon";

const SessionControl = () => {
    return (
        <div className={styles.SessionControl}>
            <PlayIcon />
            <PauseIcon />
            <StopIcon />
        </div>
    );
};

export default SessionControl;
