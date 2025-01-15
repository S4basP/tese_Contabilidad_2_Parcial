//data.js es el modulo que toma los elementos en html y hace el uso de ellos en las operaciones

//objeto data extrae los datos que da el usuario
 export let data = {
     bancoCargo : document.getElementById('BancosCargo'),
     bancoAbono : document.getElementById('BancosAbono'),
     terreno : document.getElementById('TerrenoCargo'),
     edificio : document.getElementById('Edificio'),
     acredorHipotecario: document.getElementById('acredor_Hip'),
     capitalSocial: document.getElementById('CapSo'),
     almacenCargo: document.getElementById('almacen1'),
     almacenAbono: document.getElementById('almacen2'),
     proveedores: document.getElementById('proveedores'),
     eqTransporte: document.getElementById('eq_Trans'),
     acredores: document.getElementById('acreedores'),
     clientes: document.getElementById('clientes'),
     ventas: document.getElementById('ventas1'),
     costoVentas: document.getElementById('costo1'),
     gastoVentas: document.getElementById('gastos1'),
     gastosAdmon: document.getElementById('gastosAdmon1'),
     perdidasCargo: document.getElementById('per1'),
     perdidasAbono: document.getElementById('per2'),
     perdidasCargo2: document.getElementById('per3'),
     utilidadCargo: document.getElementById('utilidad1')

 };

//objeto que permite el uso de la fila se las sumas totales
 export let docHtml = {

suma_1 : document.getElementById('suma1'),
suma_2 : document.getElementById('suma2'),
suma_3 : document.getElementById('suma3'),
suma_4 : document.getElementById('suma4'),
suma_5 : document.getElementById('suma5'),
suma_6 : document.getElementById('suma6'),
suma_7 : document.getElementById('suma7'),
suma_8 : document.getElementById('suma8'),
suma_9 : document.getElementById('suma9'),
suma_10 : document.getElementById('suma10'),


 };
//obejos que imprime datos de ventas, costo de ventas, gastos de ventas y gastos de administracion
 export const dataCp = {
    ventasCp: document.getElementById('ventas2'),
    costoVentas: document.getElementById('costo2'),
    gastosVentasCp: document.getElementById('gastos2'),
    gastosAdmonCp:document.getElementById('gastosAdmon2'),
    


 }


 export let dataFin = {
    bancoFin: document.getElementById('BancoCargofin'),
    almacenFin: document.getElementById('almacenf'),
    terrenoFin: document.getElementById('TerrenoCargoFinal'),
    edificioFin:document.getElementById('EdificioFinal'),
    acredorHipotecarioFin:document.getElementById('acredor_HipFinal'),
    capitalSocialFin:document.getElementById('CapSo1'),
    almacenFin:document.getElementById('almacenf'),
    provedoresFin:document.getElementById('proveedores1'),
    eqTransporteFin:document.getElementById('eqTransFin'),
    acredoresFin: document.getElementById('acreedores1'),
    clientesFin: document.getElementById('clientes1'),
    ventasFin: document.getElementById('ventas3'),
    ventasFin2:document.getElementById('ventas4'),
    costoVentasFin: document.getElementById('costo3'),
    costoVentasFin2: document.getElementById('costo4'),
    gastoVentasFin: document.getElementById('gastos3'),
    gastoVentasFin2: document.getElementById('gastos4'),
    gastosAdmonFin: document.getElementById('gastosAdmon3'),
    gastosAdmonFin2: document.getElementById('gastosAdmon4'),
    perdidasFin: document.getElementById('per4'),
    utilidadFin: document.getElementById('utilidad2'),



    
 }


