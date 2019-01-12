const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const socket = io();

recognition.lang = 'en-US';
recognition.interimResults = false;

document.addEventListener("DOMContentLoaded", (event) => {
  console.log('DOMContentLoaded');
  let btn = document.getElementById('btn');
  if(btn) {
    console.log('Listen Btn Found.');
    btn.addEventListener('click', () => {
      console.log('Listening to microphone.');
      recognition.start();
      //socket.emit('chat message', 'Who are you?'); Testing socket to Dialogflow response.
      //synthVoice('Testing Synth Voice.');
    });
  }
});

recognition.addEventListener('result', (e) => {
  console.log('Result from speech recogition.');
  let last = e.results.length - 1;
  let text = e.results[last][0].transcript;
  console.log('User Words: ' + text);
  try{
    socket.emit('chat message', text);
  }
  catch(error){
    console.log('eroro chat message');
  }
});

socket.on('bot reply', (replyText) => {
  console.log('Bot Reply: ' + replyText);
  synthVoice(replyText);
});

function synthVoice(text) {
  console.log('Synthvoice Called.');
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  synth.speak(utterance);
}
