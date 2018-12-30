function adicionarCamposInfo(optionSend) {
  const destinoDoElemento = document.querySelector('.form-info-participantes');
  const participanteEmail = montarParticipante("participante", "Nome:","nome","text",'nome','nome', "E-mail:", optionSend, optionSend,optionSend, optionSend);
  const participanteSMS = montarParticipante("participante", "Nome:","nome","text",'nome','nome', "Telefone:", "number", "text","fone", "fone");
  if(optionSend === "email"){
    destinoDoElemento.appendChild(participanteEmail);
  } else if(optionSend === "sms") {
    destinoDoElemento.appendChild(participanteSMS);
  } 
}
function montarDiv(classs) {
  const div = document.createElement("div");
  div.classList.add(classs);
  return div;
}
function montarLabel(content, forr) {
  const label = document.createElement("label");
  label.setAttribute('for', forr);
  label.textContent = content;
  return label;
}

function montarInput(typee, idd, nameInput){
  const input = document.createElement("input");
  input.type = typee;
  input.id = idd;
  input.name = nameInput;
  return input;
}

function montarDivNome(classOfDiv,contentLabel, forr, typeInput, idInput, nameInput) {
  const divNome = montarDiv(classOfDiv);
  divNome.appendChild(montarLabel(contentLabel,forr));
  divNome.appendChild(montarInput(typeInput, idInput, nameInput));
  return divNome;
}
function montarDivInfo(classOfDiv,contentLabel, forr, typeInput, idInput, nameInput) {
  const divInfo = montarDiv(classOfDiv);
  divInfo.appendChild(montarLabel(contentLabel,forr));
  divInfo.appendChild(montarInput(typeInput, idInput, nameInput));
  return divInfo;
}

function montarParticipante(classOfDiv,contentLabel, forr, typeInput, idInput, nameInput,contentLabel1, forr1, typeInput1, idInput1, nameInput1) {

  const div = montarDiv("participante-group");

  const divNome = montarDivNome(classOfDiv,contentLabel, forr, typeInput, idInput, nameInput);

  const divInfo = montarDivInfo(classOfDiv,contentLabel1, forr1, typeInput1, idInput1, nameInput1);

  div.appendChild(divNome)
  div.appendChild(divInfo)

  return div;
}
function limparFormDeInforParticipantes() {
  const form = document.querySelector('.form-info-participantes');
  form.innerHTML ="";
}

const btnConfirma = document.querySelector(".btn-confirmar");

btnConfirma.addEventListener('click', function(event){

  event.preventDefault();
  limparFormDeInforParticipantes();
  const qntDeParticipantes = document.querySelector("#qntDeAmigosOcultos").value;
  const opcaoDeEnvio = document.querySelector("#opcaoDeEnvio").value;
  
  for(let i = 0; i < qntDeParticipantes; i++){
    adicionarCamposInfo(opcaoDeEnvio);
  }
  addBotaoSubmit();
});

function addBotaoSubmit() {
  const botao = document.createElement("input");
  botao.type = "submit";
  botao.value = "Sortear";
  botao.classList.add("btn");
  const form = document.querySelector('.form-info-participantes');
  form.appendChild(botao);
}