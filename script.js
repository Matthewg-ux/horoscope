function start(){
    var month = document.getElementById("Month").value;
    console.log(Month);
    var day = document.getElementById("Day").value;
    console.log(Day);
    var sign = findSign(month, day);
    var name = document.getElementById("userName").value;
    document.getElementById("sign").innerHTML = signs[sign];
    document.getElementById("message").innerHTML = name + "! " + messages[sign];
    document.getElementById("image").src = images[sign];

    //based on sign, write sign and message out to page using .innerHTML
}

var signs =["Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn","NONE"];
var messages = ["Right now, moving through your life without thinking too hard about what you are doing might not be such a bad idea.",
"It is all well and good for someone to say that they are all about big ideas and helping mankind, but at a certain point they have to stop talking and start acting.",
    "It is all well and good for someone to say that they are all about big ideas and helping mankind, but at a certain point they have to stop talking and start acting.",
    "It is all well and good for someone to say that they are all about big ideas and helping mankind, but at a certain point they have to stop talking and start acting.",
    "Usually the deeper you delve into preliminary research, the more confident you feel in your eventual decisions.",
    "The good news is that your career is about to take a very exciting turn—the bad news is that it might also take up a lot more of your personal time, at least for a while.",
    "Whatever problems there are around your home can wait a few more days to be resolved—focusing on them too hard right now will only put more pressure on the situation.",
    "Keep a friendly, approachable smile on your face today—you need to encourage some withdrawn folks to bring you the idea or solution you've been waiting for.",
    "Your engine is all revved up, but there's really no place for you to go today—all projects are moving forward nicely, and the people in your life are doing well.",
    "It's all about the finishing touches today.","The very first step to getting what (or who) you've been wanting is to express it.",
    "Exercise a little bit of your power today, and you might start to enjoy the autonomy you have.","The date you have entered is not valid!"];
var images = ["img/aquarius.jpg","img/pisces.jpg","img/aries.jpg","img/taurus.jpg","img/gemini.jpg","img.cancer.jpg","img/leo.jpg",
"img/virgo.jpg","img/libra.jpg","img/scorpio.jpg","img/sagittarius.jpg","img/capricorn.jpg","img/sadface.jpg"];



function findSign(month, day){

    if(month == 1 && day > 21 || month == 2 && day < 19){
        return 0; // aquarius
    }
    if(month == 2 && day > 18 && day < 30 || month == 3 && day < 20){
        return 1; // pisces
    }
    if(month == 3 && day > 19 || month == 4 && day < 20){
        return 2; // aries
    }
    if(month == 4 && day > 19 && day < 31|| month == 5 && day < 21){
        return 3; // taurus
    }
    if(month == 5 && day > 20 || month == 6 && day < 22){
        return 4; // gemini
    }
    if(month == 6 && day > 21 && day < 31|| month == 7 && day < 23){
        return 5; // cancer
    }
    if(month == 7 && day > 22 || month == 8 && day < 23){
        return 6; // leo
    }
    if(month == 8 && day > 22 || month == 9 && day < 23){
        return 7; // virgo
    }
    if(month == 9 && day > 22 && day < 31|| month == 10 && day < 24){
        return 8; // libra
    }
    if(month == 10 && day > 23 || month == 11 && day < 22){
        return 9; // scorpio
    }
    if(month == 11 && day > 21 && day < 31|| month == 12 && day < 22){
        return 10; // sagittaurus
    }
    if(month == 12 && day > 21 || month == 1 && day < 22){
        return 11; // capricorn
    }

    if(month == 2 && day > 28){
        return 12;
    }
    if(month == 4 && day > 30){
        return 12;
    }
    if(month == 6 && day > 30){
        return 12;
    }
    if(month == 9 && day > 30){
        return 12;
    }
    if(month == 11 && day > 30){
        return 12;
    }

}