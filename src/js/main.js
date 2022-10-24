import _ from 'lodash';
import moment from 'moment';
moment.locale('pt-br');

import $ from 'jquery';
import Inputmask from 'inputmask';

import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';

const time = Date();
//console.log(time);

const timeMoment = moment(time).format("h:mm:ss");
//console.log('timeMoment', timeMoment);

const botaoCalcular = document.getElementById('btnEnviar');
botaoCalcular.addEventListener('click', calcularData);

function calcularData() {

    const dateTime = document.getElementById("date").value;

    const resultado15 = moment(dateTime).subtract(15, 'days');
    document.getElementById('resultado15').innerHTML = resultado15.format('dddd');

    const resultado60 = moment(dateTime).subtract(60, 'days');
    document.getElementById('resultado60').innerHTML = resultado60.format('MMMM');

    const ano = moment(dateTime).year();

    var natal = moment("25-12-" + ano, "DD-MM-YYYY");

    document.getElementById('resultadoAno').innerHTML = natal.format('dddd');
    //console.log('natal:', natal);

}

const botaoCalcular2 = document.getElementById('btnEnviar2');
botaoCalcular2.addEventListener('click', calcularData2);

function calcularData2() {

    const dateTime = document.getElementById("date2").value;

    const resultado = moment(dateTime, "MM-DD-YYYY");
    //console.log('resultado:', resultado);

    document.getElementById('resultado2').innerHTML = resultado.format('DD/MM/YYYY');

}

const botaoCalcular3 = document.getElementById('btnEnviar3');
botaoCalcular3.addEventListener('click', calcularData3);

function calcularData3() {

    const dateTime1 = document.getElementById("date3").value;
    const dateTime2 = document.getElementById("date4").value;

    const dt1 = moment(dateTime1);
    const dt2 = moment(dateTime2);

    document.getElementById('resultado3').innerHTML = dt2.diff(dt1, 'days') + " dias";

}

const botaoCalcular4 = document.getElementById('btnEnviar4');
botaoCalcular4.addEventListener('click', calcularData4);

function calcularData4() {

    const dateTime1 = document.getElementById("date5").value;
    const dateTime2 = document.getElementById("date6").value;

    const dt1 = moment(dateTime1);
    const dt2 = moment(dateTime2);

    document.getElementById('resultado4').innerHTML = dt2.diff(dt1, 'hours') + " horas";

}

$(function () {
    Inputmask().mask(document.querySelectorAll("input"));
});
