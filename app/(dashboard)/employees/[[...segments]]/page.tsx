"use client";

import { Crud } from "@toolpad/core/Crud";
// import { useParams } from 'next/navigation';
import {
  employeesDataSource,
  Employee,
  employeesCache,
} from "../../../mocks/employees";
import CustomDataGrid from "../../../components/CustomDataGrid";
import { PageContainer } from "@toolpad/core";
import { useDashboardBreadcrumbs } from "@/app/hooks/useDashboardBreadcrumbs";
import invariant from "invariant";

export default function EmployeesCrudPage() {
  const breadcumbs=useDashboardBreadcrumbs()
  // invariant(breadcumbs,"breadcrumbs is required");
  // const params = useParams();

  return (
    <PageContainer breadcrumbs={breadcumbs}>
      <Crud<Employee>
        dataSource={employeesDataSource}
        dataSourceCache={employeesCache}
        rootPath="/employees"
        initialPageSize={20}
        defaultValues={{ title: "New Employee" }}
        // pageTitles={{
        //   show: `Employee ${employeeId}`,
        //   create: 'New Employee',
        //   edit: `Employee ${employeeId} - Edit`,
        // }}
        slots={{
          list: {
            dataGrid: CustomDataGrid,
          },
        }}
      />
    </PageContainer>
  );
}
