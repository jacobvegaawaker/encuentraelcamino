
var ultseleccionada = "";
var cini;
var cfin;
var juegofin = 0;

function iniciar(){
    var celdasini = [11,21,31,41];
    var celdasfin = [14,24,34,44];
    var nini = Math.floor(Math.random()*(4));
    var nfin = Math.floor(Math.random()*(4));
    console.log("inicial: " + "celda" + celdasini[nini]);
    console.log("final: " + "celda" + celdasfin[nfin]);
    cini = document.getElementById('celda' + celdasini[nini]);
    cini.style.backgroundColor = 'darkgoldenrod';
    cfin = document.getElementById('celda' + celdasfin[nfin]);
    cfin.style.backgroundColor = 'darkgoldenrod';
    ultseleccionada = "celda" + celdasini[nini].toString();
}

function validar(celda){

    if (juegofin == 1){
        alert("El juego ya terminó, por favor reinicie.");
        return;
    }

    if (celda.style.backgroundColor == 'darkgoldenrod' && celda.id.toString() != cfin.id.toString()){
        alert("La celda ya está seleccionada.");
    }
    else{
        filacelda = celda.id.substring(5,celda.id.length-1);
        colcelda = celda.id.substring(6,celda.id.length+1);

        var i = parseInt(filacelda)-1;
        var j;
        var encontrado = 0;

        while (i<=(parseInt(filacelda)+1)){
            j=parseInt(colcelda)-1;
            while (j<=(parseInt(colcelda)+1)){
                if (i >= 1 && i <= 4 && j >= 1 && j <= 4){
                    if (ultseleccionada.localeCompare(
                        "celda" + i.toString() + j.toString()) == 0){
                        encontrado = 1;
                    }
                }
                j++;
            }
            i++;
        }

        if (encontrado == 1){
            celda.style.backgroundColor = 'darkgoldenrod';
            ultseleccionada = celda.id.toString();

            if (ultseleccionada == cfin.id.toString()){
                alert("El juego terminó.");
                juegofin = 1;
            }
        }
        else{
            alert("La celda seleccionada no es adyacente con la última.");
        }
    }
}