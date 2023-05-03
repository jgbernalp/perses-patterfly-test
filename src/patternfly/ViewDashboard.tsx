import {
  DashboardProvider,
  DatasourceStoreProvider,
  TemplateVariableProvider,
  ViewDashboardProps,
} from "@perses-dev/dashboards";
import {
  TimeRangeProvider,
  useInitialTimeRange,
} from "@perses-dev/plugin-system";
import { ErrorBoundary } from "react-error-boundary";
import { DashboardApp } from "./DashboardApp";
import { ErrorAlert } from "./components/ErrorAlert";

export function ViewDashboard({
  dashboardResource,
  datasourceApi,
}: ViewDashboardProps) {
  const { spec } = dashboardResource;
  const dashboardDuration = spec.duration ?? "1h";
  const initialTimeRange = useInitialTimeRange(dashboardDuration);

  return (
    <DatasourceStoreProvider
      dashboardResource={dashboardResource}
      datasourceApi={datasourceApi}
    >
      <DashboardProvider
        initialState={{ dashboardResource, isEditMode: false }}
      >
        <TimeRangeProvider
          initialTimeRange={initialTimeRange}
          enabledURLParams={true}
        >
          <TemplateVariableProvider initialVariableDefinitions={spec.variables}>
            <ErrorBoundary FallbackComponent={ErrorAlert}>
              <DashboardApp />
            </ErrorBoundary>
          </TemplateVariableProvider>
        </TimeRangeProvider>
      </DashboardProvider>
    </DatasourceStoreProvider>
  );
}
