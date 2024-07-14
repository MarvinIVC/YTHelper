let player;

function generateVideo() {
    const input = document.getElementById('youtube-link').value;
    const videoContainer = document.getElementById('video-container');
    const videoId = input.split('v=')[1];

    if (videoId) {
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
        videoId: videoId
    });
}
