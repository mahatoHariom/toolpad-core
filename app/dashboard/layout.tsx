"use client"
import * as React from "react";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import { useActivePage } from "@toolpad/core";
// import { useParams } from "next/";
import invariant from "invariant";
import { useParams } from "next/navigation";

// Dashboard layout for all dashboard pages
// Handles sidebar, navigation, and propagates breadcrumbs
export default function DashboardPagesLayout({ children }: { children: React.ReactNode }) {
  const params = useParams<{ id?: string }>();
  const activePage = useActivePage();
  invariant(activePage, 'No navigation match');

  let breadcrumbs = [...activePage.breadcrumbs];
  if (params.id !== undefined && params.id !== null && params.id !== "") {
    const title = `${params.id}`;
    const path = `${activePage.path}/${params.id}`;
    breadcrumbs = [...breadcrumbs, { title, path }];
  }

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
