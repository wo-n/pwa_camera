const video = document.getElementById('video');
const button = document.getElementById('button');


b.addEventListener('click', () => {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
  .then(stream => v.srcObject = stream)
  .catch(err => alert(`${err.name} ${err.message}`));
}, false)
