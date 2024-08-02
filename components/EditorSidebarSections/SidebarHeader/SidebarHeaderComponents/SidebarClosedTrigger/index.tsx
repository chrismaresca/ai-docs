import React from 'react';
import { Menu } from 'lucide-react';

interface SidebarClosedTriggerProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarClosedTrigger: React.FC<SidebarClosedTriggerProps> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className={`z-30 px-2.5 ${isSidebarOpen ? "" : "h-[3.5rem]"} inset-x-0 w-full flex flex-row flex-none justify-between items-center mb-[0.65rem]`}>
      {!isSidebarOpen && (
        <button onClick={toggleSidebar}>
          <Menu className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

export default SidebarClosedTrigger;
