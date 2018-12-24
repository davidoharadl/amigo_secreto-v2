function pegarCopiaDoHTML( elemento ) {
  return document.querySelector(elemento).cloneNode(true);
}
function pegarDestinoDoElemento( destino ) {
  return document.querySelector( destino )
}
function adicionarElemento(){
	var clone = pegarCopiaDoHTML(elementoParaCopia);
	var destino = pegarDestinoDoElemento(destinoDoElemento);
  
  destino.appendChild(clone);	
}
function mudarLabel() {
  let contentLabelEmail = document.querySelector('#label-opcao');
  contentLabelEmail.innerHTML = "Telefone:";
}
function mudarInput() {
  let inputEmail = document.querySelector('#email');
  inputEmail.type = "text";
}
function mudarParaSMS() {
  var opcaoESMS = opcaoDeEnvio === "sms";
  if ( opcaoESMS ) {
    mudarLabel();
    mudarInput();
  }  
}

var elementoParaCopia = '.participante-group';
var destinoDoElemento = '.formInfoParticipantes';

const inputQntDeParticipantes = document.querySelector("#qntDeAmigosOcultos");
const inputOpcaoDeEnvio = document.querySelector("#opcaoDeEnvio");

let opcaoDeEnvio = inputOpcaoDeEnvio.value;
let qntDeParticipantes = inputQntDeParticipantes.value;


for( i = 1; i < qntDeParticipantes; i++ ) {
  mudarParaSMS();
  adicionarElemento();
}