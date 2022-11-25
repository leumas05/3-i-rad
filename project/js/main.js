var XO = 'x'
var likaa = 0
var XellerO;
var visa = 'false'
var visaKnappar = 'true'
Visa();


var tagen = ['false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false']

var plattser = ['0','0','0',
                '0','0','0',            
                '0','0','0']

function Xvinnst(){
    uppdatera();
    endScreen();
    XellerO = 'X'
    Visatext();
}

function Ovinnst(){
    uppdatera();
    endScreen();
    XellerO = 'O'
    Visatext();
}

document.getElementById('a1_1').onclick = function(){
    switch(tagen[0]){
        case 'false':
            switch(XO){
                case "x":
                    plattser[0] = 'x'      
                    XO = 'o' 
                    document.getElementById("b1_1").innerHTML = "X";
                    tagen[0] = 'true'
                    lika();
                break;
                case "o":
                    plattser[0] = 'o'
                    XO= 'x'
                    document.getElementById("b1_1").innerHTML = "O";
                    tagen[0] = 'true'
                    lika();
                break;
            }
     break;
        case 'true':
           alert(plattser[0])
        break;
    }

    if(plattser[0] == 'x' && plattser[1] == 'x' && plattser[2] == 'x'){
        Xvinnst();
    }
    else if(plattser[0] == 'x' && plattser[3] == 'x' && plattser[6] == 'x'){
        Xvinnst();
    }
    else if(plattser[0] == 'x' && plattser[4] == 'x' && plattser[8] == 'x'){
        Xvinnst();
    }

    if(plattser[0] == 'o' && plattser[1] == 'o' && plattser[2] == 'o'){
        Ovinnst();
    }
    else if(plattser[0] == 'o' && plattser[3] == 'o' && plattser[6] == 'o'){
        Ovinnst();
    }
    else if(plattser[0] == 'o' && plattser[4] == 'o' && plattser[8] == 'o'){
        Ovinnst();
    }

}

document.getElementById('a1_2').onclick = function(){
    switch(tagen[1]){
        case 'false':
            switch(XO){
                case "x":
                    plattser[1] = 'x'      
                    XO = 'o' 
                    document.getElementById("b1_2").innerHTML = "X";
                    tagen[1] = 'true'
                    lika();
                break;
                case "o":
                    plattser[1] = 'o'
                    XO= 'x'
                    document.getElementById("b1_2").innerHTML = "O";
                    tagen[1] = 'true'
                    lika();
                break;
            }
     break;
        case 'true':
            alert(plattser[1])
        break;
    }
    if(plattser[0] == 'x' && plattser[1] == 'x' && plattser[2] == 'x'){
        Xvinnst();
    }
    else if(plattser[1] == 'x' && plattser[4] == 'x' && plattser[7] == 'x'){
        Xvinnst();
    }
    if(plattser[0] == 'o' && plattser[1] == 'o' && plattser[2] == 'o'){
        Ovinnst();
    }
    else if(plattser[1] == 'o' && plattser[4] == 'o' && plattser[7] == 'o'){
        Ovinnst();
    }
}

document.getElementById('a1_3').onclick = function(){
    switch(tagen[2]){
        case 'false':
            switch(XO){
                case "x":
                    plattser[2] = 'x'      
                    XO = 'o' 
                    document.getElementById("b1_3").innerHTML = "X";
                    tagen[2] = 'true'
                    lika();
                break;
                case "o":
                    plattser[2] = 'o'
                    XO= 'x'
                    document.getElementById("b1_3").innerHTML = "O";
                    tagen[2] = 'true'
                    lika();
                break;
            }
     break;
        case 'true':
            alert(plattser[2])
        break;
    }
    if(plattser[0] == 'x' && plattser[1] == 'x' && plattser[2] == 'x'){
        Xvinnst();
    }
    else if(plattser[2] == 'x' && plattser[5] == 'x' && plattser[8] == 'x'){
        Xvinnst();
    }
    else if(plattser[2] == 'x' && plattser[4] == 'x' && plattser[6] == 'x'){
        Xvinnst();
    }
    if(plattser[0] == 'o' && plattser[1] == 'o' && plattser[2] == 'o'){
        Ovinnst();
    }
    else if(plattser[2] == 'o' && plattser[5] == 'o' && plattser[8] == 'o'){
        Ovinnst();
    }
    else if(plattser[2] == 'o' && plattser[4] == 'o' && plattser[6] == 'o'){
        Ovinnst();
    }
}

