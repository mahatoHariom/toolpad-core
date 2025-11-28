import { useActivePage } from "@toolpad/core";
import { useParams } from "next/navigation";

export function useDashboardBreadcrumbs() {
  const params = useParams<{ id?: string }>();
  const activePage = useActivePage();

  if (!activePage) return [];

  let breadcrumbs = [...activePage.breadcrumbs];
  if (params.id !== undefined && params.id !== null && params.id !== "") {
    const title = `${params.id}`;
    const path = `${activePage.path}/${params.id}`;
    breadcrumbs = [...breadcrumbs, { title, path }];
  }
  return breadcrumbs;
}
