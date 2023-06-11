//create a event handler for aws lambda to set ecs task of a service to zero
//test
// import { ECS } from 'aws-sdk';
const AWS = require("aws-sdk");
const ecs = new AWS.ECS();
const lambda = new AWS.Lambda();
const CLUSTER_NAME = "test";
const SERVICE_NAME = [
  "product-composite",
  "product-service",
  "review-service",
  "recommendation-service",
  "alb-product-composite-service",
  "frontend-service",
  "backend_service",
];

module.exports.handler = async (event, context) => {
  console.log(`event: ${JSON.stringify(event)}`);
  console.log(`Deisred task count : ${event.desiredCount}`);
  const ecs_services = SERVICE_NAME.map((serviceName) => ({
    service: serviceName,
    cluster: CLUSTER_NAME,
    desiredCount: event.desiredCount,
  }));

  try {
    //database level
    const childFunctionParams = {
      FunctionName: "myManualFunc-stopStartRDS",
      InvocationType: "Event", // Change to 'RequestResponse' if you want to wait for the child function's response
      Payload: JSON.stringify({
        action: event.action,
        clusterIdentifiers: event.databases,
      }), // Pass any data you want to the child Lambda function
    };

    const response = await lambda.invoke(childFunctionParams).promise();

    console.log("Child Lambda invocation response:", response);

    //const data = await ecs.updateService(ecs_services[0]).promise();
    const data = await Promise.all(
      ecs_services.map((service) => ecs.updateService(service).promise())
    );
    console.log(data);
  } catch (err) {
    console.log(
      `Failed to set desired task count to ${
        event.desiredCount
      } for services: ${ecs_services.map((service) => service.service)}`
    );
    console.log(err);
    return err;
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Successfully set desired task count to ${
        event.desiredCount
      } for services: ${ecs_services.map((service) => service.service)}`,
    }),
  };
};
