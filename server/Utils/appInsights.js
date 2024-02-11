const appInsights = require("applicationinsights");

exports.initAppInsights = function initAppInsights() {
  appInsights
    .setup(
      "InstrumentationKey=37ea6b54-c38a-4707-a388-f183d456fb67;IngestionEndpoint=https://westeurope-5.in.applicationinsights.azure.com/;LiveEndpoint=https://westeurope.livediagnostics.monitor.azure.com/"
    )
    .start();
  appInsights.defaultClient.config.samplingPercentage = 100;
  appInsights.defaultClient.commonProperties = {
    user: process.env.apiUser,
    storageAccName: process.env.storageAccName,
    containerNameData: process.env.containerNameData,
    containerNameLogs: process.env.containerNameLogs,
  };
  appInsights.start();
};

exports.trackEvent = function trackEvent(req, name, properties) {
  if (isLocalhost(req)) {
    console.log(`trackEvent: ${name} ${JSON.stringify(properties)}`);
    return;
  }

  let client = appInsights.defaultClient;
  client.trackEvent({
    name: name,
    properties: properties,
  });
};

exports.trackMetric = function trackMetric(req, name, value) {
  if (isLocalhost(req)) {
    console.log(`trackMetric: ${name} ${value}`);
    return;
  }

  let client = appInsights.defaultClient;
  client.trackMetric({ name: name, value: value });
};

exports.trackException = function trackException(req, err, properties) {
  if (isLocalhost(req)) {
    console.log(`trackException: ${err} ${properties}`);
    return;
  }
  let client = appInsights.defaultClient;
  client.trackException({
    exception: err,
    properties: properties,
  });
};

function isLocalhost(req) {
  var ip = req.connection.remoteAddress;
  var host = req.get("host");
  return (
    ip === "127.0.0.1" ||
    ip === "::ffff:127.0.0.1" ||
    ip === "::1" ||
    host.indexOf("localhost") !== -1
  );
}
