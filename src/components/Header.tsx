import { Button, IconButton, SwitchItem } from "@crayonai/react-ui";
import {
  Sparkles,
  Undo,
  Redo,
  RotateCcw,
  MessageCircle,
  Share2,
  Download,
} from "lucide-react";

interface HeaderProps {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

export function Header({ theme, setTheme }: HeaderProps) {
  return (
    <header
      className="flex items-center justify-between"
      style={{
        backgroundColor: "var(--bg-tertiary)",
        borderColor: "var(--border-primary)",
      }}
    >
      <div className="flex items-center">
        <div
          className="flex items-center"
          style={{ color: "var(--text-primary)" }}
        >
          <span className="flex items-center justify-center">
            <Sparkles size={16} />
          </span>
          tweakc1
        </div>
      </div>
      <div className="flex items-center">
        <SwitchItem
          checked={theme === "dark"}
          onChange={(checked) => setTheme(checked ? "dark" : "light")}
        />
        <IconButton icon={<Undo size={16} />} variant="tertiary" />
        <IconButton icon={<Redo size={16} />} variant="tertiary" />
        <Button variant="tertiary" iconLeft={<RotateCcw size={16} />}>
          Reset
        </Button>
        <Button
          variant="tertiary"
          iconLeft={<MessageCircle size={16} />}
          onClick={() =>
            window.open("https://discord.com/invite/Pbv5PsqUSv", "_blank")
          }
        >
          Discord
        </Button>
        <Button variant="secondary" iconLeft={<Share2 size={16} />}>
          Share
        </Button>
        <Button variant="primary" iconLeft={<Download size={16} />}>
          Export
        </Button>
      </div>
    </header>
  );
}
