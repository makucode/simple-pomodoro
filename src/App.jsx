import { AnimatePresence, motion } from "framer-motion";
import Timer from "./components/Timer";
import { TimerProvider } from "./contexts/TimerContext";
import { fadeInUp } from "./utils/animations";

const App = () => {
    const animations = fadeInUp;

    return (
        <div className="App">
            <AnimatePresence exitBeforeEnter>
                <motion.div
                    transition={{ duration: 0.5 }}
                    initial="pageInitial"
                    animate="pageAnimate"
                    exit="pageExit"
                    variants={animations}
                >
                    <TimerProvider>
                        <Timer />
                    </TimerProvider>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default App;
