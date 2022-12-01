import mongoose from "mongoose";

const seguridadSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
        
    },
    ruc:{
        type: Number,
        required: true,
        trim:true
    },
    direccion:{
        type: String,
        required:true,
        trim:true
    },
    celular:{
        type: Number,
        required:false,
        trim:true

    },
    telefono: {
        type: String,
        default:null,
        trim: true
    },
    email: {
        type:String,
        required: true,
        unique: true,
        trim: true
    },
    servicio:{
        type:String,
        required:true,
        trim:true
    },
    pedidoComptra:{
        type:String,
        required:true,
        trim:true
    },
    token: {
        type: String,
        default: Date.now(),
    },
    fecha:{
        type:Date,
        required:true,
    }
});

const Seguridad = mongoose.model("seguridad",seguridadSchema);
export default Seguridad;

