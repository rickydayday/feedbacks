const app = require('./app')

const dotenv = require('dotenv')

dotenv.config()

async function main(){
    app.listen(3000)

    console.log("Express server running on port 3000")
    
}
main()