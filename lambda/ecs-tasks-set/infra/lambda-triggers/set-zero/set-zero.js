
//create a event handler for aws lambda to set ecs task of a service to zero
//test
// import { ECS } from 'aws-sdk';
const AWS = require('aws-sdk');
const ecs = new AWS.ECS();
const CLUSTER_NAME = 'test';
const SERVICE_NAME = ['product-composite', 'product-service', 'review-service', 'recommendation-service','alb-product-composite-service','frontend-service','backend_service'];

module.exports.handler = async (event, context) => {
    const ecs_services = SERVICE_NAME.map((serviceName) => ({service: serviceName, cluster: CLUSTER_NAME,  desiredCount: 0}));
    console.log(ecs_services);
    console.log(ecs_services[0]);
    
    try {
        //const data = await ecs.updateService(ecs_services[0]).promise();
        const data = await Promise.all(ecs_services.map(service => ecs.updateService(service).promise()));
        console.log(data);
    } catch (err) {
        console.log(`Failed to set desired task count to 0 for services: ${ecs_services.map(service => service.service)}`);
        console.log(err);
        return err;
    }
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `Successfully set desired task count to 0 for services: ${ecs_services.map(service => service.service)}`,})
    }
}
