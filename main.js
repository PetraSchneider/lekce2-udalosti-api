// tady je místo pro náš program
function zmenaPozadi(){
    let text;
    text = document.querySelector('.odstavec');
    text.classList.toggle('tridaOdsatvce');
}
function zmenaVelikosti(event){
   let pismo;
   pismo = document.querySelector('.odstavec')
   pismo.style.fontSize = '+ 1px'
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