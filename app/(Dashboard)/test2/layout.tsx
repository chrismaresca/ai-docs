// Ai Instance Context Provider
import { AiInstanceProvider, ProjectContextProvider, SidebarReferencesProvider, EditorExpansionProvider, ConversationContextProvider } from "@/context";

export default function EditorLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarReferencesProvider>
      <ProjectContextProvider>
        <ConversationContextProvider>
          <EditorExpansionProvider>
            <AiInstanceProvider>{children}</AiInstanceProvider>
          </EditorExpansionProvider>
        </ConversationContextProvider>
      </ProjectContextProvider>
    </SidebarReferencesProvider>
  );
}
