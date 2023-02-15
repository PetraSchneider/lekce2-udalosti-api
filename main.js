// tady je místo pro náš program
function zmenaPozadi(){
    let text;
    text = document.querySelector('.odstavec');
    text.classList.toggle('tridaOdsatvce');
}
let velikostPisma = 16;
function zmenaVelikosti(event){
   let pismo;
   pismo = document.querySelector('.odstavec')
   velikostPisma = velikostPisma + 1;
   pismo.style.fontSize = velikostPisma + "px"
}

let audio = document.querySelector('.zvuk')

function spustaudio(){
    audio.play();
}
function zastavtaudio(){
    audio.pause();
}
function hlasitost0(){
    audio.volume = 0;
}
function hlasitost05(){
    audio.volume = 0.5;
}
function hlasitost1(){
    audio.volume = 1;
}
function resettaudio(){
    audio.currentTime = 0;
}
zvuk.play();
zvuk.pause();
zvuk.currentTime = 0;
zvuk.volume = 0.5;