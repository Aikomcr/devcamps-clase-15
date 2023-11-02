const mongoose = require('mongoose')

const conectarDB =  async () => {

      const conn = await mongoose.connect(
        'mongodb://127.0.0.1:27017/DEVCAMP-2687340'
        )
        console.log("mongoDB conectado".bgGreen.blue)
}

module.exports = conectarDB