import { useContext } from "react";
import { TimerContext } from "../../contexts/TimerContext";

const PauseIcon = () => {
    const { isRunning, isPause, togglePause } = useContext(TimerContext);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="20px"
            onClick={() => togglePause(true)}
            className={isRunning && isPause && "Pause"}
        >
            <path d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z" />
        </svg>
    );
};

export default PauseIcon;
