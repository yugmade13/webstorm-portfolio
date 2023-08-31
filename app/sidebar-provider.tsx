'use client';

import { createContext, useState } from 'react';

export const SidebarContext = createContext({});

export default function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isFolderOpen, setIsFolderOpen] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);

  return (
    <SidebarContext.Provider value={{
      isFolderOpen,
      setIsFolderOpen,
      isSidebarOpen,
      setIsSidebarOpen,
      isTerminalOpen,
      setIsTerminalOpen
    }}>
      {children}
    </SidebarContext.Provider>
  );
}