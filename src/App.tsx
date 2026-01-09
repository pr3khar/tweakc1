import { useState } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { MainPanel } from "./components/MainPanel";

interface AppProps {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

function App({ theme, setTheme }: AppProps) {
  const [sidebarTab, setSidebarTab] = useState("colors");

  return (
    <div className="w-screen h-screen flex flex-col">
      <Header theme={theme} setTheme={setTheme} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar value={sidebarTab} onValueChange={setSidebarTab} />
        <MainPanel mode={theme} />
      </div>
    </div>
  );
}

export default App;
