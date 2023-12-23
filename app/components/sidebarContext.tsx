"use client";
import { ReactNode, createContext, useState } from "react";

const initialValue = {
  isSidebarCollapsed: false,
  toggleSidebarCollapseHandler: () => {},
};

const SidebarContext = createContext(initialValue);

interface Props {
  children: ReactNode | ReactNode[];
}

const SidebarProvider = ({ children }: Props) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(true);

  const toggleSidebarCollapseHandler = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  return (
    <SidebarContext.Provider
      value={{ isSidebarCollapsed, toggleSidebarCollapseHandler }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarProvider, SidebarContext };
