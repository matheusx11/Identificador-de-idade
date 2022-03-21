function verificar() {
    var data = new Date()
    var ano = data.getFullYear()

    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
   
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
                             //HOMEM
              //-------------------------------------------------               
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebehomem.png')
            } else if (idade < 21) {
               // jovem
               img.setAttribute('src', 'jovenhomen.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'homemadulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosohomem.png')
            }
                             //MULHER
                //-------------------------------------------------  
        } else if ((fsex[1].checked)) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebemulher.png')
            } else if (idade < 21) {
               // jovem
               img.setAttribute('src', 'jovenmulher.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'mulheradulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosamulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
  
}
 


var sexoF = window.document.querySelector('input#fem')
var sexoM = window.document.querySelector('input#mas')