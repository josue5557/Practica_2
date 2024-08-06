import { clientes } from "../models/clientes.models.js";

const test = (() =>{
    console.log('funciona el controlador de clientes')
})
clientes.create({
    name:'Raul',
    apep:'Orbañadoz',
    apema:'Gonzales',
    age:'45',
    bdc:'en buro de credito',
    acnum:'1029384756'
})
export default test