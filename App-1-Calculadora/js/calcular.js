function calcular(tipo, valor){
    if(tipo === 'acao'){
      
      if(valor === 'c'){
        //Limpar o visor id="resultado"
        document.getElementById('resultado').value = ''
      }

      //Concatena o caracter da operação junto com os valores numericos (ainda em String)
      if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
        document.getElementById('resultado').value += valor
      }

      if(valor === '='){
        var valor_campo = eval(document.getElementById('resultado').value)
        console.log(valor_campo)
        document.getElementById('resultado').value = valor_campo
      }
    }else if(tipo === 'valor'){
      document.getElementById('resultado').value += valor
    }
  }