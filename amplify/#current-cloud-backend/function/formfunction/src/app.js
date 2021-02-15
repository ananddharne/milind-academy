/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_FORMTABLE_ARN
	STORAGE_FORMTABLE_NAME
Amplify Params - DO NOT EDIT */

var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
var app = express()
var cors = require('cors') // ADDED - for avoiding CORS in local dev
app.use(cors())  // ADDED - for avoiding CORS in local dev
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

/* 1. Import the AWS SDK and create an instance of the DynamoDB Document Client */
const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient();

/* 2. create a function that will generate a unique ID for each entry in the database */
function id () {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}


/**********************
 * Example get method *
 **********************/

// app.get('/contact', function(req, res) {
//   // Add your code here
//   var params = {
//     TableName: "formtable-staging" // TODO: UPDATE THIS WITH THE ACTUAL NAME OF THE FORM TABLE ENV VAR (set by Amplify CLI)
//   }
//   docClient.scan(params, function(err, data) {
//     if (err) res.json({ err })
//     else res.json({ data })
//   })
// });

app.get('/contact', function(req, res) {
  // Add your code here
  var params = {
    TableName: "formtable-staging", // TODO: UPDATE THIS WITH THE ACTUAL NAME OF THE FORM TABLE ENV VAR (set by Amplify CLI)
    Key:{
      "id": "0vcvjnr38jkkl30gquy",
      "name": req.body.name
    }
  }
  docClient.get(params, function(err, data) {
    if (err) res.json({ err })
    else res.json({ data })
  });
});

app.get('/contact/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/

app.post('/contact', function(req, res) {
  var params = {
    TableName : "formtable-staging", // TODO: UPDATE THIS WITH THE ACTUAL NAME OF THE FORM TABLE ENV VAR (set by Amplify CLI)
    Item: {
      id: id(),
      name: req.body.name,
      phone: req.body.phone
    }
  }
  docClient.put(params, function(err, data) {
    if (err) res.json({ err })
    else res.json({ success: 'Contact created successfully!' })
  })
});

app.post('/contact/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/contact', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/contact/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/contact', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/contact/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
