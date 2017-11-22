/* Inicializamos con una funcion que contendra los eventos a utilizar */
window.addEventListener('load', function() {
  var textArea = document.getElementById('textArea');
  textArea.addEventListener('keydown', accountant);
  textArea.addEventListener('keyup', accountant);

  var button = document.getElementById('button');
  button.addEventListener('click', insertText);
  button.addEventListener('click', accountant);
});

/* La funcion insertText permite ingresar un texto a un contenedor */
function insertText(event) {
  event.preventDefault();  
  var textArea = document.getElementById('textArea');
  if (textArea.value.length > 0) {
    button.disabled = false;

    var input = document.querySelector('.container');
    var containerParagraph = document.getElementById('second-section');
    var paragraph = document.createElement('div');
    paragraph.className = 'paragraph';
    
    var text = document.createElement('p');
    text.className = 'text';
    var hour = document.createElement('p');
    hour.className = 'hour';

    text.textContent = textArea.value;
    hour.textContent = moment().format('LT');
           
    paragraph.appendChild(text); 
    paragraph.appendChild(hour); 
    containerParagraph.appendChild(paragraph);
    
    textArea.value = '';
    input.value = '';
  } else {
    button.disabled = true;
  }
}

/* La funcion accountant cuenta la cantidad de caracteres de forma regresiva y 
   tambien cuando crece el textarea al presionar enter  */

function accountant(event) {
  var textArea = document.getElementById('textArea');
  var input = document.querySelector('.container');
  var MAXCHARACTERS = 140;
  input.value = MAXCHARACTERS - textArea.value.trim().length;
  button.disabled = false;

  if (input.value < 0) {
    button.disabled = true;
  } 
  
  input.classList.toggle('blue', 10 < input.value && input.value <= 20);
  input.classList.toggle('red', input.value <= 10);

  var text = event.target.value.split('');
  var acum = 0;
  for (var i = 0; i < text.length; i++) {
    if (text[i] === '\n') {
      acum++;
    }
    if (acum) {
      event.target.rows = acum + 2;
    }
  }
  
  /* Agrega una línea más para que no aparezca el scroll, cuando la cantidad de caracteres 
  ingresados (sin dar un enter), supera al tamaño del textarea por defecto */

  if ((event.target.value.trim().length / event.target.cols) < event.target.rows) {
    event.target.rows = (event.target.value.trim().length / event.target.cols) + 2;
  }
};


