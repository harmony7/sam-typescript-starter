import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult
} from "aws-lambda";

export async function lambdaHandler( event: APIGatewayProxyEvent ): Promise<APIGatewayProxyResult> {
    return {
        statusCode: 200,
        body: `Hello, World!`,
    }
}
