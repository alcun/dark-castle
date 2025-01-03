import { useState } from "react";
import DarkCastleVideo from "./DarkCastleVideo";
import ShadowFallsVideo from "./ShadowFallsVideo";
import BlackwoodInfirmaryVideo from "./BlackwoodInfirmaryVideo";

function App() {
  const [currentScene, setCurrentScene] = useState("dark");

  const getNextScene = (current) => {
    const scenes = {
      dark: "shadow",
      shadow: "blackwood",
      blackwood: "dark"
    };
    return scenes[current];
  };

  const getSceneTitle = (scene) => {
    const titles = {
      dark: "Dark Castle",
      shadow: "Shadow Falls",
      blackwood: "Blackwood Infirmary"
    };
    return titles[scene];
  };

  const renderScene = () => {
    switch (currentScene) {
      case "dark":
        return <DarkCastleVideo />;
      case "shadow":
        return <ShadowFallsVideo />;
      case "blackwood":
        return <BlackwoodInfirmaryVideo />;
      default:
        return <DarkCastleVideo />;
    }
  };

  return (
    <div>
      {renderScene()}
      <div className="button-container">
        <button
          onClick={() => setCurrentScene(getNextScene(currentScene))}
          className="scene-toggle"
        >
          Switch to {getSceneTitle(getNextScene(currentScene))}
        </button>
      </div>
    </div>
  );
}

export default App;