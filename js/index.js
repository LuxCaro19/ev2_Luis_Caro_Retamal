
import moneda from "./modules/moneda.js"
import pasteles from "./modules/pasteles.js"

var container = document.getElementById("forms");

window.calcular = moneda.calcular;
window.cargar = pasteles.cargar;


document.getElementById("moneda").addEventListener("click", ()=>{

    container.innerHTML = moneda.data;

});


document.getElementById("pasteles").addEventListener("click", ()=>{

    container.innerHTML = pasteles.data;
    pasteles.cargar();


});