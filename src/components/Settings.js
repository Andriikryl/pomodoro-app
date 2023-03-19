import ReactSlider from "react-slider";
import "../slider.css";

function Settings() {
  return (
    <div className="set-box">
      <label>work minutes</label>
      <ReactSlider
        className={"slider"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={45}
        min={1}
        max={120}
      />
      <label>break minutes</label>
      <ReactSlider
        className={"slider-break"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={45}
        min={1}
        max={120}
      />
    </div>
  );
}

export default Settings;
