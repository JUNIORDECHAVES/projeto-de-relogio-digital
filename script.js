let hora = document.querySelector('#horas')
let minutos = document.querySelector('#minutos')
let segundos = document.querySelector('#segundos')

const relogio = setInterval(function time(){
    let datetoday = new Date()
    let hr = datetoday.getHours()
    let min = datetoday.getMinutes()
    let seg = datetoday.getSeconds()

    hora.textContent = hr
    minutos.textContent = min
    segundos.textContent = seg

    if(hr < 10) hr = "0" + hr

    if(min < 10) min = "0" + min

    if(seg < 10) seg = "0" + seg
})