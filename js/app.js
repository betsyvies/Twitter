window.addEventListener('load', function() {
  var textTarea = document.getElementById('textTarea');
  var button = document.getElementById('button');
  button.addEventListener('click', insertText);
});

function insertText(event) {
  event.preventDefault();

  if (textTarea.value !== '') {
    event.target.disabled = false;
    
    var containerParagraph = document.getElementById('second-section');
    var paragraph = document.createElement('div');
    paragraph.className = 'paragraph';
  
    var text = document.createElement('p');
    text.className = 'text';
    
    text.textContent = textTarea.value;
       
    paragraph.appendChild(text);  
    containerParagraph.appendChild(paragraph);
    
    textTarea.value = '';
  } else {
    event.target.disabled = true;
  }
}


