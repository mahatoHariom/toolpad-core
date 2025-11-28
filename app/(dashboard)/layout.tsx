
import * as React from "react";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";

export default function DashboardPagesLayout({ children }: { children: React.ReactNode }) {
	

  return (
    <DashboardLayout>
      {/*
        - You can use props like disableCollapsibleSidebar, defaultSidebarCollapsed, hideNavigation as needed
        - See Toolpad Core docs for more options
      */}
      <main style={{ flexGrow: 1, padding: '16px' }}>
        {children}
      </main>
    </DashboardLayout>
  );
}
