 
import { printfData } from "./operations.js";


const btnCalcular = document.getElementById('btnCalcular');

btnCalcular.addEventListener('click', (e) => {

    e.preventDefault();

    printfData();

});
