// DRUM KIT 

// Listen for key events on the page
document.addEventListener("keydown", playSound);

// Event Function
function playSound(event) {
    console.log(event.keyCode);

    if (event.keyCode == 65) { // "a"
        // Play A-Clap
        playaudio('clap', 'A')
       
    } else if (event.keyCode == 83) { // "s"
        // Play S-hihat
        playaudio('hihat', 'S')
        
    } else if (event.keyCode == 68) { // "d"
        // Play D-kick
        playaudio('kick', 'D')
        
    } else if (event.keyCode == 70) { // "f"
        // Play F-Openhat
        playaudio('openhat', 'F')
       
    } else if (event.keyCode == 71) { // "g"
        // Play G-Boom
        playaudio('boom', 'G')
        
        
    } else if (event.keyCode == 72) { // "h"
        // Play H-Ride
        playaudio('ride', 'H')
        
    } else if (event.keyCode == 74) { // "j"
        // Play J-Snare
        playaudio('snare', 'J')
     
    } else if (event.keyCode == 75) { // "k"
        // Play K-Tom
        playaudio('tom', 'K')
        
    } else if (event.keyCode == 76) { // "l"
        // Play L-Tink
        playaudio('tink', 'L')
    
    }
}

// Add transition end listeners
document.getElementById('A').addEventListener('transitionend', removePlaying);
document.getElementById('S').addEventListener('transitionend', removePlaying);
document.getElementById('D').addEventListener('transitionend', removePlaying);
document.getElementById('F').addEventListener('transitionend', removePlaying);
document.getElementById('G').addEventListener('transitionend', removePlaying);
document.getElementById('H').addEventListener('transitionend', removePlaying);
document.getElementById('J').addEventListener('transitionend', removePlaying);
document.getElementById('K').addEventListener('transitionend', removePlaying);
document.getElementById('L').addEventListener('transitionend', removePlaying);

// Transition End Function
function removePlaying(event) {
    event.target.classList.remove("playing");
}
//Drumtype and the Letters
function playaudio(drumtype, letter) {
    let audio = document.getElementById(drumtype);
    audio.currentTime = 0;
    audio.play();
    document.getElementById(letter).classList.add("playing");

}