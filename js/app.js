let amigos = [];

function adicionar() {
  let amigo = document.getElementById('nome-amigo').value;
  amigo = amigo.toUpperCase();
  if (amigo == '') {
    alert('Informe o nome do participante!');
    return;
  }

  if (amigos.includes(amigo)) {
    alert('Esse participante ja foi adicionado!');
    return;
  }

  let lista = document.getElementById('lista-amigos');
  amigos.push(amigo);
  if (lista.textContent == '') {
    lista.textContent = amigo;
  } else {
    lista.textContent = `${lista.textContent}, ${amigo}`;
  }

  document.getElementById('nome-amigo').value = '';
}

function sortear() {
  if (amigos.length < 4) {
    alert('Adicione pelo menos 4 participantes!');
    return
  }
  if (amigos.length % 2 != 0) {
    alert('Adicione um numero par de participantes');
    return
  }
  document.getElementById('lista-sorteio').innerHTML = '';

  embaralha(amigos);
  let sorteio = document.getElementById('lista-sorteio');

  for (let i = 0; i < amigos.length; i += 2) {

  sorteio.innerHTML += amigos[i] + ' --> ' + amigos[i+1] + '<br>';
    
  }
}

function reiniciar() {
  amigos = [];
  document.getElementById('lista-amigos').textContent = '';
  document.getElementById('lista-sorteio').innerHTML = '';
  document.getElementById('nome-amigo').value = '';
}

function embaralha(lista) {

  for (let indice = lista.length; indice; indice--) {

      const indiceAleatorio = Math.floor(Math.random() * indice);

      // atribuição via destructuring
      [lista[indice - 1], lista[indiceAleatorio]] = 
          [lista[indiceAleatorio], lista[indice - 1]];
  }
}