function clicou() {
  var caixa1 = document.getElementById('caixa1')
  var caixa2 = document.getElementById('caixa2')
  var caixa3 = document.getElementById('caixa3')
  var contagem = document.getElementById('contagem')
  caixa1 = Number(caixa1.value)
  caixa2 = Number(caixa2.value)
  caixa3 = Number(caixa3.value)

  contagem.innerText = ''

  if (caixa3 < 1) {
    alert('deu ruim')
  } else {
    while (caixa1 <= caixa2) {
      console.log('contagem')
      contagem.innerText = `${contagem.innerText} 🖤 ${caixa1}`
      caixa1 = caixa1 + caixa3
    }
  }
}
