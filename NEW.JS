document.addEventListener("DOMContentLoaded", function() {
    const radioButtons = document.querySelectorAll('.radioButton');
    const audioPlayer = document.getElementById('audioPlayer');
    const overlay = document.getElementById('overlay');
    const imageContainer = document.getElementById('imageContainer');
    const romanticImage = document.getElementById('romanticImage');
    const closeOverlay = document.getElementById('closeOverlay');

    let imageInterval;

    const stations = [
        { name: "BBC World Service", url: "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service" },
        { name: "NPR", url: "https://npr-ice.streamguys1.com/live.mp3" },
        { name: "181.FM - The Mix", url: "http://listen.181fm.com/181-themix_128k.mp3" }
    ];

    const romanticImages = [
        () => `https://picsum.photos/800/600?random&t=${new Date().getTime()}`,
        () => `https://picsum.photos/800/600?random&t=${new Date().getTime() + 1}`,
        () => `https://picsum.photos/800/600?random&t=${new Date().getTime() + 2}`,
        () => `https://picsum.photos/800/600?random&t=${new Date().getTime() + 3}`,
        () => `https://picsum.photos/800/600?random&t=${new Date().getTime() + 4}`
    ];

    function startImageChange() {
        imageInterval = setInterval(() => {
            const newImage = document.createElement('img');
            newImage.src = romanticImages[Math.floor(Math.random() * romanticImages.length)]();
            newImage.alt = "Romantic Image";
            newImage.style.position = 'absolute';
            newImage.style.top = '50%';
            newImage.style.left = '100%';
            newImage.style.transform = 'translate(0, -50%)';
            newImage.style.transition = 'transform 1s ease';
            
            imageContainer.appendChild(newImage);

            setTimeout(() => {
                newImage.style.transform = 'translate(-50%, -50%)';
                if (romanticImage) {
                    romanticImage.style.transform = 'translate(-150%, -50%)';
                }
            }, 50);

            setTimeout(() => {
                if (romanticImage) {
                    imageContainer.removeChild(romanticImage);
                }
                romanticImage = newImage;
            }, 1000);
        }, 5000);
    }

    function stopImageChange() {
        clearInterval(imageInterval);
    }

    function playStation(stationIndex) {
        const station = stations[stationIndex];
        audioPlayer.src = station.url;
        audioPlayer.play();

        startImageChange();

        const randomImage = romanticImages[Math.floor(Math.random() * romanticImages.length)]();
        romanticImage.src = randomImage;

        radioButtons.forEach(button => button.style.display = 'none');
        overlay.style.display = 'flex';

        romanticImage.style.transform = 'translate(-50%, -50%)';
    }

    function stopStation() {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        stopImageChange();
        overlay.style.display = 'none';

        radioButtons.forEach(button => button.style.display = 'flex');
    }

    radioButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (index === 3) {
                stopStation();
            } else {
                playStation(index);
            }
        });
    });

    closeOverlay.addEventListener('click', () => {
        stopStation();
    });
});
