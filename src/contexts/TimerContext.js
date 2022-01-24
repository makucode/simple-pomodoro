import { createContext, useEffect, useState } from "react";
import fx1 from "../assets/soundfx-1.mp3";
import fx2 from "../assets/soundfx-2.mp3";
import useSound from "use-sound";

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
    const [isRunning, setIsRunning] = useState(false);
    const [isPause, setIsPause] = useState(false);
    const [isBreak, setIsBreak] = useState(false);

    const [timerLength, setTimerLength] = useState(
        parseInt(localStorage.getItem("timerLength")) || 25
    );
    const [breakLength, setBreakLength] = useState(
        parseInt(localStorage.getItem("breakLength")) || 5
    );

    const [timeLeftMinutes, setTimeLeftMinutes] = useState(timerLength);
    const [timeLeftSeconds, setTimeLeftSeconds] = useState(0);

    // Id of setTimeout of current instance/render

    let clockTimeout = null;

    // Sound

    const [playEnd] = useSound(fx1, { volume: 0.4 });
    const [playGo] = useSound(fx2, { volume: 0.4 });

    // Setters & Getters

    const timerSetter = (inputTime) => {
        let newTime = inputTime;
        if (inputTime <= 5) newTime = 5;
        setTimerLength(newTime);

        localStorage.setItem("timerLength", newTime);
    };

    const breakSetter = (inputTime) => {
        let newTime = inputTime;
        if (inputTime <= 5) newTime = 5;
        setBreakLength(newTime);

        localStorage.setItem("breakLength", newTime);
    };

    const runningSetter = (shouldRun) => {
        if (shouldRun) {
            setIsPause(false);
            setIsRunning(true);
        } else {
            setIsRunning(false);
        }
    };

    const stopTimer = () => {
        if (!isRunning) {
            timerSetter(25);
            breakSetter(5);
        }
        clockTimeout && clearTimeout(clockTimeout);
        setIsRunning(false);
        setIsBreak(false);
        setIsPause(false);
        setTimeLeftMinutes(timerLength);
        setTimeLeftSeconds(0);
    };

    const togglePause = () => {
        clockTimeout && clearTimeout(clockTimeout);
        setIsPause(!isPause);
    };

    // Update time Remaining when timer length changes

    useEffect(() => setTimeLeftMinutes(timerLength), [timerLength]);

    // Clock Logic

    const setTimeLeft = () => {
        if (timeLeftMinutes + timeLeftSeconds > 0) {
            if (timeLeftSeconds === 0) {
                setTimeLeftSeconds(59);
                setTimeLeftMinutes(timeLeftMinutes - 1);
            } else setTimeLeftSeconds(timeLeftSeconds - 1);
        } else {
            setTimeLeftMinutes(isBreak ? timerLength : breakLength);
            isBreak ? playGo() : playEnd();
            setTimeLeftSeconds(0);
            setIsBreak(!isBreak);
        }
    };

    useEffect(() => {
        if (isRunning && !isPause) {
            clockTimeout = setTimeout(setTimeLeft, 1000);
        }
    }, [isRunning, isPause, timeLeftSeconds, isBreak]);

    return (
        <TimerContext.Provider
            value={{
                timerLength,
                setTimerLength: timerSetter,
                breakLength,
                setBreakLength: breakSetter,
                isRunning,
                setIsRunning: runningSetter,
                isPause,
                togglePause,
                isBreak,
                timeLeftMinutes,
                timeLeftSeconds,
                stopTimer,
            }}
        >
            {children}
        </TimerContext.Provider>
    );
};
