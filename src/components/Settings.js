import { useContext } from "react";
import ReactSlider from "react-slider";
import "../slider.css";
import BackButton from "./BackButton";
import SettingsContext from "./SettingsContext";

function Settings() {
  const settingsInfo = useContext(SettingsContext);
  return (
    <div className="set-box">
      <label>work {settingsInfo.workMinutes}: 00</label>
      <ReactSlider
        className={"slider"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={settingsInfo.workMinutes}
        onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      <label>break {settingsInfo.breakMinutes}:00</label>
      <ReactSlider
        className={"slider-break"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={settingsInfo.breakMinutes}
        onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <div>
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
      </div>
    </div>
  );
}

export default Settings;
