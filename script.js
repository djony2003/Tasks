import { createDiv, createCheck, createText, createButton } from "./tarefa.js";

window._addTarefa = () => {
  const _inText = document.querySelector(".inputText");
  const _inList = document.querySelector("._listTarefas");
  const _div = createDiv(_inList);
  // const _check = createCheck(_div);
  const texto = _inText.value;
  const _text = createText(_div, texto);
  const _btn = createButton(_div);

  const _listTar = {
    _div,  
    _text,
    _btn,
  };

  _inText.value = "";

  _btn.addEventListener("click", () => {
    _div.remove();
  });

  console.log(_listTar);
};
