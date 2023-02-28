/** ----- ----- ----- Boton  Volver Arriba ----- ----- ---- */

const toTop = () => window.scrollTo({top: 0 , behavior: "smooth" });


/** ----- ----- ----- Boton Abrir Link ----- ----- ---- */
function openLink(){
    window.open("https://www.unsam.edu.ar/escuelas/ciencia/661/ciencia/ciencia-de-datos")
}

function opentoLink(){
    window.open("https://www.economicas.uba.ar/alumnos/actuario/")
}


/** ----- ----- ----- Botones Nación ----- ----- ---- */

function toMore(){
    document.getElementById("showtext_nacion").style.display="none"
    document.getElementById("hidetext_nacion").style.display="block"
}

function toBack(){
    document.getElementById("showtext_nacion").style.display="block"
    document.getElementById("hidetext_nacion").style.display="none"
}


/** ----- ----- ----- Botones Nación  ----- ----- ---- */


function toMore(){
    document.getElementById("showtext_nacion").style.display="none"
    document.getElementById("hidetext_nacion").style.display="block"
}

function toBack(){
    document.getElementById("showtext_nacion").style.display="block"
    document.getElementById("hidetext_nacion").style.display="none"
}


/** ----- ----- ----- Botones Restaurant ----- ----- ---- */


function toMore_R(){
    document.getElementById("showtext_rest").style.display="none"
    document.getElementById("hidetext_rest").style.display="block"
}

function toBack_R(){
    document.getElementById("showtext_rest").style.display="block"
    document.getElementById("hidetext_rest").style.display="none"
}




/** ----- ----- ----- Botones Voluntariado ----- ----- ----- */


function toMore_V(){
    document.getElementById("showtext_vol").style.display="none"
    document.getElementById("hidetext_vol").style.display="block"
}

function toBack_V(){
    document.getElementById("showtext_vol").style.display="block"
    document.getElementById("hidetext_vol").style.display="none"
}




/** ----- ----- ----- Botones Tutor ----- ----- ----- */


function toMore_T(){
    document.getElementById("showtext_tut").style.display="none"
    document.getElementById("hidetext_tut").style.display="block"
}

function toBack_T(){
    document.getElementById("showtext_tut").style.display="block"
    document.getElementById("hidetext_tut").style.display="none"
}



/** ----- ----- -----  ----- ----- ----- Cambio de Aspecto Estudio ----- ----- -----  ----- ----- ----- */


/** -----  Azul  ----- */

function toblue(){
    document.getElementById("card_change1").style.backgroundColor="#00006b"
    document.getElementById("card_change2").style.backgroundColor="#1407d5"
    document.getElementById("text_color1").style.color="black"
    document.getElementById("text_color2").style.color="black"
    document.getElementById("text_color3").style.color="black"
    document.getElementById("text_color4").style.color="black"
    document.getElementById("text_color5").style.color="black"
    document.getElementById("text_color6").style.color="black"
    document.getElementById("text_color7").style.color="black"
    document.getElementById("text_color8").style.color="black"
}


/** -----  Rojo  ----- */

function tored(){
    document.getElementById("card_change1").style.backgroundColor="#ef5436"
    document.getElementById("card_change2").style.backgroundColor="#98140d"
    document.getElementById("text_color1").style.color="black"
    document.getElementById("text_color2").style.color="black"
    document.getElementById("text_color3").style.color="black"
    document.getElementById("text_color4").style.color="black"
    document.getElementById("text_color5").style.color="black"
    document.getElementById("text_color6").style.color="black"
    document.getElementById("text_color7").style.color="black"
    document.getElementById("text_color8").style.color="black"
}


/** -----  Green  ----- */

function togreen(){
    document.getElementById("card_change1").style.backgroundColor="#1e5418"
    document.getElementById("card_change2").style.backgroundColor="#82be70"
    document.getElementById("text_color1").style.color="black"
    document.getElementById("text_color2").style.color="black"
    document.getElementById("text_color3").style.color="black"
    document.getElementById("text_color4").style.color="black"
    document.getElementById("text_color5").style.color="black"
    document.getElementById("text_color6").style.color="black"
    document.getElementById("text_color7").style.color="black"
    document.getElementById("text_color8").style.color="black"
}


/** -----  Amarillo ----- */

function toyellow(){
    document.getElementById("card_change1").style.backgroundColor="#ffff7d"
    document.getElementById("card_change2").style.backgroundColor="#fcff00"
    document.getElementById("text_color1").style.color="black"
    document.getElementById("text_color2").style.color="black"
    document.getElementById("text_color3").style.color="black"
    document.getElementById("text_color4").style.color="black"
    document.getElementById("text_color5").style.color="black"
    document.getElementById("text_color6").style.color="black"
    document.getElementById("text_color7").style.color="black"
    document.getElementById("text_color8").style.color="black"
}



/** -----  Volver  ----- */

function tochangeback(){
    document.getElementById("card_change1").style.backgroundColor="#27282D"
    document.getElementById("card_change2").style.backgroundColor="#27282D"
    document.getElementById("text_color1").style.color="white"
    document.getElementById("text_color2").style.color="white"
    document.getElementById("text_color3").style.color="white"
    document.getElementById("text_color4").style.color="white"
    document.getElementById("text_color5").style.color="white"
    document.getElementById("text_color6").style.color="white"
    document.getElementById("text_color7").style.color="white"
    document.getElementById("text_color8").style.color="white"
}



