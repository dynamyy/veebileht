/*
Koodi autor: Egert

Kasutatud materjale:
https://www.w3schools.com/js/default.asp
https://www.geeksforgeeks.org/how-to-execute-after-page-load-in-javascript/

*/

// Funktsioon menüü sulgemiseks nupuvajutuse peale
function menüütoggle() {
    if (menüü_suletud == false) {
        // Leian ruudustiku konteineri ja sulgen sujuvalt esimese rea (menüü)
        const grid_konteiner = document.getElementById("grid-konteiner");
        grid_konteiner.style.transition = "all 2s";
        grid_konteiner.style.gridTemplateColumns = "0 1fr";

        // Muudan menüünupu välimuse
        const nuputriibud = document.getElementsByClassName("nuputriip");
        for (const triip of nuputriibud) {
            triip.style.transition = "all 2s";
        };
        nuputriibud.item(0).style.transform = "rotate(0)";
        nuputriibud.item(2).style.transform = "rotate(0)";
        nuputriibud.item(1).style.opacity = "1";

        // Liigutan menüünuppu
        const menüünupp = document.getElementById("menüü_sulge");
        menüünupp.style.transition = "all 2s";
        menüünupp.style.left = ("105%");

        // Uuendan menüü oleku muutujat
        menüü_suletud = true;
    } else {
        // Leian ruudustiku konteineri ja avan selle esimese rea (menüü)
        const grid_konteiner = document.getElementById("grid-konteiner");
        grid_konteiner.style.transition = "all 2s";
        grid_konteiner.style.gridTemplateColumns = "20% 80%";

        // Muudan menüünupu välimuse
        const nuputriibud = document.getElementsByClassName("nuputriip");
        for (const triip of nuputriibud) {
            triip.style.transition = "all 2s";
        };
        nuputriibud.item(0).style.transform = "translate(0, 11px) rotate(45deg)";
        nuputriibud.item(2).style.transform = "translate(0, -11px) rotate(-45deg)";
        nuputriibud.item(1).style.opacity = "0";

        // Liigutan menüünuppu
        const menüünupp = document.getElementById("menüü_sulge");
        menüünupp.style.transition = "all 2s";
        menüünupp.style.left = "calc(95% - 30px)";

        // Uuendan menüü oleku muutujat
        menüü_suletud = false;
    };
    
    
};

// Globaalne muutuja menüü oleku jälgimiseks
let menüü_suletud = false;
// Käivitan koodi alles peale HTML elementide laadimist, muidu ei leia js elemente üles
window.onload = function() {
    // Lisan menüünupule klikkimisfunktsiooni
    const menüünupp = document.getElementById("menüü_sulge");
    menüünupp.addEventListener("click", menüütoggle);
};

