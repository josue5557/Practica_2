import { promociones } from "../models/promociones.models.js";
const test = (()=>{
    console.log('el controlador de promociones funciona')
})
promociones.create({
    brand:'Samsung',
    snum:'1234567',
    dsrc:'procesador avanzado de ocho núcleos y hasta 8 GB de RAM. Almacena más y elimina menos con 256 GB de almacenamiento interno. Y, si no es suficiente, agrega hasta 1 TB con la tarjeta MicroSD.',
    price:'9500'
})
export default test