//////////////////////////////////////////////////////////////////////////////////////////
const { param } = require('express-validator')
const Handler   = require('../middleware/validations.js')
const Language  = require('../controllers/language.js')
//////////////////////////////////////////////////////////////////////////////////////////
module.exports = [
    param('name','Fecha Formato DD-MM-YYYY').matches(/^([0][1-9]|[12][0-9]|3[01])(\/|-)([0][1-9]|[1][0-2])\2(\d{4})$/),
    param('language','No Encontrado Listado De Lenguajes').isIn( Language.map( row => row.name ) ),
    param('limit','Debe Ser Un Numero').matches('^[0-9]+$'),
    (req,resp,next) => Handler(req,resp,next)
]
//////////////////////////////////////////////////////////////////////////////////////////