import "./App.css";
import Settings from "./components/Settings";
import Timer from "./components/Timer";
import { useState } from "react";
import SettingsContext from "./components/Settings.Context";

function App() {
  const [showSettings, setShowSettings] = useState(true);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <main>
      <SettingsContext.Provider
        value={{
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
