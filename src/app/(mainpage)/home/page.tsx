import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { SidebarTrigger } from "@/components/ui/sidebar";
export default function MainPage() {
  return (
    <div>
      <ResizablePanelGroup className="min-h-screen" direction="horizontal">
        <ResizablePanel key={1}>
          <div className="border-b">
            <SidebarTrigger />
          </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo soluta
          eum ea necessitatibus est consectetur nesciunt ad, assumenda possimus
          illum a veritatis! Corrupti nemo distinctio dolorum ex harum itaque
          debitis?
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
          key={2}
          minSize={15}
          maxSize={30}
          className="bg-amber-50 opacity-55 backdrop-blur-lg"
          defaultSize={15}
        >
          Three
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