/** ----- ----- ----- ----- ----- -----  Cambio de Aspecto Experiencia ----- ----- ----- ----- ----- -----  */


/** -----  Azul  ----- */

function toblue_e(){
    document.getElementById("card_nacion").style.backgroundColor="#8e5ef6"
    document.getElementById("card_rest").style.backgroundColor="#2a15d0"
    document.getElementById("card_vol").style.backgroundColor="#c78bff"
    document.getElementById("card_tut").style.backgroundColor="#0a0584"
}


/** -----  Rojo  ----- */

function tored_e(){
    document.getElementById("card_nacion").style.backgroundColor="#ff8c64"
    document.getElementById("card_rest").style.backgroundColor="#89291b"
    document.getElementById("card_vol").style.backgroundColor="#a71509"
    document.getElementById("card_tut").style.backgroundColor="#fd4e35"
    
}


/** -----  Verde  ----- */

function togreen_e(){
    document.getElementById("card_nacion").style.backgroundColor="#0c4a07"
    document.getElementById("card_rest").style.backgroundColor="#64b153"
    document.getElementById("card_vol").style.backgroundColor="#abde98"
    document.getElementById("card_tut").style.backgroundColor="#3a5a32"
}


/** -----  Amarillo  ----- */

function toyellow_e(){
    document.getElementById("card_nacion").style.backgroundColor="#f8ff00"
    document.getElementById("card_rest").style.backgroundColor="#fdff77"
    document.getElementById("card_vol").style.backgroundColor="#d6db00"
    document.getElementById("card_tut").style.backgroundColor="#fbff29"
}


/** -----  Arcoiris  ----- */

function toarcoiris_e(){
    document.getElementById("card_nacion").style.backgroundColor="#a71509"
    document.getElementById("card_rest").style.backgroundColor="#ecf200"
    document.getElementById("card_vol").style.backgroundColor="#64b153"
    document.getElementById("card_tut").style.backgroundColor="#8e5ef6"
}


/** -----  Default  ----- */

function tochangeback_e(){
    document.getElementById("card_nacion").style.backgroundColor="#27282D"
    document.getElementById("card_rest").style.backgroundColor="#27282D"
    document.getElementById("card_vol").style.backgroundColor="#27282D"
    document.getElementById("card_tut").style.backgroundColor="#27282D"
}





/** ----- ----- ---------- ----- -----  Cambio de Aspecto Habilidades  ----- ----- ----- ----- ----- ----- */


/** -----  Azul  ----- */

function toblue_h(){
    document.getElementById("progre1").style.backgroundColor="#00008e"
    document.getElementById("progre2").style.backgroundColor="#4122d8"
    document.getElementById("progre3").style.backgroundColor="#2111b3"
    document.getElementById("progre4").style.backgroundColor="#ffcaff"
    document.getElementById("progre5").style.backgroundColor="#000034"
    document.getElementById("progre6").style.backgroundColor="#8a68fd"
}


/** -----  Rojo  ----- */

function tored_h(){
    document.getElementById("progre1").style.backgroundColor="#a52113"
    document.getElementById("progre2").style.backgroundColor="#f16343"
    document.getElementById("progre3").style.backgroundColor="#a52113"
    document.getElementById("progre4").style.backgroundColor="#c02315"
    document.getElementById("progre5").style.backgroundColor="#fbb88c"
    document.getElementById("progre6").style.backgroundColor="#4c0000"
}


/** -----  Verde  ----- */

function togreen_h(){
    document.getElementById("progre1").style.backgroundColor="#338f26"
    document.getElementById("progre2").style.backgroundColor="#143f0e"
    document.getElementById("progre3").style.backgroundColor="#95bd85"
    document.getElementById("progre4").style.backgroundColor="#b1ff98"
    document.getElementById("progre5").style.backgroundColor="#048002"
    document.getElementById("progre6").style.backgroundColor="#3b7c2e"
}


/** -----  Amarillo  ----- */

function toyellow_h(){
    document.getElementById("progre1").style.backgroundColor="#fdffac"
    document.getElementById("progre2").style.backgroundColor="#d5dc00"
    document.getElementById("progre3").style.backgroundColor="#feff74"
    document.getElementById("progre4").style.backgroundColor="#feff00"
    document.getElementById("progre5").style.backgroundColor="#b4be00"
    document.getElementById("progre6").style.backgroundColor="#f9ff39"
}


/** -----  Arcoiris  ----- */

function toarcoiris_h(){
    document.getElementById("progre1").style.backgroundColor="#fb1808"
    document.getElementById("progre2").style.backgroundColor="#338f26"
    document.getElementById("progre3").style.backgroundColor="#3419e8"
    document.getElementById("progre4").style.backgroundColor="#000090"
    document.getElementById("progre5").style.backgroundColor="#f75b3c"
    document.getElementById("progre6").style.backgroundColor="#fcff00"
}


/** -----  Default  -----   Color Default:    #d2f15fd8  */   

function tochangeback_h(){
    document.getElementById("progre1").style.backgroundColor="#d2f15fd8"
    document.getElementById("progre2").style.backgroundColor="#d2f15fd8"
    document.getElementById("progre3").style.backgroundColor="#d2f15fd8"
    document.getElementById("progre4").style.backgroundColor="#d2f15fd8"
    document.getElementById("progre5").style.backgroundColor="#d2f15fd8"
    document.getElementById("progre6").style.backgroundColor="#d2f15fd8"
}