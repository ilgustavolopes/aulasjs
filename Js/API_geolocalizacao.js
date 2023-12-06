let map;

    function initMap(latitude, longitude) {
      if (!isNaN(parseFloat(latitude)) && !isNaN(parseFloat(longitude))) {
        map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: parseFloat(latitude), lng: parseFloat(longitude) },
          zoom: 12
        });

        new google.maps.Marker({
          position: { lat: parseFloat(latitude), lng: parseFloat(longitude) },
          map: map,
          title: 'Sua Localização'
        });
      } else {
        alert('Coordenadas inválidas.');
      }
    }

    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        alert('Geolocalização não é suportada por este navegador.');
      }
    }

    function showPosition(position) {
      const latitudeElement = document.getElementById('latitude');
      const longitudeElement = document.getElementById('longitude');

      latitudeElement.innerText = position.coords.latitude;
      longitudeElement.innerText = position.coords.longitude;

      initMap(position.coords.latitude, position.coords.longitude);
    }

    function showError(error) {
      switch(error.code) {
        case error.PERMISSION_DENIED:
          alert('Permissão para geolocalização foi negada pelo usuário.');
          break;
        case error.POSITION_UNAVAILABLE:
          alert('Informações de localização indisponíveis.');
          break;
        case error.TIMEOUT:
          alert('Tempo limite esgotado ao tentar obter a localização.');
          break;
        case error.UNKNOWN_ERROR:
          alert('Ocorreu um erro desconhecido ao tentar obter a localização.');
          break;
      }
    }

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