const appInsights = require("applicationinsights");

exports.initAppInsights = function initAppInsights() {
  appInsights.setup("InstrumentationKey=37ea6b54-c38a-4707-a388-f183d456fb67;IngestionEndpoint=https://westeurope-5.in.applicationinsights.azure.com/;LiveEndpoint=https://westeurope.livediagnostics.monitor.azure.com/").start();
  appInsights.defaultClient.config.samplingPercentage = 100;
  appInsights.defaultClient.commonProperties = {
    user: process.env.apiUser,
    storageAccName: process.env.storageAccName,
    containerNameData: process.env.containerNameData,
    containerNameLogs: process.env.containerNameLogs,
  };
  appInsights.start();
};

exports.trackEvent = function trackEvent(name, properties) {
  let client = appInsights.defaultClient;
  client.trackEvent({
    name: name,
    properties: properties,
  });
  console.log("trackEvent: " + name);
  console.log(properties); // For debugging
};

exports.trackMetric = function trackMetric(name, value) {
  let client = appInsights.defaultClient;
  client.trackMetric({ name: name, value: value });
};

exports.trackException = function trackException(err, properties) {
  let client = appInsights.defaultClient;
  client.trackException({
    exception: err,
    properties: properties,
  });

  console.log("trackException:");
  console.log(err);
  console.log(properties);
};
