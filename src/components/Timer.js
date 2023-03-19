import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PauseButton from "./PauseButton";
import PlayButton from "./PlayButton";
import SettingsButton from "./SettingsButton";

const red = "#e63946";
const green = "#3a5a40";

function Timer() {
  return (
    <div>
      <CircularProgressbar
        value={60}
        text={`60%`}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: red,
          trailColor: "#f1faee",
        })}
      />
      <div>
        <PlayButton />
        <PauseButton />
      </div>
      <div>
        <SettingsButton />
      </div>
    </div>
  );
}

export default Timer;
