import { ToolboxClient } from "@/components/ToolboxClient";
import { site } from "@/content/site";

export function Toolbox() {
  return (
    <ToolboxClient groups={site.toolbox.groups} />
  );
}
