// Crea la tua To-Do List mediante i metodi visti nel video.
// Crea una funzione che ti permette di:

// - Creare una lista aggiungendo il task desiderato mediante il bottone `Aggiungi`.
// - Creare un checkbox per ogni task aggiunto.


const addProduct = () => {
  const input = document.getElementsByTagName("input")[0];
  const inputValue = input.value;
  const list = document.createElement("li");
  list.innerText = inputValue;
  const inputFirst = document.createElement("input");
  inputFirst.type = "checkbox";
  list.appendChild(inputFirst);
  const ul = document.getElementsByTagName("ul")[0];
  ul.appendChild(list);
};
