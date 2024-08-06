import { gerentes } from "../models/gerentes.models.js";
const test = (()  =>{
    console.log('el controladoor de gerentes funciona')
})
gerentes.create({
    name:'Alvaro',
    apep:'Esparza',
    apema:'Lopez',
    age:'20'
})
export default test