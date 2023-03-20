// tarefa.js


export const createDiv = (tagPai) => {
    const div = document.createElement("div");
    tagPai.appendChild(div);
    div.classList.add("btClass");
    return div;
  };
  
  export const createCheck = (tagPai) => {
    const check = document.createElement("input");
    tagPai.appendChild(check);
    check.type = "checkbox";
    return check;
  };
  
  export const createText = (tagPai, texto) => {
    const text = document.createTextNode(texto);
    tagPai.appendChild(text);
    return text;
  };
  
  export const createButton = (tagPai) => {
    const btn = document.createElement("button");
    tagPai.appendChild(btn);
    btn.innerHTML = "Apagar";
    btn.classList.add("_btApagar");
    return btn;
  };
  