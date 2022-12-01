import Seguridad from "../models/Seguridad.js";

const registrar = async(req,res) => {
    
   const {email} = req.body

    const existeUsuario = await Seguridad.findOne({email});

    if ( existeUsuario){
        const error =  new Error("Usuario ya registrado");
        return res.status(400).json({msg:error.message});
    }

    try {
        //guardar un nuevo usuario
        const seguridad = new Seguridad(req.body);
        const seguridadGuardado = await seguridad.save();
        res.json(seguridadGuardado);


    } catch (error) {
        console.log(error)
    }
    
};

const perfil = (req,res)=> {
    res.json({msg: "mostrando respuesta desde perfil"})
}
export {
    registrar,
    perfil
}

