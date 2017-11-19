/* Inicializamos con una funcion que contendra los eventos a utilizar */
window.addEventListener('load', function() {
  var textTarea = document.getElementById('textTarea');
  textTarea.addEventListener('keydown', accountant);
  var button = document.getElementById('button');
  button.addEventListener('click', insertText);
  button.addEventListener('click', accountant);
  submit.disabled = true;
});

/* La funcion insertText permite ingresar un texto a un contenedor */
function insertText(event) {
  event.preventDefault();  

  if (textTarea.value.length > 0) {
    button.disabled = false;

    var containerParagraph = document.getElementById('second-section');
    var paragraph = document.createElement('div');
    paragraph.className = 'paragraph';
      
    var text = document.createElement('p');
    text.className = 'text';
        
    text.textContent = textTarea.value;
           
    paragraph.appendChild(text);  
    containerParagraph.appendChild(paragraph);
    
    textTarea.value = '';
    input.value = '';
  } else {
    button.disabled = true;
  }
}

/* La funcion accountant cuenta la cantidad de caracteres de forma regresiva */

function accountant(event) {
  button.disabled = false;
  var input = document.querySelector('.container');
  input.value = 140 - textTarea.value.length;
  if (input.value < 0) {
    button.disabled = true;
  } 
  input.classList.toggle('blue', 10 < input.value && input.value <= 20);
  input.classList.toggle('red', input.value <= 10);
};


