const slider = document.getElementById('session-slider');
const minVal = parseInt(slider.min, 10);
const maxVal = parseInt(slider.max, 10);

function updateSlider() {
    const val = (slider.value - minVal) / (maxVal - minVal);
    slider.style.background = `linear-gradient(to right, #FFC226 0%, #FFC226 ${val * 100}%, #ddd ${val * 100}%, #ddd 100%)`;
}

slider.addEventListener('input', updateSlider);
window.onload = updateSlider; // Initialize on page load