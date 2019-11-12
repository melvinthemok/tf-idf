# Lambda function

## What is this?

A function that verifies user submissions from the accompanying [`client`](../client) app, and returns specific feedback for improvement.

## Deployment

1. Create this function on AWS Lambda

2. Create a trigger on AWS API Gateway

3. See full instructions [**here**](https://docs.google.com/presentation/d/1tTbfq7xwfhzVMe5w6NYEKu20IhxOB2KiUCEDFL_CD_8/edit#slide=id.g50a033b8a0_0_0)

## Explanatory notes

1. The function responds to `HTTP GET` requests with a redirect to the accompanying [`client`](../client) app hosted on AWS S3 and Cloudfront

2. The function responds to `HTTP POST` requests from the [`client`](../client) app and also from [**NUS ALSET Achievements**](https://achievements-prod.firebaseapp.com/#/paths/-LqGUXkhwx5Or09nbyI6)

3. The function verifies user submissions in the request body, and responds with specific feedback for improvement
