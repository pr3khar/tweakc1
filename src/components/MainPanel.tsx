import {
  C1Chat,
  useThreadManager,
  useThreadListManager,
  ThemeProvider,
} from "@thesysai/genui-sdk";
import { toast } from "sonner";
import { useEffect } from "react";
import { MOCK_THREADS, MOCK_MESSAGES } from "../utils/mockData";

interface MainPanelProps {
  mode?: "light" | "dark";
  theme?: Record<string, any>;
  darkTheme?: Record<string, any>;
  customCss?: string;
}

export function MainPanel({
  mode = "light",
  theme,
  darkTheme,
  customCss,
}: MainPanelProps) {
  const threadListManager = useThreadListManager({
    fetchThreadList: async () => {
      return MOCK_THREADS;
    },
    createThread: async () => {
      toast.info("This is a demo - try the playground at console.thesys.dev");
      throw new Error("Cannot create thread in demo mode");
    },
    deleteThread: async () => {
      // No-op
    },
    updateThread: async (thread) => {
      return thread;
    },
    onSelectThread: () => {
      // No-op
    },
    onSwitchToNew: () => {
      // No-op
    },
  });

  const threadManager = useThreadManager({
    threadListManager,
    loadThread: async (threadId) => {
      return MOCK_MESSAGES[threadId] || [];
    },
    onUpdateMessage: async () => {
      // No-op
    },
    processMessage: async () => {
      toast.info("This is a demo - try the playground at console.thesys.dev");
      // Return a mock response that will trigger the toast but not actually process
      throw new Error("Backend not available in demo mode");
    },
  });

  // Auto-select first thread on mount
  useEffect(() => {
    if (
      threadListManager.threads.length > 0 &&
      !threadListManager.selectedThreadId
    ) {
      threadListManager.selectThread(threadListManager.threads[0].threadId);
    }
  }, [
    threadListManager.threads.length,
    threadListManager.selectedThreadId,
    threadListManager,
  ]);

  // Inject custom CSS into document head
  useEffect(() => {
    const styleId = "custom-css-override";
    let styleElement = document.getElementById(styleId) as HTMLStyleElement;

    if (customCss) {
      if (!styleElement) {
        styleElement = document.createElement("style");
        styleElement.id = styleId;
        document.head.appendChild(styleElement);
      }
      styleElement.textContent = customCss;
    } else {
      if (styleElement) {
        styleElement.remove();
      }
    }

    return () => {
      const el = document.getElementById(styleId);
      if (el) {
        el.remove();
      }
    };
  }, [customCss]);

  return (
    <main className="flex-1 relative">
      <div className="absolute inset-0">
        <ThemeProvider mode={mode} theme={theme} darkTheme={darkTheme}>
          <C1Chat
            scrollVariant="once"
            threadManager={threadManager}
            threadListManager={threadListManager}
          />
        </ThemeProvider>
      </div>
    </main>
  );
}
