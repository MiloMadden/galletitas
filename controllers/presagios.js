const Presagio = require('../models/presagio')

const getPresagios = async(req, res)=>{

    try {

        const presagios = await Presagio.find({})

        res.json({
            ok: true, 
            presagios
        })

    }catch (error){
        res.status(500).json({
            ok: false, 
            msg: 'No se pudo guardar presagio'
        })
    }

}

const postPresagio = async(req, res)=>{

    const {texto, color} = req.body

    const presagio = new Presagio({
        texto, color
    })

    try {

        const presagioDB = await presagio.save()

        res.json({
            ok: true, 
            guardado: presagioDB 
        })
        
    } catch (error) {
        res.status(500).json({
            ok: false, 
            msg: 'No se pudo guardar presagio'
        })
    }


}

module.exports = {
    getPresagios, 
    postPresagio
}