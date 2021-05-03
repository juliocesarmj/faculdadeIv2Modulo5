const estiloUsuario = JSON.parse(localStorage.getItem('dados')) || [];
const cor1 = document.getElementById('cor1');
const cor2 = document.getElementById('cor2');
const graus = document.getElementById('graus');
const corFonte = document.getElementById('corFonte');
const tamanhoFonte = document.getElementById('tamanhoFonte');
const msg = document.getElementById('msg');

const secondDiv = document.querySelector('section div:nth-child(2)');
function dadosInput() {
  const obj = {
    cor1: cor1.value,
    cor2: cor2.value,
    graus: graus.value,
    corFonte: corFonte.value,
    tamanhoFonte: tamanhoFonte.value,
    msg: msg.value,
  };

  estiloUsuario.push(obj);
  salvarLocalStorage();
  limparInputs();
  secondDiv.classList.add('ativo');
  iterarLocalStorage();
}
function salvarLocalStorage() {
  localStorage.setItem('dados', JSON.stringify(estiloUsuario));
}
function limparInputs() {
  cor1.value = '#000000';
  cor2.value = '#000000';
  graus.value = '';
  corFonte.value = '#000000';
  tamanhoFonte.value = '';
  msg.value = '';
}
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  dadosInput();
});

function iterarLocalStorage() {
  let dadosLocalStorage = JSON.parse(localStorage.getItem('dados'));
  for (i of dadosLocalStorage) {
    document.body.style.background = `linear-gradient(${i.graus}deg, ${i.cor1}, ${i.cor2})`;
    const p = document.querySelector('section div:nth-child(2) p');
    p.style.fontSize = `${i.tamanhoFonte}px`;
    p.style.color = `${i.corFonte}`;
    p.innerText = `Cores de fundo (hexadecimal): ${i.cor1} / ${i.cor2}
    Cor da fonte: ${i.corFonte}
    Tamanho da fonte: ${i.tamanhoFonte}
    Seu texto: ${i.msg}`;
  }
}
if (localStorage.getItem('dados') !== null) {
  iterarLocalStorage();
}

document
  .getElementById('limparStorage')
  .addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.clear();
    divDisplay();
    location.reload();
    bodyBackground();
  });
function divDisplay() {
  secondDiv.classList.remove('ativo');
  const p = document.querySelector('section div:nth-child(2) p');
  p.innerHTML = '';
}
function bodyBackground() {
  const bd = document.querySelector('body');
  bd.style.background = `linear-gradient(90deg, #496d8c, #84a4bf)`;
  bd.style.transitionProperty = 'background';
  bd.style.transitionTimingFunction = 'linear';
  bd.style.transitionDuration = 3.5 + 's';
}
bodyBackground();
