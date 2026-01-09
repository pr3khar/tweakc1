import { Tabs, TabsList, TabsTrigger, TabsContent } from "@crayonai/react-ui";
import { Sparkles } from "lucide-react";

interface SidebarProps {
  value: string;
  onValueChange: (value: string) => void;
}

export function Sidebar({ value, onValueChange }: SidebarProps) {
  return (
    <aside
      className="w-140 overflow-y-auto flex flex-col"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border-primary)",
      }}
    >
      <Tabs value={value} onValueChange={onValueChange}>
        <TabsList>
          <TabsTrigger value="colors" text="Colors" />
          <TabsTrigger value="typography" text="Typography" />
          <TabsTrigger value="other" text="Other" />
          <TabsTrigger value="generate" text="Generate" icon={<Sparkles />} />
        </TabsList>
        <TabsContent value="generate">
          <div style={{ color: "var(--text-secondary)" }}>
            AI generation controls will appear here
          </div>
        </TabsContent>
        <TabsContent value="colors">
          <div style={{ color: "var(--text-secondary)" }}>
            Color controls will appear here
          </div>
        </TabsContent>
        <TabsContent value="typography">
          <div style={{ color: "var(--text-secondary)" }}>
            Typography controls will appear here
          </div>
        </TabsContent>
        <TabsContent value="other">
          <div style={{ color: "var(--text-secondary)" }}>
            Other controls will appear here
          </div>
        </TabsContent>
      </Tabs>
    </aside>
  );
}
