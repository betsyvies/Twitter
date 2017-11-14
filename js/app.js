var button = document.getElementById("button");
button.addEventListener('click', insertText);

function insertText(event) {
    event.preventDefaul();
    var containerParagraph = document.getElementById('second-section');

    var paragraph = document.createElement('div');

    containerParagraph.appendChild(paragraph);

    var text = document.createElement('p');
    var content = document.getElementById('textTarea').value;
    
    text.textContent = content;
    
    paragraph.appendChild(text);

    /* text.className = 'text'; */
}




