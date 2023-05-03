import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import { useDatasourceApi } from "../dashboardsApi";
import { PersesDashboardProviders } from "../perses/providers/PersesDashboardProvider";
import { sampleDashboard } from "../sampleDashboard";
import { ViewDashboard } from "./ViewDashboard";

import "@patternfly/react-core/dist/styles/base.css";

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
