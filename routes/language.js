//////////////////////////////////////////////////////////////////////////////////////////
const Router = require('express')
const Language = require('../controllers/language.js')
//////////////////////////////////////////////////////////////////////////////////////////
const router = Router()
//////////////////////////////////////////////////////////////////////////////////////////
router.get('/', async (req, res) => {

  /* Obtener listado de lenguajes en el repositorio */
  const respuesta = Language
  /*Repuesta Al Usuario */
  res.status( 200 ).json( respuesta )
 
})
//////////////////////////////////////////////////////////////////////////////////////////
module.exports = router
//////////////////////////////////////////////////////////////////////////////////////////