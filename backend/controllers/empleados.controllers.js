import { empleados } from "../models/empleados.models.js";
const test = (()  =>{
    console.log('el controladoor de empleados funciona')
})
empleados.create({
    name:'Alvaro',
    apep:'Esparza',
    apema:'Lopez',
    age:'20'
})
export default test