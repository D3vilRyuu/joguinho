function iniciarJogo(){
    var nivel = document.getElementById('nivel').value

    if (nivel === ""){
        alert ("Selecione o nivel do jogo!")
        return false
    }
    window.location.href = 'jogo.html?' + nivel
}
