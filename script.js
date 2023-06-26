function butotnClick(){
  msg.innerText = nameText.value;
}

let link = document.getElementById('link');
link.value = 'link';
let url = document.getElementById('url');

let checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', butotnClick);
