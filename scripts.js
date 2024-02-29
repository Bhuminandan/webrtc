const VideoElement = document.querySelector('#my-video');
let stream = null;
let mediaStream = null;

const constraints = {
    audio: true,
    video: true
}

const getMicAndCamera = async () => {
    try {
        stream = await navigator.mediaDevices.getUserMedia(constraints);
        getDevices();
        changeButtons(["green", "blue", "blue", "grey", "grey", "grey", "grey", "grey"])
    } catch (error) {

        // User Denied Access
        console.log(error);
    }
}


const showMyFeed = () => {
    VideoElement.srcObject = stream;
    if(!stream) return;
    changeButtons(["green", "green", "blue", "blue", "blue", "grey", "grey", "blue"])
}

const stopMyFeed = () => {
    const tracks = stream.getTracks();
    stream.getTracks().forEach(track => 
        {
            track.stop();
        }    
    );
    changeButtons(["blue", "grey", "grey", "grey", "grey", "grey", "grey", "grey"])
}

document.querySelector("#share").addEventListener("click",e => getMicAndCamera(e));
document.querySelector("#show-video").addEventListener("click",e => showMyFeed(e));
document.querySelector("#stop-video").addEventListener("click",e => stopMyFeed(e));
document.querySelector("#change-size").addEventListener("click", e => changeVideoSize(e));
document.querySelector("#play-record").addEventListener("click", e => playRecording(e));
document.querySelector("#start-record").addEventListener("click", e => startRecording(e));
document.querySelector("#stop-record").addEventListener("click", e => stopRecording(e));
document.querySelector("#share-screen").addEventListener("click", e => shareScreen(e));


document.querySelector("#audio-input").addEventListener("change", e => changeAudioInput(e));
document.querySelector("#audio-output").addEventListener("change", e => changeAudioOutput(e));
document.querySelector("#video-input").addEventListener("change", e => changeVideoInput(e));