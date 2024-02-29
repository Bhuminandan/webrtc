

const shareScreen = async () => {
    console.log("Sharing Screen");

    const options  = {
        video: true,
        audio: false,
        surfaceSwitching: 'include'
    }

    
    try {
        mediaStream = await navigator.mediaDevices.getDisplayMedia(options);
    } catch (error) {
        console.log(error);
    }

    // We dont handle all button paths 
    changeButtons(["green", "green", "blue", "blue", "green", "green", "green", "green"])

}