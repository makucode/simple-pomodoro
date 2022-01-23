import { createContext, useEffect, useState } from "react";

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
    const [isRunning, setIsRunning] = useState(false);
    const [isPause, setIsPause] = useState(false);
    const [isBreak, setIsBreak] = useState(false);

    const [timerLength, setTimerLength] = useState(25);
    const [breakLength, setBreakLength] = useState(5);

    const [timeLeftMinutes, setTimeLeftMinutes] = useState(timerLength);
    const [timeLeftSeconds, setTimeLeftSeconds] = useState(0);

    let clockTimeout = null;

    // Setters & Getters

    const timerSetter = (newTime) => {
        if (newTime <= 5) setTimerLength(5);
        else setTimerLength(newTime);
    };

    const breakSetter = (newTime) => {
        if (newTime <= 5) setBreakLength(5);
        else setBreakLength(newTime);
    };

    const runningSetter = (value) => {
        if (value) {
            setIsPause(false);
            setIsRunning(true);
        } else {
            setIsRunning(false);
        }
    };

    const stopTimer = () => {
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

    // Clock Logic

    const setTimeLeft = () => {
        if (timeLeftMinutes + timeLeftSeconds > 0) {
            if (timeLeftSeconds === 0) {
                setTimeLeftSeconds(59);
                setTimeLeftMinutes(timeLeftMinutes - 1);
            } else setTimeLeftSeconds(timeLeftSeconds - 1);
        } else {
            setTimeLeftMinutes(isBreak ? timerLength : breakLength);
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
