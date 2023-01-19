let tag = document.createElement("script");

tag.src = "https:www.youtube.com/iframe_api";

let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    new YT.Player("player", {
        videoId: "An6LvWQuj_8", // 최초 재생할 유튜브 동영상 ID 
        playerVars: {
            autoplay: true, 
            loop: true, 
            playlist: "An6LvWQuj_8"
        },
        events: {
            onReady: (event) => {
                event.target.mute();
            }
        }
    });
}