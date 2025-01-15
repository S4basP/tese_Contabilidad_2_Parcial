//Este modulo es basura por favor de eliminar si lo ves hace los mismo que los demas modulos, solamente que la programacion y la logica son un hasco




function FuncionGenerar() {
    var suma1 = 0;
    var suma2 = 0;
    var aux1 = parseFloat(document.getElementsByClassName('BancosCargo')[0].value);
    var aux2 = parseFloat(document.getElementsByClassName('BancosAbono')[0].value);
    suma1 += (aux1 - aux2);
    document.getElementById('BancoCargofin').innerHTML = (aux1 - aux2);

    aux1 = parseFloat(document.getElementsByClassName('TerrenoCargo')[0].value);
    suma1 += aux1;
    document.getElementById('TerrenoCargoFinal').innerHTML = aux1;

    aux1 = parseFloat(document.getElementsByClassName('Edificio')[0].value);
    suma1 += aux1;
    document.getElementById('EdificioFinal').innerHTML = aux1;

    var aux1 = parseFloat(document.getElementsByClassName('BancosCargo')[0].value);
    var aux2 = parseFloat(document.getElementsByClassName('TerrenoCargo')[0].value);
    var aux3 = parseFloat(document.getElementsByClassName('Edificio')[0].value);
    document.getElementById('suma1').innerHTML = (aux1 + aux2 + aux3);

    aux1 = parseFloat(document.getElementsByClassName('CapSo')[0].value);
    suma2 += aux1;
    document.getElementById('CapSo1').innerHTML = aux1;

    document.getElementById('suma2').innerHTML = parseFloat(document.getElementsByClassName('CapSo')[0].value);

    aux1 = parseFloat(document.getElementsByClassName('clientes')[0].value);
    suma1 += aux1;
    document.getElementById('clientes1').innerHTML = aux1;

    aux1 = parseFloat(document.getElementsByClassName('almacen1')[0].value);
    aux2 = parseFloat(document.getElementsByClassName('almacen2')[0].value);
    suma1 += (aux1 - aux2);
    document.getElementById('almacenf').innerHTML = (aux1 - aux2);

    aux1 = parseFloat(document.getElementsByClassName('pape1')[0].value);
    suma1 += aux1;
    document.getElementById('pape2').innerHTML = aux1;

    aux1 = parseFloat(document.getElementsByClassName('proveedores')[0].value);
    suma2 += aux1;
    document.getElementById('proveedores1').innerHTML = aux1;

    aux1 = parseFloat(document.getElementsByClassName('acreedores')[0].value);
    suma2 += aux1;
    document.getElementById('acreedores1').innerHTML = aux1;

    aux1 = parseFloat(document.getElementsByClassName('ventas1')[0].value);
    aux2 = aux1;
    suma2 += (aux1 - aux2);
    suma1 += (aux1 - aux2);
    document.getElementById('ventas2').innerHTML = aux1;
    document.getElementById('ventas3').innerHTML = (aux1 - aux2);
    document.getElementById('ventas4').innerHTML = (aux1 - aux2);

    aux1 = parseFloat(document.getElementsByClassName('costo1')[0].value);
    aux2 = aux1;
    suma2 += (aux1 - aux2);
    suma1 += (aux1 - aux2);
    document.getElementById('costo2').innerHTML = aux1;
    document.getElementById('costo3').innerHTML = (aux1 - aux2);
    document.getElementById('costo4').innerHTML = (aux1 - aux2);

    aux1 = parseFloat(document.getElementsByClassName('gastos1')[0].value);
    aux2 = aux1;
    suma2 += (aux1 - aux2);
    suma1 += (aux1 - aux2);
    document.getElementById('gastos2').innerHTML = aux1;
    document.getElementById('gastos3').innerHTML = (aux1 - aux2);
    document.getElementById('gastos4').innerHTML = (aux1 - aux2);

    aux1 = parseFloat(document.getElementsByClassName('gastosAdmon1')[0].value);
    aux2 = aux1;
    suma2 += (aux1 - aux2);
    suma1 += (aux1 - aux2);
    document.getElementById('gastosAdmon2').innerHTML = aux1;
    document.getElementById('gastosAdmon3').innerHTML = (aux1 - aux2);
    document.getElementById('gastosAdmon4').innerHTML = (aux1 - aux2);

    aux1 = parseFloat(document.getElementsByClassName('clientes')[0].value);
    aux2 = parseFloat(document.getElementsByClassName('almacen1')[0].value);
    aux3 = parseFloat(document.getElementsByClassName('pape1')[0].value);
    var aux4 = parseFloat(document.getElementsByClassName('costo1')[0].value);
    var aux5 = parseFloat(document.getElementsByClassName('gastos1')[0].value);
    var aux6 = parseFloat(document.getElementsByClassName('gastosAdmon1')[0].value);
    document.getElementById('suma3').innerHTML = (aux1 + aux2 + aux3 + aux4 + aux5 + aux6);

    aux1 = parseFloat(document.getElementsByClassName('BancosAbono')[0].value);
    aux2 = parseFloat(document.getElementsByClassName('almacen2')[0].value);
    aux3 = parseFloat(document.getElementsByClassName('proveedores')[0].value);
    aux4 = parseFloat(document.getElementsByClassName('acreedores')[0].value);
    aux5 = parseFloat(document.getElementsByClassName('ventas1')[0].value);
    document.getElementById('suma4').innerHTML = (aux1 + aux2 + aux3 + aux4 + aux5);

    aux1 = parseFloat(document.getElementsByClassName('costo1')[0].value);
    aux2 = parseFloat(document.getElementsByClassName('gastos1')[0].value);
    aux3 = parseFloat(document.getElementsByClassName('gastosAdmon1')[0].value);
    document.getElementById('per1').innerHTML = aux1 + aux2 + aux3;
    suma3 = aux1 + aux2 + aux3;

    op = parseFloat(document.getElementsByClassName('ventas1')[0].value);
    document.getElementById('suma5').innerHTML = (aux1 + aux2 + aux3 + op);

    document.getElementById('per2').innerHTML = parseFloat(document.getElementsByClassName('ventas1')[0].value);
    suma3 += parseFloat(document.getElementsByClassName('ventas1')[0].value);
    op1 = parseFloat(document.getElementsByClassName('ventas1')[0].value);
    document.getElementById('per3').innerHTML = (op1 - (aux1 + aux2 + aux3));

    document.getElementById('utilidad1').innerHTML = (op1 - (aux1 + aux2 + aux3));
    suma2 += (op1 - (aux1 + aux2 + aux3))
    document.getElementById('utilidad2').innerHTML = (op1 - (aux1 + aux2 + aux3));
    suma4 = (op1 - (aux1 + aux2 + aux3));

    sumas(suma1, suma2, suma3, suma4);
}
function sumas(suma1, suma2, suma3) {


    document.getElementById('suma6').innerHTML = suma3;
    document.getElementById('suma7').innerHTML = suma4;
    document.getElementById('suma8').innerHTML = suma4;
    document.getElementById('suma9').innerHTML = suma1;
    document.getElementById('suma10').innerHTML = suma2;

}