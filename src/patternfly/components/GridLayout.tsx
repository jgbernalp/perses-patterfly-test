import { Grid, GridItem, gridSpans } from "@patternfly/react-core";
import { ErrorBoundary } from "@perses-dev/components";
import { PanelGroupId, usePanelGroup } from "@perses-dev/dashboards";
import { GridItemContent } from "./GridItemContent";
import { ErrorAlert } from "./ErrorAlert";

export interface GridLayoutProps {
  panelGroupId: PanelGroupId;
}

const toGridSpans = (span: number): gridSpans => {
  return Math.max(1, Math.min(12, Math.ceil(span / 2))) as gridSpans;
};

export function GridLayout(props: GridLayoutProps) {
  const { panelGroupId } = props;
  const groupDefinition = usePanelGroup(panelGroupId);

  return (
    <Grid hasGutter>
      {groupDefinition.itemLayouts.map(({ i, w, h }) => (
        <ErrorBoundary key={i} FallbackComponent={ErrorAlert}>
          <GridItem
            key={`grid-${i}`}
            span={toGridSpans(w)}
            rowSpan={toGridSpans(h)}
          >
            <GridItemContent
              panelGroupItemId={{ panelGroupId, panelGroupItemLayoutId: i }}
            />
          </GridItem>
        </ErrorBoundary>
      ))}
    </Grid>
  );
}
