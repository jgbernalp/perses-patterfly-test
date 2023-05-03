import { usePlugin, PanelProps } from "@perses-dev/plugin-system";
import { UnknownSpec } from "@perses-dev/core";

export interface PanelContentProps extends PanelProps<UnknownSpec> {
  panelPluginKind: string;
}

export function PanelContent(props: PanelContentProps) {
  const { panelPluginKind, contentDimensions, ...others } = props;
  const { data: plugin, isLoading } = usePlugin("Panel", panelPluginKind, {
    useErrorBoundary: true,
  });
  const PanelComponent = plugin?.PanelComponent;

  if (isLoading) {
    return <div style={{ minHeight: "290px" }}>Loading...</div>;
  }

  if (PanelComponent === undefined) {
    throw new Error(
      `Missing PanelComponent from panel plugin for kind '${panelPluginKind}'`
    );
  }

  return <PanelComponent {...others} contentDimensions={contentDimensions} />;
}
