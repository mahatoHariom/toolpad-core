"use client";
import { Crud } from "@toolpad/core/Crud";
import { PageContainer } from "@toolpad/core";
// import { useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useDashboardBreadcrumbs } from "@/app/hooks/useDashboardBreadcrumbs";
import CustomDataGrid from "../../CustomDataGrid";
import { createTasksDataSource, Task } from "./datasource";

export default function TasksView() {
  const breadcrumbs = useDashboardBreadcrumbs();
  const queryClient = useQueryClient();

  const tasksDataSource = createTasksDataSource(queryClient);

  return (
    <PageContainer breadcrumbs={breadcrumbs}>
      <Crud<Task>
        dataSource={tasksDataSource}
        rootPath="/tasks"
        initialPageSize={10}
        defaultValues={{ title: "New Task" }}
        slots={{
          list: {
            dataGrid: CustomDataGrid,
          },
        }}
      />
    </PageContainer>
  );
}
