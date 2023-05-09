let hora = new Date().getHours()
let min = new Date().getMinutes()
let time = (hora + ':' + min)

document.getElementById("time").innerHTML = time