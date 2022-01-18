let elementDigital = document.querySelector('.digital');
let pt_s = document.querySelector('.p_s');
let pt_m = document.querySelector('.p_m');
let pt_h = document.querySelector('.p_h');



function setarHora(){
    let nowHours = new Date();
    let hours = nowHours.getHours();
    let minutes = nowHours.getMinutes();
    let second = nowHours.getSeconds();

    elementDigital.innerHTML = `${verifyZero(hours)}:${verifyZero(minutes)}:${verifyZero(second)}`;

    let time_s = ((360/60) * second) -90;
    let time_m = ((360/60) * minutes) -90;
    let time_h = ((360/12) * hours)-90;

    pt_s.style.transform = `rotate(${time_s}deg)`;
    pt_m.style.transform = `rotate(${time_m}deg)`;
    pt_h.style.transform = `rotate(${time_h}deg)`;



    
}

function verifyZero(time){
   return time<10 ? `0${time}`: `${time}`;
}

setInterval(()=>{
    setarHora();
},1000);

setarHora();


/*

 if(secund < 10){
        return elementDigital.innerHTML = `${hours}: ${minutes}: 0${secund}`;
     }else{
         if(minutes<10){
             return elementDigital.innerHTML = `${hours}: 0${minutes}: ${secund}`;
         }else{
             if(hours<10){
                return elementDigital.innerHTML = `0${hours}: ${minutes}: ${secund}`;
             }
         }
     }

*/

/*Modificações*/
