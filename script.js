let player;
let captionsEnabled = false;

function generateVideo() {
    const input = document.getElementById('youtube-link').value;
    const videoContainer = document.getElementById('video-container');
    const videoId = input.split('v=')[1];

    if (videoId) {
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        videoContainer.innerHTML = `<div id="player"></div>`;
        onYouTubeIframeAPIReady(videoId);
    } else {
        videoContainer.innerHTML = '<p>Please enter a valid YouTube link.</p>';
    }
}

function onYouTubeIframeAPIReady(videoId) {
    player = new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: videoId,
        playerVars: {
            'cc_load_policy': captionsEnabled ? 1 : 0 // Load captions if enabled
        }
    });
}

function toggleCaptions() {
    captionsEnabled = !captionsEnabled;
    if (player && player.getPlayerState() !== -1) { // Check if player is ready
        if (captionsEnabled) {
            player.loadModule('captions');
            player.setOption('captions', 'track', {'languageCode': 'en'});
        } else {
            player.unloadModule('captions');
        }
    }
}
