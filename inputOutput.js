const audioInputEl = document.querySelector("#audio-input");
const audioOutputEl = document.querySelector("#audio-output");
const videoInputEl = document.querySelector("#video-input");

const getDevices = async () => {
    try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        devices.forEach(device => {
            const option = document.createElement("option");
            option.value = device.deviceId;
            option.text = device.label;
            if (device.kind === "audioinput") {
                audioInputEl.appendChild(option);
            } else if (device.kind === "audiooutput") {
                audioOutputEl.appendChild(option);
            } else if (device.kind === "videoinput") {
                videoInputEl.appendChild(option);
            }
        })
    } catch (error) {
        console.log(error);
    }
}


const changeAudioInput = async (e) => {
    const deviceId = e.target.value;
    const constraints = {
        audio: { deviceId: { exact: deviceId } }
    }

    try {
        stream = await navigator.mediaDevices.getUserMedia(constraints);
        const tracks = stream.getAudioTracks();
        console.log(tracks);
    } catch (error) {
        console.log(error);
    }
}

const changeAudioOutput = async (e) => {
    await videoInputEl.setSinkId(e.target.value)
}

const changeVideoInput = async (e) => {
    const deviceId = e.target.value;
    const constraints = {
        video: { deviceId: { exact: deviceId } }
    }

    try {
        stream = await navigator.mediaDevices.getUserMedia(constraints);
        const tracks = stream.getVideoTracks();
        console.log(tracks);
    } catch (error) {
        console.log(error);
    }
}