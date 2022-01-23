import Timer from "./components/Timer";
import { TimerProvider } from "./contexts/TimerContext";

const App = () => {
    return (
        <div className="App">
            <TimerProvider>
                <Timer />
            </TimerProvider>
        </div>
    );
};

export default App;
