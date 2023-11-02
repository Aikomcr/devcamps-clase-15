const express = require('express')
const bootcampModel = require('../models/bootcampModel')
const router = express.Router()

//definir rutas de bootcamps
//con el ruteador 


//traer todos los bootcamps
router.get('/', async (req, res) => {
   //selecionar todos losbootcamps
   //en la colección

    const bootcamp = 
                  await bootcampModel.find()
   
    res.json({
        success:true,
        result:bootcamp
    })
})

//seleccionar bootcamps por id

router.get('/:id',async (req, res) => {

    //recoger el id de la url
    bootcampid = req.params.id

     //selecionar el bootcamp por id
     select_bootcampid = await bootcampModel
     .findById(bootcampid)

     //enviar respuesta
     res.json({
        success: true,
        results: select_bootcampid
     })
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