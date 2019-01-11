const video = document.getElementById('video');
const button = document.getElementById('button');

console.log(button);
button.addEventListener('click', () => {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
  .then(stream => video.srcObject = stream)
  .catch(err => alert(`${err.name} ${err.message}`));
}, false)
