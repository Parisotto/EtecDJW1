function exibir() {
  const gal = document.querySelector("#galeria")
  // gal.innerHTML = '<h1>Olá, mundo!</h1>'
  // gal.innerHTML = '<img src="../img/1.jpg">'
  // numero = Math.floor(Math.random() * 15) + 1
  // gal.innerHTML = '<img src="../img/' + numero + '.jpg">'

  let listaImagem = ""
  for (let i = 1; i <= 15; i++) {
    //numero = Math.floor(Math.random() * 25) + 1
    //listaImagem = listaImagem + '<img src="../img/' + numero + '.jpg">'
  }

  const numeros = new Set()
  while (numeros.size < 25) {
    numero = Math.floor(Math.random() * 25) + 1
    numeros.add(numero)
  }
  listaNumeros = Array.from(numeros)
  listaNumeros.forEach(numero => {
    listaImagem = listaImagem + '<img src="../img/' + numero + '.jpg">'
  })

  gal.innerHTML = listaImagem
}

window.onload = exibir;