const mongoose = require('mongoose')

//definir el schema
//plano general de todo bootcamp

const bootcampSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true, "Nombre requerido"],
        unique : [true, "Nombre repetido" ],


    },
    phone:{
        type: Number,
        require:[true, "telefono requerido"],
        maxlength: [10, "telefono muy largo"]
    },
    address:{
        type:String,
        require:[true, "dirección requerida"],
        maxlength: [50, "dirección muy larga"],
        minlength: [10, "dirección muy corta"]
    },
    topics:{
        type:[String],
        enum:["AI",
              "Backend",
              "Frontend",
              "Devops"
            ]

    },
    createdAt:Date
    
})

//exportar el modelo 

const bootcampModel = mongoose
                        .model ("Bootcamp",
                        bootcampSchema)

module.exports = bootcampModel