document.getElementById('a2_1').onclick = function(){
    switch(tagen[3]){
        case 'false':
            switch(XO){
                case "x":
                    plattser[3] = 'x'      
                    XO = 'o' 
                    document.getElementById("b2_1").innerHTML = "X";
                    tagen[3] = 'true'
                    lika();
                break;
                case "o":
                    plattser[3] = 'o'
                    XO= 'x'
                    document.getElementById("b2_1").innerHTML = "O";
                    tagen[3] = 'true'
                    lika();
                break;
            }
     break;
        case 'true':
            alert(plattser[3])
        break;
    }
    if(plattser[3] == 'x' && plattser[4] == 'x' && plattser[5] == 'x'){
        Xvinnst();
    }
    else if(plattser[0] == 'x' && plattser[3] == 'x' && plattser[6] == 'x'){
        Xvinnst();
    }
    if(plattser[3] == 'o' && plattser[4] == 'o' && plattser[5] == 'o'){
        Ovinnst();
    }
    else if(plattser[0] == 'o' && plattser[3] == 'o' && plattser[6] == 'o'){
        Ovinnst();
    }
}

document.getElementById('a2_2').onclick = function(){
    switch(tagen[4]){
        case 'false':
            switch(XO){
                case "x":
                    plattser[4] = 'x'      
                    XO = 'o' 
                    document.getElementById("b2_2").innerHTML = "X";
                    tagen[4] = 'true'
                    lika();
                break;
                case "o":
                    plattser[4] = 'o'
                    XO= 'x'
                    document.getElementById("b2_2").innerHTML = "O";
                    tagen[4] = 'true'
                    lika();
                break;
            }
     break;
        case 'true':
            alert(plattser[4])
        break;
    }
    if(plattser[3] == 'x' && plattser[4] == 'x' && plattser[5] == 'x'){
        Xvinnst();
    }
    else if(plattser[1] == 'x' && plattser[4] == 'x' && plattser[7] == 'x'){
        Xvinnst();
    }
    else if(plattser[0] == 'x' && plattser[4] == 'x' && plattser[8] == 'x'){
        Xvinnst();
    }
    else if(plattser[2] == 'x' && plattser[4] == 'x' && plattser[6] == 'x'){
        Xvinnst();
    }
    if(plattser[3] == 'o' && plattser[4] == 'o' && plattser[5] == 'o'){
        Ovinnst();
    }
    else if(plattser[1] == 'o' && plattser[4] == 'o' && plattser[7] == 'o'){
        Ovinnst();
    }
    else if(plattser[0] == 'o' && plattser[4] == 'o' && plattser[8] == 'o'){
        Ovinnst();
    }
    else if(plattser[2] == 'o' && plattser[4] == 'o' && plattser[6] == 'o'){
        Ovinnst();
    }
}

document.getElementById('a2_3').onclick = function(){
    switch(tagen[5]){
        case 'false':
            switch(XO){
                case "x":
                    plattser[5] = 'x'      
                    XO = 'o' 
                    document.getElementById("b2_3").innerHTML = "X";
                    tagen[5] = 'true'
                    lika();
                break;
                case "o":
                    plattser[5] = 'o'
                    XO= 'x'
                    document.getElementById("b2_3").innerHTML = "O";
                    tagen[5] = 'true'
                    lika();
                break;
            }
     break;
        case 'true':
            alert(plattser[5])
        break;
    }
    if(plattser[3] == 'x' && plattser[4] == 'x' && plattser[5] == 'x'){
        Xvinnst();
    }
    else if(plattser[2] == 'x' && plattser[5] == 'x' && plattser[8] == 'x'){
        Xvinnst();
    }
    if(plattser[3] == 'o' && plattser[4] == 'o' && plattser[5] == 'o'){
        Ovinnst();
    }
    else if(plattser[2] == 'o' && plattser[5] == 'o' && plattser[8] == 'o'){
        Ovinnst();
    }
}

document.getElementById('a3_1').onclick = function(){
    switch(tagen[6]){
        case 'false':
            switch(XO){
                case "x":
                    plattser[6] = 'x'      
                    XO = 'o' 
                    document.getElementById("b3_1").innerHTML = "X";
                    tagen[6] = 'true'
                    lika();
                break;
                case "o":
                    plattser[6] = 'o'
                    XO= 'x'
                    document.getElementById("b3_1").innerHTML = "O";
                    tagen[6] = 'true'
                    lika();
                break;
            }
     break;
        case 'true':
            alert(plattser[6])
        break;
    }
    if(plattser[6] == 'x' && plattser[7] == 'x' && plattser[8] == 'x'){
        Xvinnst();
    }
    else if(plattser[0] == 'x' && plattser[3] == 'x' && plattser[6] == 'x'){
        Xvinnst();
    }
    else if(plattser[2] == 'x' && plattser[4] == 'x' && plattser[6] == 'x'){
        Xvinnst();
    }
    if(plattser[6] == 'o' && plattser[7] == 'o' && plattser[8] == 'o'){
        Ovinnst();
    }
    else if(plattser[0] == 'o' && plattser[3] == 'o' && plattser[6] == 'o'){
        Ovinnst();
    }
    else if(plattser[2] == 'o' && plattser[4] == 'o' && plattser[6] == 'o'){
        Ovinnst();
    }
}

