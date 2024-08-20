const camera = document.getElementById('camera');

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            camera.srcObject = stream;
            camera.play();
        })
        .catch(err => {
            alert('Camera access denied or not supported.');
        });
} else {
    alert('Camera not supported in this browser.');
}
