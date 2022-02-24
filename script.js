const grauEsfericoDireito = $('#ed').val()
const grauEsfericoEsquerdo = $('#ee').val()
const grauCilindricoDireito = $('#cd').val()
const grauCilindricoEsquerdo = $('#ce').val()

function retornaLente(){
    if (grauCilindricoDireito == 0 && grauCilindricoEsquerdo == 0 &&( 
        (grauEsfericoDireito >= -12 && grauEsfericoDireito <= -3) ||
        (grauEsfericoEsquerdo >= -12 && grauEsfericoEsquerdo <= -3))
    ) {
        $('#resultado').text("As Lentes Prime são as mais recomendadas para você!");

}
else if (grauCilindricoDireito >= -2 && grauCilindricoEsquerdo >= -2 &&(
    (grauEsfericoDireito >= -10 && grauEsfericoDireito <= -3) || 
    (grauEsfericoEsquerdo >= -10 && grauEsfericoEsquerdo <= -3))
) {
    $('#resultado').text("As Lentes Prime são as mais recomendadas para você!"); 
    }
    else if (grauCilindricoEsquerdo >= -5 && grauCilindricoDireito>= -5 &&
        ((grauEsfericoDireito >= -15 && grauEsfericoDireito <= 0) || 
        (grauEsfericoEsquerdo>= -15 && grauEsfericoEsquerdo <= 0))
    ) {
        $('#resultado').text("As Lentes Vision são as mais recomendadas para você!"); 
    }
        else {
            $('#resultado').text("Desculpe, não possuimos lentes para sua receita.");
        }
}

    

