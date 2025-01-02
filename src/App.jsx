import { useState } from "react";
import DarkCastleVideo from "./DarkCastleVideo";
import ShadowFallsVideo from "./ShadowFallsVideo";

function App() {
  const [currentScene, setCurrentScene] = useState("dark");

  return (
    <div>
      {currentScene === "dark" ? <DarkCastleVideo /> : <ShadowFallsVideo />}
      <button
        onClick={() =>
          setCurrentScene(currentScene === "dark" ? "light" : "dark")
        }
        className="scene-toggle"
      >
        Switch to {currentScene === "dark" ? "Shadow Falls" : "Dark Castle"}
      </button>
    </div>
  );
}

export default App;
