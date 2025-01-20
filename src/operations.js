//modulo que genera las operaciones.


import {data, dataCp, dataFin, docHtml} from "./data.js";



//Funcion que suma las columnas
 export const calcColumns = () => {
    let arrayAdd = [];
    let arrayPer = operPerdidas(); 
   /** operaciones de la primera columna  */
   arrayAdd[0] = parseFloat(data.bancoCargo.value) + parseFloat(data.terreno.value) + parseFloat(data.edificio.value);
   //Operaciones de la segunda fila
   arrayAdd[1] = parseFloat(data.acredorHipotecario.value) + parseFloat(data.capitalSocial.value);
   //Operaciones de la tercera fila 
   arrayAdd[2] = parseFloat(data.almacenCargo.value) + parseFloat(data.eqTransporte.value) + parseFloat(data.costoVentas.value) + parseFloat(data.clientes.value) + parseFloat(data.gastoVentas.value) + parseFloat(data.gastosAdmon.value);
   //Operaciones de la cuarta fila
   arrayAdd[3] = parseFloat(data.bancoAbono.value) + parseFloat(data.almacenAbono.value) + parseFloat(data.proveedores.value) + parseFloat(data.acredores.value) + parseFloat(data.ventas.value);


    arrayAdd[4] = parseFloat(data.ventas.value) + arrayPer[0];


    arrayAdd[5] = parseFloat(data.costoVentas.value) + parseFloat(data.gastoVentas.value) + parseFloat(data.gastosAdmon.value) + parseFloat(data.ventas.value);

    arrayAdd[6] = arrayPer[1];

    arrayAdd[7] = arrayPer[1]; 
   
    arrayAdd[8] = (parseFloat(data.bancoCargo.value) - parseFloat(data.bancoAbono.value)) + parseFloat(data.terreno.value) + parseFloat(data.edificio.value) + parseFloat(data.eqTransporte.value) + parseFloat(data.clientes.value) +arrayPer[1] ;

    arrayAdd[9] = parseFloat(data.acredorHipotecario.value) + parseFloat(data.capitalSocial.value) + parseFloat(data.proveedores.value) + parseFloat(data.acredores.value) + arrayPer[1];


  



   return arrayAdd;
 };
//Funcion que hace la operacion de perdidas
 const operPerdidas= () => {
   let arrayPer = [];
   arrayPer[0] =  parseFloat(data.costoVentas.value) + parseFloat(data.gastoVentas.value) + parseFloat(data.gastosAdmon.value);
  //  arrayPer[1] =  arrayPer[0] - parseFloat(data.ventas.value);
    arrayPer [1] = arrayPer[0] - parseFloat(data.ventas.value) < 0 ?  arrayPer[1] = (arrayPer[0] -  parseFloat(data.ventas.value ) ) * -1  : arrayPer[1] = arrayPer[0] - parseFloat(data.ventas.value);


   return arrayPer;
 }

//Funcion que imprime los resultados de las perdidas y la utilidad
 const printfPerdAndUtilidad = () => {
   const arrayPer = operPerdidas();
   data.perdidasCargo.innerHTML = arrayPer[0];
   data.perdidasAbono.innerHTML = data.ventas.value;
   data.perdidasCargo2.innerHTML = arrayPer[1];
   data.utilidadCargo.innerHTML = arrayPer[1];
   dataFin.utilidadFin.innerHTML = arrayPer[1];


 }


//Funcion que resta los datos por filas
 const  subtractionOfData  = () => {
   let arraySub = []; 

   arraySub [0] = parseFloat(data.bancoCargo.value) - parseFloat(data.bancoAbono.value);
   arraySub [1] = parseFloat(data.almacenCargo.value) - parseFloat(data.almacenAbono.value);

   arraySub[2] = parseFloat(data.ventas.value) - parseFloat(data.ventas.value);
   arraySub[3] = parseFloat(data.costoVentas.value) - parseFloat(data.costoVentas.value);
   arraySub[4] = parseFloat(data.gastoVentas.value) - parseFloat(data.gastoVentas.value);

   arraySub[5] = parseFloat(data.gastosAdmon.value) - parseFloat(data.gastosAdmon.value);


   //perdidas y ganancias 
   // arraySub [2] = 

   return arraySub;

 }


//Funciones que llena la tabla de valores que tienen que ser por defecto
 const printfDataTables = () => {
   dataCp.ventasCp.innerHTML = data.ventas.value;
   dataCp.costoVentas.innerHTML = data.costoVentas.value;
   dataCp.gastosVentasCp.innerHTML = data.gastoVentas.value;
   dataCp.gastosAdmonCp.innerHTML = data.gastosAdmon.value;
   printfPerdAndUtilidad();

 };

//Funcion que imprime los valores de las ultimas columnas
 const printfDataFinal = () => {

   dataFin.terrenoFin.innerHTML = data.terreno.value;
   dataFin.edificioFin.innerHTML = data.edificio.value;
   dataFin.acredorHipotecarioFin.innerHTML = data.acredorHipotecario.value;
   dataFin.capitalSocialFin.innerHTML = data.capitalSocial.value;
   dataFin.provedoresFin.innerHTML = data.proveedores.value;
   dataFin.eqTransporteFin.innerHTML = data.eqTransporte.value;
   dataFin.acredoresFin.innerHTML = data.acredores.value;
   dataFin.clientesFin.innerHTML = data.clientes.value;


 };
//Funcion que imprime las sumas y las restas de la tabla
export const printfData  = () => {


   let arrayAdd = calcColumns();
   let arraySub = subtractionOfData();
   printfDataTables();

   console.log(arraySub)
   console.log(arrayAdd)

   printfDataFinal();

    docHtml.suma_1.innerHTML = arrayAdd[0];
    docHtml.suma_2.innerHTML = arrayAdd[1];
    docHtml.suma_3.innerHTML = arrayAdd[2];
    docHtml.suma_4.innerHTML = arrayAdd[3];
    docHtml.suma_5.innerHTML = arrayAdd[4];
    docHtml.suma_6.innerHTML = arrayAdd[5];
    docHtml.suma_7.innerHTML = arrayAdd[6];
    docHtml.suma_8.innerHTML = arrayAdd[7];
    docHtml.suma_9.innerHTML = arrayAdd[8];
    docHtml.suma_10.innerHTML = arrayAdd[9];


    
  



    dataFin.bancoFin.innerHTML = arraySub[0];
    dataFin.almacenFin.innerHTML = arraySub[1];
    dataFin.ventasFin.innerHTML = arraySub[2];
    dataFin.ventasFin2.innerHTML = arraySub[2];
    dataFin.costoVentasFin.innerHTML = arraySub[3];
    dataFin.costoVentasFin2.innerHTML = arraySub[3];
    dataFin.gastoVentasFin.innerHTML = arraySub[4];
    dataFin.gastoVentasFin2.innerHTML = arraySub[4];
    dataFin.gastosAdmonFin.innerHTML = arraySub[5];
    dataFin.gastosAdmonFin2.innerHTML = arraySub[5];
   
};


