const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const socket = io();

recognition.lang = 'en-US';
recognition.interimResults = false;

/*
document.getElementById('btn').addEventListener('click', () => {
  recognition.start();
});
*/

document.addEventListener("DOMContentLoaded", (event) => {
  console.log('DOMContentLoaded');

  let btn = document.getElementById('btn');
  if(btn) {
    console.log('btn');

    btn.addEventListener('click', () => {
      console.log('clicked');
      recognition.start();
    });
  }
})

recognition.addEventListener('result', (e) => {
  console.log('result');

  let last = e.results.length - 1;
  let text = e.results[last][0].transcript;

  console.log('Words: ' + e.results[0][0].confidence);

  socket.emit('message ', text);
});

socket.on('bot reply', (replyText) => {
  console.log('replys');

  synthVoice(replyText);
});

function synthVoice(text) {
  console.log('synthVoice');

  const synth = window.speechSynthesis;
  const utterance = new speechSynthesisUtterance();
  utterance.text = text;
  synth.speak(utterance);
}
