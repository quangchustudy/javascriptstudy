
import { ECSClient, UpdateServiceCommand } from "@aws-sdk/client-ecs"; // ES Modules import
// const { ECSClient, UpdateServiceCommand } = require("@aws-sdk/client-ecs"); // CommonJS import

const CLUSTER_NAME = 'test';
const SERVICE_NAME = ['product-composite', 'product-service', 'review-service', 'recommendation-service','alb-product-composite-service','frontend-service','backend_service'];

const test = async(service) => {
    const client = new ECSClient();
    const command = new UpdateServiceCommand(service);
    const response = await client.send(command);
    return response;
}

export const handler = async(event) => {
    // TODO implement
//     const input = { // UpdateServiceRequest
//   cluster: "test",
//   service: "product-composite", // required
//   desiredCount: event.desiredCount,
// }
// const command = new UpdateServiceCommand(input);
// const response = await client.send(command);
//     // const response = {
//     //     statusCode: 200,
//     //     body: JSON.stringify('Hello from Lambda!'),
//     // };
//     return response;
    console.log(`Deisred task count : ${event.desiredCount}`);
    const ecs_services = SERVICE_NAME.map((serviceName) => ({service: serviceName, cluster: CLUSTER_NAME,  desiredCount: event.desiredCount}));
    try {
        //const data = await ecs.updateService(ecs_services[0]).promise();
        const data = await Promise.all(ecs_services.map(service => test(service)));
        console.log(data);
    } catch (err) {
        console.log(`Failed to set desired task count to ${event.desiredCount} for services: ${ecs_services.map(service => service.service)}`);
        console.log(err);
        return err;
    }
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `Successfully set desired task count to ${event.desiredCount} for services: ${ecs_services.map(service => service.service)}`,})
    }
};
