import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useDatasourceApi } from "../dashboardsApi";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import { ViewDashboard } from "@perses-dev/dashboards";
import { QueryParamProvider } from "use-query-params";
import { PersesDashboardProviders } from "./providers/PersesDashboardProvider";
import { sampleDashboard } from "../sampleDashboard";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const datasourceApi = useDatasourceApi();

function DashboardPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <PersesDashboardProviders>
          <ViewDashboard
            dashboardResource={sampleDashboard}
            datasourceApi={datasourceApi}
            isReadonly
          />
        </PersesDashboardProviders>
      </QueryParamProvider>
    </QueryClientProvider>
  );
}

export default DashboardPage;
