import { productos } from "../models/productos.models.js";
const test = (() =>{
    console.log('el controlador de productos funciona')
})

productos.create({
    brand:'LG',
    snum:'1920347',
    dscr:'EL compresor lineal inverter exclusivo de LG hace posible que los Refrigeradores LG sean líderes de la industria en ahorro de energía, frescura, niveles de ruido, capacidad y duración.',
    price:'28798'
})
export default test