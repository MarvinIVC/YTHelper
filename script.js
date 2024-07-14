let player;
let captionsEnabled = false;

function generateVideo() {
    const input = document.getElementById('youtube-link').value;
    const videoContainer = document.getElementById('video-container');
    const videoId = input.split('v=')[1];

    if (videoId) {
        videoContainer.innerHTML = `<div id="player"></div>`;
        onYouTubeIframeAPIReady(videoId);
        document.getElementById('toggle-captions').style.display = 'inline-block';
    } else {
        videoContainer.innerHTML = '<p>Please enter a valid YouTube link.</p>';
        document.getElementById('toggle-captions').style.display = 'none';
    }
}

function onYouTubeIframeAPIReady(videoId) {
    player = new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: videoId,
        playerVars: {
            'cc_load_policy': captionsEnabled ? 1 : 0
        }
    });
}

function toggleCaptions() {
    captionsEnabled = !captionsEnabled;
    const videoId = player.getVideoData().video_id;
    player.destroy();
    onYouTubeIframeAPIReady(videoId);
}
