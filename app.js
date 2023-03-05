////////////////////////////////////////////////////////////////////////////////////////////

/* Cargamos Modulo/Tools Express */
const express = require('express') 
const logger  = require('morgan') 
const cors    = require('cors')

/*Cargamos Rutas */
const  HandleRoute = require( './tools/routes.js' )

/*Cargamos Middleware */
const  Handle404   = require( './middleware/404.js' )
const  Handle503   = require( './middleware/503.js' )

////////////////////////////////////////////////////////////////////////////////////////////

/*Init Express */
const app = express()

      app.use( cors() )
      app.use( logger("dev") )
      app.use( express.json({limit: '50mb'}) )
      app.use( express.urlencoded( { limit: '50mb', extended: true } ) ) /* Tamaño De 50MB  */

      /*Routes */
      for( let route of HandleRoute() )
      {
        const module = require(route.path)
        app.use(route.name,module)
      }

      app.use(Handle404) /*Error 404*/
      module.exports = app
      
////////////////////////////////////////////////////////////////////////////////////////////      