document.getElementById('a3_2').onclick = function(){
    switch(tagen[7]){
        case 'false':
            switch(XO){
                case "x":
                    plattser[7] = 'x'      
                    XO = 'o' 
                    document.getElementById("b3_2").innerHTML = "X";
                    tagen[7] = 'true'
                    lika();
                break;
                case "o":
                    plattser[7] = 'o'
                    XO= 'x'
                    document.getElementById("b3_2").innerHTML = "O";
                    tagen[7] = 'true'
                    lika();
                break;
            }
     break;
        case 'true':
            alert(plattser[7])
        break;
    }
    if(plattser[6] == 'x' && plattser[7] == 'x' && plattser[8] == 'x'){
        Xvinnst();
    }
    else if(plattser[1] == 'x' && plattser[4] == 'x' && plattser[7] == 'x'){
        Xvinnst();
    }
    if(plattser[6] == 'o' && plattser[7] == 'o' && plattser[8] == 'o'){
        Ovinnst();
    }
    else if(plattser[1] == 'o' && plattser[4] == 'o' && plattser[7] == 'o'){
        Ovinnst();
    }
}

document.getElementById('a3_3').onclick = function(){
    switch(tagen[8]){
        case 'false':
            switch(XO){
                case "x":
                    plattser[8] = 'x'      
                    XO = 'o' 
                    document.getElementById("b3_3").innerHTML = "X";
                    tagen[8] = 'true'
                    lika();
                break;
                case "o":
                    plattser[8] = 'o'
                    XO= 'x'
                    document.getElementById("b3_3").innerHTML = "O";
                    tagen[8] = 'true'
                    lika();
                break;
            }
     break;
        case 'true':
            alert(plattser[8])
        break;
    }
    if(plattser[6] == 'x' && plattser[7] == 'x' && plattser[8] == 'x'){
        Xvinnst();
    }
    else if(plattser[2] == 'x' && plattser[5] == 'x' && plattser[8] == 'x'){
        Xvinnst();
    }
    else if(plattser[0] == 'x' && plattser[4] == 'x' && plattser[8] == 'x'){
        Xvinnst();
    }
    if(plattser[6] == 'o' && plattser[7] == 'o' && plattser[8] == 'o'){
        Ovinnst();
    }
    else if(plattser[2] == 'o' && plattser[5] == 'o' && plattser[8] == 'o'){
        Ovinnst();
    }
    else if(plattser[0] == 'o' && plattser[4] == 'o' && plattser[8] == 'o'){
        Ovinnst();
    }
}

function uppdatera(){
    document.getElementById('b1_1').innerHTML = ''
    document.getElementById("b1_2").innerHTML = ''
    document.getElementById("b1_3").innerHTML = ''

    document.getElementById("b2_1").innerHTML = ''
    document.getElementById("b2_2").innerHTML = ''
    document.getElementById("b2_3").innerHTML = ''

    document.getElementById("b3_1").innerHTML = ''
    document.getElementById("b3_2").innerHTML = ''
    document.getElementById("b3_3").innerHTML = ''

    plattser = ['0','0','0',
                '0','0','0',            
                '0','0','0']

    tagen = ['false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false']

    likaa = 0
    XO = 'x'
}

function endScreen(){
    visaKnappar = 'false'
    visa = 'true'
    Visa();
}

function Visa(){
    switch(visa){
        case 'false':
            document.getElementById('Vinnst').style.display = "none";
                break;
        case 'true':
            document.getElementById('Vinnst').style.display = "block";
              break;
    }

    switch(visaKnappar){
        case 'false':
            document.getElementById('knappar').style.display = "none";
                break;
        case 'true':
            document.getElementById('knappar').style.display = "grid";
                break;
    }
}

function Visatext(){
    switch(XellerO){
        case 'X':
            document.getElementById('XOvinnst').innerHTML = 'X vann'
                break;
        case 'O':
            document.getElementById('XOvinnst').innerHTML = 'O vann'
                break;
        case 'L':
            document.getElementById('XOvinnst').innerHTML = 'Lika'
                break;
    }
}

document.getElementById('spelaOm').onclick = function() {
    uppdatera();
    visa = 'false'
    visaKnappar = 'true'
    Visa();

}

function lika(){
    likaa += 1;
    if(likaa == 9){
        uppdatera();
        endScreen();
        XellerO = 'L'
        Visatext();
    }
}