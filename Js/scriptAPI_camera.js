let videoStream;

async function startCamera(){
    const videoElement = document.getElementById('videoElement');
    try{
        videoStream = await navigator.mediaDevices.getUserMedia({video:true});
        videoElement.srcObject = videoStream;
    }catch(error){
        console.error('Erro ao abrir a camera🎥', erro);
        alert('Erro ao abrir a camera🎥');
    }
}

async function stopCamera(){
    const videoElement = document.getElementById('videoElement');
    if(videoStream){
        const tracks = videoStream.getTracks();
        tracks.forEach(track => track.stop());
            videoElement.srcObject = null;
        }
}