let leftCount = 0;
let rightCount = 0;

const sound = document.getElementById('click-sound');
sound.load(); // Ensure the sound is loaded

function handleClick(side) {
    const tick = document.querySelector(`.${side}-tick`);
    const counter = document.querySelector(`.${side}-counter`);
    
    // Reset the audio and play it immediately
    sound.currentTime = 0;  // Reset audio time to the start
    sound.play().catch(e => console.log('Audio playback failed:', e));
    
    // Show the green tick with smooth animation
    tick.style.opacity = 1;
    
    // Update the counter
    if (side === 'left') {
        leftCount++;
        counter.textContent = leftCount;
    } else {
        rightCount++;
        counter.textContent = rightCount;
    }

    // Show the counter with smooth animation
    counter.style.opacity = 1;
    
    // Hide the tick and counter after 1 second
    setTimeout(() => {
        tick.style.opacity = 0;
        counter.style.opacity = 0;
    }, 1000);
}
