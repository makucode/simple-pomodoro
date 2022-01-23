import React from "react";
import GithubIcon from "./icons/GitHubIcon";
import styles from "../styles/components/Credits.module.scss";

const Credits = () => {
    return (
        <div className={styles.Credits}>
            <span>
                by <a href="https://makuco.de">makucode</a>
            </span>
            <a
                href="https://github.com/makucode/simple-pomodoro"
                target="_blank"
                rel="noreferrer"
            >
                <GithubIcon />
            </a>
        </div>
    );
};

export default Credits;
