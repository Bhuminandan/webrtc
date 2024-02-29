
let mediaRecorder;
let recordedBlobs;

const startRecording = async () => {
    console.log("Starting Recording")

    if (!stream) {
        alert("Please share your screen first");
        return;
    }

    recordedBlobs = []; // An array to hold the blobs for playbacks
    mediaRecorder = new MediaRecorder(stream); //Make a media recorder instance
    mediaRecorder.ondataavailable = e => {

        // ondataavailable is will run when stream ends, or stopped or we specifically asked
        console.log("Data available for the next chunk");
        recordedBlobs.push(e.data); 
    }

    mediaRecorder.start();
    changeButtons(["green", "green", "blue", "blue", "green", "blue", "grey", "blue"])

}

const stopRecording = async () => {

    if (!mediaRecorder) return;

    console.log("Stopping Recording")
    mediaRecorder.stop();
    changeButtons(["green", "green", "blue", "blue", "green", "green", "blue", "blue"])
}

const playRecording = async () => {
    console.log("Playing Recording");

    if (!recordedBlobs) {
        alert("Nothing to play. Start a recording first");
        return;
    }

    const superBuffer = new Blob(recordedBlobs); // Superbupper is a superffer of our recorded blobs

    const recordedVideoEl = document.querySelector("#other-video");
    recordedVideoEl.src = window.URL.createObjectURL(superBuffer);
    recordedVideoEl.controls = true;
    recordedVideoEl.play();
    changeButtons(["green", "green", "blue", "blue", "green", "green", "blue", "blue"])
}