import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import { createBrowserHistory } from "history";
import { ReactPlugin } from "@microsoft/applicationinsights-react-js";

const browserHistory = createBrowserHistory({ basename: "" });
var reactPlugin = new ReactPlugin();

export const appInsights = new ApplicationInsights({
  config: {
    connectionString:
      "InstrumentationKey=37ea6b54-c38a-4707-a388-f183d456fb67;IngestionEndpoint=https://westeurope-5.in.applicationinsights.azure.com/;LiveEndpoint=https://westeurope.livediagnostics.monitor.azure.com/",
    autoTrackPageVisitTime: true,
    enableAutoRouteTracking: false, //use for react apps
    extensionConfig: {
      [reactPlugin.identifier]: { history: browserHistory },
    },
  },
});
