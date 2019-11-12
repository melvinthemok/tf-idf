# Client

## What is this?

A [**client app**](https://d21ru4jeqbismr.cloudfront.net/) that introduces [**tf-idf**](https://en.wikipedia.org/wiki/Tf%E2%80%93idf) concepts e.g. term frequency and inverse document frequency to users. It includes a few coding challenges for users to apply what they have learnt. User submissions are included in the body of `HTTP POST` requests made to the [`lambda`](../lambda) function for verification.

## Prerequisites

[Node.js](https://nodejs.org/) v12.10.0 or later

## Setup

1. Create a [`.env`](https://github.com/motdotla/dotenv#usage) file that includes the following environment variables:

* `TITLE` for the title of [`index.html`](/src/index.html)

* `GTAG_ID` for the Google Tag Manager ID in [`index.html`](/src/index.html)

* `PATH_URL` for the URL of the path on [**NUS ALSET Achievements**](https://achievements-prod.firebaseapp.com/)

* `LAMBDA_URL` for the URL of the AWS API Gateway endpoint that triggers the deployed [`lambda`](../lambda) function

2. `yarn install` or `npm install`

3. Run locally with `yarn start` or `npm start` and open `localhost:3000` on your browser

4. Or open `dist/index.html` after running `yarn build:dev` or `npm build:dev` for the development build

5. Or open `dist/index.html` after running `yarn build:prod` or `yarn build:prod` for the production build

## Deployment

1. Host the static files built with step 5 above on AWS S3 publicly

2. Create a AWS CloudFront distribution for the S3 bucket endpoint

3. Users can access the client app directly at the CloudFront distribution's domain name, or via redirect to such domain from a `HTTP GET` request to the accompanying [`lambda`](../lambda) function
