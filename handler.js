/* Lanzador De App Landa */
const app = require('./app')
const ServerlessHttp = require('serverless-http')
module.exports.Api = ServerlessHttp( app )
