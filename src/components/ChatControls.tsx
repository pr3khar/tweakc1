import { ColorPicker } from "./ColorPicker";
import { Section } from "./Section";
import { ThemeCustomization, ThemeMode } from "../types/theme";

interface ChatControlsProps {
  chatColors: ThemeCustomization["chatColors"];
  onChatColorChange: (
    key: keyof ThemeCustomization["chatColors"],
    value?: string
  ) => void;
  mode: ThemeMode;
}

export function ChatControls({
  chatColors,
  onChatColorChange,
  mode,
}: ChatControlsProps) {
  return (
    <Section title="Chat UI Colors" defaultOpen={true}>
      <ColorPicker
        label="Container Background"
        value={chatColors.containerBg}
        onChange={(color) => onChatColorChange("containerBg", color)}
        cssVariable="--crayon-chat-container-bg"
        mode={mode}
      />
      <ColorPicker
        label="Assistant Background"
        value={chatColors.assistantBg}
        onChange={(color) => onChatColorChange("assistantBg", color)}
        cssVariable="--crayon-chat-assistant-response-bg"
        mode={mode}
      />
      <ColorPicker
        label="Assistant Text"
        value={chatColors.assistantText}
        onChange={(color) => onChatColorChange("assistantText", color)}
        cssVariable="--crayon-chat-assistant-response-text"
        mode={mode}
      />
      <ColorPicker
        label="User Background"
        value={chatColors.userBg}
        onChange={(color) => onChatColorChange("userBg", color)}
        cssVariable="--crayon-chat-user-response-bg"
        mode={mode}
      />
      <ColorPicker
        label="User Text"
        value={chatColors.userText}
        onChange={(color) => onChatColorChange("userText", color)}
        cssVariable="--crayon-chat-user-response-text"
        mode={mode}
      />
    </Section>
  );
}
