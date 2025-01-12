// Ensure the audio file cannot be downloaded by hiding the download button
document.addEventListener('DOMContentLoaded', function() {
    const audioElements = document.querySelectorAll('audio');

    audioElements.forEach(audio => {
        // Create a custom control to hide the download button
        const controls = audio.querySelector('control');
        if (controls) {
            controls.style.display = 'none';
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    header.addEventListener("mousemove", (e) => {
        const { offsetX, offsetY } = e;
        const { offsetWidth, offsetHeight } = header;

        // Calculate percentage position of the mouse pointer
        const xPos = (offsetX / offsetWidth) * 100;
        const yPos = (offsetY / offsetHeight) * 100;

        // Set gradient background position
        header.style.background = `radial-gradient(circle at ${xPos}% ${yPos}%, #1e90ff, #1c86ee, #000)`;
    });

    header.addEventListener("mouseleave", () => {
        // Reset to default gradient when the mouse leaves
        header.style.background = "linear-gradient(90deg, #1e90ff, #1c86ee)";
    });
});
