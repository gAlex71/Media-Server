function q360(){
    if (flvjs.isSupported()) {
        var videoElement = document.getElementById('videoElement');
        videoElement.style.width = '1280px';
        videoElement.style.height = '720px';
        var flvPlayer = flvjs.createPlayer({
            type: 'flv',
            url: 'http://localhost:8000/live/udp_360.flv'
        });
        flvPlayer.attachMediaElement(videoElement);
        flvPlayer.load();
        flvPlayer.play();
    }
}

function q480(){
    if (flvjs.isSupported()) {
        var videoElement = document.getElementById('videoElement');
        videoElement.style.width = '1280px';
        videoElement.style.height = '720px';
        var flvPlayer = flvjs.createPlayer({
            type: 'flv',
            url: 'http://localhost:8000/live/udp_480.flv'
        });
        flvPlayer.attachMediaElement(videoElement);
        flvPlayer.load();
        flvPlayer.play();
    }
}

function q720(){
    if (flvjs.isSupported()) {
        var videoElement = document.getElementById('videoElement');
        videoElement.style.width = '1280px';
        videoElement.style.height = '720px';
        var flvPlayer = flvjs.createPlayer({
            type: 'flv',
            url: 'http://localhost:8000/live/udp_720.flv'
        });
        flvPlayer.attachMediaElement(videoElement);
        flvPlayer.load();
        flvPlayer.play();
    }
}