import { ErrorBoundary } from "react-error-boundary";
import { ErrorAlert } from "./components/ErrorAlert";
import { DashboardsDropDown } from "./components/DashboardsDropDown";
import { IntervalRefreshDropDown } from "./components/IntervalRefreshDropDown";
import { TimeRangeDropDown } from "./components/TimeRangeDropdown";
import { Dashboard } from "./components/Dashboard";

export function DashboardApp() {
  return (
    <div>
      <div>
        <DashboardsDropDown />
      </div>
      <TimeRangeDropDown />
      <IntervalRefreshDropDown />

      <ErrorBoundary FallbackComponent={ErrorAlert}>
        <Dashboard />
      </ErrorBoundary>
    </div>
  );
}
