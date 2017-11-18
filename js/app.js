window.addEventListener('load', function() {
  var textTarea = document.getElementById('textTarea');
  textTarea.addEventListener('keydown', accountant);
  textTarea.addEventListener('keyup', accountant);
  var button = document.getElementById('button');
  button.addEventListener('click', insertText);
  button.addEventListener('click', accountant);
});

function insertText(event) {
  event.preventDefault();  

  if (textTarea.value !== '') {
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

    event.target.disabled = false;
  } else {
    event.target.disabled = true;
  }
}

function accountant(event) {
  var input = document.getElementById('input');
  input.value = 140;
  input.value = input.value - textTarea.value.length;
};
