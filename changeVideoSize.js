const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
console.log(supportedConstraints);



const changeVideoSize = () => {
    stream.getVideoTracks().forEach(track => {


        const capabalities = track.getCapabilities();

        const height = document.querySelector("#vid-height").value;
        const width = document.querySelector("#vid-width").value;
        
        const vConstraints = {
            width: width < capabalities.width.max ? width : capabalities.width.max,
            height: height < capabalities.height.max ? height : capabalities.height.max,
            frameRate: 5
        }

        track.applyConstraints(vConstraints);
    })
}
