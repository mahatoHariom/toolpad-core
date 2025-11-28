"use client"
import * as React from "react";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import invariant from "invariant";
import { useDashboardBreadcrumbs } from "./useDashboardBreadcrumbs";

// Dashboard layout for all dashboard pages
// Handles sidebar, navigation, and propagates breadcrumbs
export default function DashboardPagesLayout({ children }: { children: React.ReactNode }) {
	const breadcrumbs = useDashboardBreadcrumbs();
	invariant(breadcrumbs, 'No navigation match');

  return (
    <DashboardLayout>
      {/*
        - You can use props like disableCollapsibleSidebar, defaultSidebarCollapsed, hideNavigation as needed
        - See Toolpad Core docs for more options
      */}
      <PageContainer breadcrumbs={breadcrumbs} style={{ padding: "10px" }}>
        {children}
      </PageContainer>
    </DashboardLayout>
  );
}
