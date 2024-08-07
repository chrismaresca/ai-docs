// Ai Instance Context Provider
import { SidebarReferencesProvider, EditorExpansionProvider, SidebarTogglingProvider } from "@/context";

// Import the Sidebar
import Sidebar from "@/components/EditorSidebarSections";

export default function EditorLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarTogglingProvider>
      <SidebarReferencesProvider>
        <EditorExpansionProvider>
          <>{children}</>
        </EditorExpansionProvider>
      </SidebarReferencesProvider>
    </SidebarTogglingProvider>
  );
}
