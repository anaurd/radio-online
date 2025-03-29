// Function to play radio station
document.querySelectorAll(".station button").forEach(button => {
    button.addEventListener("click", function() {
        let stationName = this.parentElement.querySelector("p").textContent;
        let streamUrl = getStreamURL(stationName);

        if (streamUrl) {
            let audio = new Audio(streamUrl);
            audio.play();
            alert("Now playing: " + stationName);
        } else {
            alert("Stream URL not found!");
        }
    });
});

// Function to return streaming URLs (replace with actual URLs)
function getStreamURL(station) {
    const streams = {
        "Suria FM": "https://yourstreamurl.com/suriafm",
        "Hitz FM": "https://yourstreamurl.com/hitzfm",
        "Mix FM": "https://yourstreamurl.com/mixfm",
        "Era FM": "https://yourstreamurl.com/erafm",
        "Hot FM": "https://yourstreamurl.com/hotfm",
        "Fly FM": "https://yourstreamurl.com/flyfm",
        "Lite FM": "https://yourstreamurl.com/litefm",
        "Jazz FM": "https://yourstreamurl.com/jazzfm",
        "Rock FM": "https://yourstreamurl.com/rockfm",
        "Retro FM": "https://yourstreamurl.com/retrofm",
        "Pop FM": "https://yourstreamurl.com/popfm",
        "Country FM": "https://yourstreamurl.com/countryfm"
    };
    return streams[station] || null;
}

// Search Bar Functionality
document.getElementById("search").addEventListener("input", function() {
    let filter = this.value.toLowerCase();
    document.querySelectorAll(".station").forEach(station => {
        let name = station.querySelector("p").textContent.toLowerCase();
        station.style.display = name.includes(filter) ? "block" : "none";
    });
});
