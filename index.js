const audio = document.getElementById('audio');
const body = document.body;

const moods = {
  happy: {
    bg: "linear-gradient(to right, #fceabb, #f8b500)",
    music: "https://www.bensound.com/bensound-music/bensound-sunny.mp3"
  },
  sad: {
    bg: "linear-gradient(to right, #2c3e50, #4ca1af)",
    music: "https://www.bensound.com/bensound-music/bensound-slowmotion.mp3"
  },
  focus: {
    bg: "linear-gradient(to right, #1d4350, #a43931)",
    music: "https://www.bensound.com/bensound-music/bensound-clearday.mp3"
  },
  party: {
    bg: "linear-gradient(to right, #ff4e50, #f9d423)",
    music: "https://www.bensound.com/bensound-music/bensound-dubstep.mp3"
  }
};

document.querySelectorAll('[data-mood]').forEach(button => {
  button.addEventListener('click', () => {
    const mood = button.getAttribute('data-mood');
    body.style.background = moods[mood].bg;
    audio.src = moods[mood].music;
    audio.play();
  });
});
   
