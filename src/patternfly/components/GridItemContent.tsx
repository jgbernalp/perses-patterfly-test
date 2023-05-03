import { PanelGroupItemId, usePanel } from "@perses-dev/dashboards";
import { Panel } from "./Panel";
import { DataQueriesProvider } from "@perses-dev/plugin-system";
import { QueryDefinition } from "@perses-dev/core";

export interface GridItemContentProps {
  panelGroupItemId: PanelGroupItemId;
}

export function GridItemContent(props: GridItemContentProps) {
  const { panelGroupItemId } = props;
  const panelDefinition = usePanel(panelGroupItemId);
  const {
    spec: { queries },
  } = panelDefinition;

  const queryDefinitions = queries ?? [];
  const definitions = queryDefinitions.map((query: QueryDefinition) => ({
    kind: query.spec.plugin.kind,
    spec: query.spec.plugin.spec,
  }));

  return (
    <DataQueriesProvider definitions={definitions}>
      <Panel definition={panelDefinition} />
    </DataQueriesProvider>
  );
}
