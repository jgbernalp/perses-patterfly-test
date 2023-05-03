import { usePanelGroupIds } from "@perses-dev/dashboards";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorAlert } from "./ErrorAlert";
import { GridLayout } from "./GridLayout";

export const EmptyDashboard = () => {
  return <p>This dashboard has no panels yet</p>;
};

export function Dashboard() {
  const panelGroupIds = usePanelGroupIds();
  const isEmpty = !panelGroupIds.length;

  return (
    <div style={{ height: "100%" }}>
      <ErrorBoundary FallbackComponent={ErrorAlert}>
        {isEmpty && (
          <div
            style={{ height: "100%", display: "flex", alignItems: "center" }}
          >
            <EmptyDashboard />
          </div>
        )}
        {!isEmpty &&
          panelGroupIds.map((panelGroupId) => (
            <GridLayout key={panelGroupId} panelGroupId={panelGroupId} />
          ))}
      </ErrorBoundary>
    </div>
  );
}
