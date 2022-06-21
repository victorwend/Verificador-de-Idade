function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('anot')
   var res = document.getElementById('res')
   if(fano.value.length == 0 || fano.value > ano){
    window.alert('[ERRO] Verifique os valores novamente!')
   } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')//Chamar uma imagem com javascript
    img.setAttribute('id', 'foto')// para chamar a foto
    if (fsex[0].checked){
        genero = 'Homem'
        if(idade >=0 && idade <=10){
            img.setAttribute('src','criancah.png')
            document.body.style.background = '#cfd5e1'
            //criança      
        }else if( idade <21){
            img.setAttribute('src','jovemh.png')
            document.body.style.background ='#cfd5e1'

            //joovem
        }else if(idade <60){
            img.setAttribute('src','adultoh.png') 
            document.body.style.background ='#cfd5e1'

            //adulto
        }else {
            img.setAttribute('src','idosoh.png')
            document.body.style.background ='#cfd5e1'

            //idoso
        }
    }else if (fsex[1].checked){
        genero = 'Mulher'
        if(idade >=0 && idade <=10){
            img.setAttribute('src','criancam.png')

            document.body.style.background ='#f58f9a'
            //criança
        }else if( idade <21){
            img.setAttribute('src','jovemm.png')

            document.body.style.background ='#f58f9a'
            //joovem
        }else if(idade <60){
            img.setAttribute('src','adultom.png')

            document.body.style.background ='#f58f9a'
            //adulto
        }else {
            img.setAttribute('src','idosom.png') 

            document.body.style.background ='#f58f9a'
            //idoso
        }
    }
     res.style.textAlign = 'center'//centralizar texto com javaScript
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)//para mostrar a imagem no site 
    
    
   }
  
}