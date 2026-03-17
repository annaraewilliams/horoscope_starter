//python -m http.server

let signs = ["Sagittarius", "Capricorn","Aquarius", "Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Ophiuchus"]
let messages = ["You will not have a good lunch","Don't sleep on the left side of the bed","Follow the rainbow","On December 16,2032 make sure to never blink twice", "Beware of brussel sprouts", "Don't say the word 'wait' for a whole year", "Sing a song in public", "You will be captured and taken to an alien world", "You will find $3,000 on the side of the road", "You will meet a talking dog", "You will be a billionaire","You will meet your soulmate", "Don't drink water for the rest of the day"];
let images = ["images/sagittarius.jpg", "images/capricorn.png","images/aquarius.png","images/pisces.png","images/aries.webp","images/taurus.png","images/gemini.png","images/cancer.png","images/leo.png","images/virgo.png","images/libra.png","images/scorpio.png","images/opi.avif"]

let sign = 0;

function bday(){
    var month = document.getElementById("month").value
    var day = document.getElementById("day").value

    if (month==1){
        if(day>=20){
            var sign = 1;
        }
        if(day<20) {
            var sign=0
        }
    }
    if (month==2){
        
        if(day<=16){
            var sign = 1
        }
        else{
            var sign= 2
        }
    }
    if (month==3){
        if(day<=11){
            var sign=2
        }
        else{
            var sign=3
        }
    }
    if (month==4){
        if(day<=18){
            var sign =3
        }
        else{
            var sign = 4
        }
    }
    if (month==5){
        if(day<=13){
            var sign = 4
        }
        else{
            var sign = 5
        }
    }
    if (month==6){
        if(day<=21){
            var sign = 5
        }
        else{
            var sign = 6
        }
    }
    if (month==7){
        if(day<=20){
            var sign = 6
        }
        else{
            var sign = 7
        }
    }
    if (month==8){
        if(day<=10){
            var sign = 7
        }
        else{
            var sign =8
        }
    }
    if(month==9){
        if(day<=16){
            var sign = 8
        }
        else{
            var sign = 9
        }
    }
    if (month==10){
        if (day<=30){
            var sign=9
        }
        else{
            var sign = 10
        }
    }
    if(month==11){
        if(day<=23){
            var sign = 10
        }
        if(day>23&&day<29){
            var sign = 11
        }
        else{
            var sign= 12
        }
    }
    if (month==12){
        if(day<=17){
            var sign = 12
        }
        if(day>17){
            var sign=0
        }
    }
    document.getElementById("sign").innerHTML = "You are a " + signs[sign]
    document.getElementById("message").innerHTML = messages[sign];
    document.getElementById("image").src = images[sign];
}
