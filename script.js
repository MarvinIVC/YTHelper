let player;
let captionsEnabled = false;

function generateVideo() {
    const input = document.getElementById('youtube-link').value;
    const videoContainer = document.getElementById('video-container');
    const videoId = input.split('v=')[1];

    if (videoId) {
        videoContainer.innerHTML = `<div id="player"></div>`;
        onYouTubeIframeAPIReady(videoId);
        document.getElementById('toggle-captions').style.display = 'block'; // Show the toggle captions button
    } else {
        videoContainer.innerHTML = '<p>Please enter a valid YouTube link.</p>';
        document.getElementById('toggle-captions').style.display = 'none'; // Hide the toggle captions button
    }
}

function onYouTubeIframeAPIReady(videoId) {
    player = new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: videoId,
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    toggleCaptions(); // Enable captions by default
}

function toggleCaptions() {
    captionsEnabled = !captionsEnabled;
    if (captionsEnabled) {
        player.loadModule('captions');
        player.setOption('captions', 'track', {'languageCode': 'en'});
    } else {
        player.unloadModule('captions');
    }
}
