//////////////////////////////////////////////////////////////////////////////////////////
const Router = require('express')
//////////////////////////////////////////////////////////////////////////////////////////
const router = Router()
//////////////////////////////////////////////////////////////////////////////////////////
router.get('/',(req, res)=>{

  const info = {
    "name":process.env.npm_package_name || "",
    "version":process.env.npm_package_version || ""
  }

  res.json(info)
})
//////////////////////////////////////////////////////////////////////////////////////////
module.exports = router
//////////////////////////////////////////////////////////////////////////////////////////