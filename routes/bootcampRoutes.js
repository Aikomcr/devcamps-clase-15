const express = require('express')
const bootcampModel = require('../models/bootcampModel')

const { default: mongoose } = require('mongoose')
const router = express.Router()

//definir rutas de bootcamps
//con el ruteador 


//traer todos los bootcamps
router.get('/', async (req, res) => {
   //selecionar todos losbootcamps
   //en la colección

   try {
    const bootcamps = 
         await bootcampModel.find()
    if (bootcamps.length === 0) {
      res.
        status(400).
        json({
            sucess: false,
            msg: "no hay bootcamps en la collection "
       
        })
   
    }else{
        res.
        status(200).
        json({
            succes: true,
            data: bootcamps
        })
            
    }
    
} catch (error) {
    res.
    status(error.status).
    json({
        succes:false,
        msg: error.message
    })
    
}

})

//seleccionar bootcamps por id

router.get('/:id',async (req, res) => {



    try {
        //recoger el id de la url
        bootcampid = req.params.id
        //validarel id suministrado
        if (!mongoose.Types.ObjectId.isValid(bootcampid)) {
            res.status(400).json({
                success: false,
                msg: "el id no es valido "
            })
        }else{
           //selecionar el bootcamp por id
        select_bootcampid = await bootcampModel
                            .findById(bootcampid)

        if (select_bootcampid) {
            //se encontró el bootcamp  
            //enviar respuesta
                 res.status(200).json({
            success: true,
            results: select_bootcampid
                })
        }else{
            //no se encontró el bootcamp
            res.status(400).json({
                success: false,
                msg: `No se encontró el bootcamp con el id: ${bootcampid}`
            })
        } 
        }

        
    } catch (error) {
      
        res.
        status(error.status).json({
            succes:false,
            msg: error.message
        })

    }

})

//crear bootcamp

router.post('/',async (req, res) => {
   const newBotcamp = await bootcampModel
                    .create(req.body)
    
                    res.json({
                        success: true,
                        results: newBotcamp
                     })


})






module.exports =router