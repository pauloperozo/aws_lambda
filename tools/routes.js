//////////////////////////////////////////////////////////////////
const fs = require('fs')
const path = require('path')
//////////////////////////////////////////////////////////////////
module.exports = () => {
    
    const routepath = path.join(__dirname, '../routes')
    const ref = "api"
    const routes = fs.readdirSync( routepath ).map( file => {  
        
        let obj = {
            "name": file == 'index.js' ? `/${ref}` : `/${ref}/${file.replace('.js','')}`,
            "path":`./routes/${file}`
        }

        return obj
    })
     
    return routes
}

//////////////////////////////////////////////////////////////////