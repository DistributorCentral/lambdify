# lambdify

[![npm pack age](https://nodei.co/npm/lambdify.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/package/lambdify)

[![Version](https://badge.fury.io/js/lambdify.svg)](https://npmjs.org/package/lambdify) [![Build Status](https://travis-ci.org/Prefinem/lambdify.svg)](https://travis-ci.org/Prefinem/lambdify)

[![Maintainability](https://api.codeclimate.com/v1/badges/4f911850391938e811f1/maintainability)](https://codeclimate.com/github/Prefinem/lambdify/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/4f911850391938e811f1/test_coverage)](https://codeclimate.com/github/Prefinem/lambdify/test_coverage) [![Greenkeeper badge](https://badges.greenkeeper.io/Prefinem/lambdify.svg)](https://greenkeeper.io/)

![Weekly Downloads](https://img.shields.io/npm/dw/lambdify.svg) ![Monthly Downloads](https://img.shields.io/npm/dm/lambdify.svg) ![Yearly Downloads](https://img.shields.io/npm/dy/lambdify.svg)

![Issues](https://img.shields.io/github/issues/Prefinem/lambdify.svg) ![Pull Requests](https://img.shields.io/github/issues-pr/Prefinem/lambdify.svg)

![Dependencies](https://david-dm.org/Prefinem/lambdify.svg) ![Dev Dependencies](https://david-dm.org/Prefinem/lambdify/dev-status.svg)

Lambdify is a set of tools that makes building and consuming AWS Lambda functions easier.

# NOTICE

**Master branch is v4 in progress. v4 will be dropping lambdify-fn and lambdify-utils and moving to a single package.**

If you used methods from lambdify-fn, you can use [afpf](https://github.com/Prefinem/afpf) instead

**_WARNING: Version >= 3.0.0 is for Node 8.10 or greater_**

These docs are awful. If you are interested in using one of the library and need some help, please create an issue and I will work on the docs for that first. Thanks

# THESE ARE v4 DOCS. Please see [branch v3](https://github.com/Prefinem/lambdify/tree/v3) for v3 Docs

# Getting Started

Basic HTTP Lambda Function - JSON Response

```js
const lambdify = require('lambdify');

const helloWorld = (request, response) => {
	response.json({ message: `Hello User, I see that you are coming from IP: ${request.getIp()}` });

	return response;
};

exports.handler = lambdify(helloWorld);
```

Basic HTTP Lambda Function - HTML Response

```js
const lambdify = require('lambdify');

const helloWorld = (request, response) => {
	response.html(`Hello User, I see that you are coming from IP: ${request.getIp()}`);

	return response;
};

exports.handler = lambdify(helloWorld);
```

Basic S3 Trigger

```js
const lambdify = require('lambdify');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

const run = async (request) => {
	const { bucket, key } = request.getS3();
	const file = await s3.getObject({ Bucket: bucket, Key: key }).promise();

	if (file && file.Body) {
		// Do something with the file
	}
};

exports.handler = lambdify(run);
```

# Installation

    npm i lambdify

or

    yarn add lambdify

# API

```js
const lambdify = require('lambdify');

const run = (request, response) => {
	response.json({ foo: 'bar' });

	return response;
};

exports.handler = lamdify(run);
```

## request

This is the request object that is built from the lambda event

### request.get(name)

Get a value from a basic key value store

### request.getAuthToken()

Get the authorization token from the request

### request.getBody()

Get the body of the event and parse into an object if JSON

### request.getContext()

Get the lambda context

### request.getCookie(name)

Get value of cookie `name` from API Gateway Request

### request.getCookies()

Get all cookies from API Gateway Request

### request.getEvent()

Get lambda event

### request.getHeader()

Get value of header `name` from API Gateway Request

### request.getHeaders()

Get all headers from API Gateway Request

### request.getIp()

Get remote ip (handles X-Forwarded-For)

### request.getMethod()

Get HTTP request method from API Gateway Request

### request.getPath()

Get URL path from API Gateway Request

### request.getPathParams()

Get path paramaters from API Gateway Request

### request.getQueryParams()

Get query parameter from API Gateway Request

### request.getS3()

Get bucket and key from S3 Trigger

### request.getSns()

Get record from SNS Trigger

### request.getSqs()

Get records from SQS Trigger

### request.getUa()

Get UserAgent from API Gateway Request

### request.set(name, value)

Set a value from a basic key value store

## response

This is the response object that must be returned from your lambda function

### response.enableCors()

Enable CORS for an API Gateway response

### response.getBody()

Get the body of the response

### response.getHeader(name)

Get the value of header `name`

### response.getHeaders()

Get all headers

### response.getResponse()

Get the lambda response object

### response.getStatusCode()

Get the status code of the response

### response.html(body)

Build an html response

### response.json(body)

Build a json response

### response.redirect(url, statusCode = 302)

Build a redirect response

### response.setBinaryResponse(value)

Set the response as a binary response for API Gateway

### response.setBody(body)

Set the body of the response

### response.setHeader(name, value)

Set value of header `name`

### response.setStatusCode(value)

Set the status code of the response

### response.xml(body)

Build an xml response
