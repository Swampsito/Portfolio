function playSound(src) {
    const sound = new Audio(src);
    const volumeSlider = document.getElementById('volumeRange');
    sound.volume = volumeSlider ? volumeSlider.value / 100 : 1;
    sound.play();
}

document.querySelectorAll('.sidebar__button').forEach(button => {
    button.addEventListener('click', () => {
        playSound('assets/sounds/icon_option_sfx.wav');
    });
});

document.querySelectorAll('.next-ico, .prev-ico, .close-icon').forEach(button => {
    button.addEventListener('click', () => {
        playSound('assets/sounds/icon_option_close_sfx.wav');
    });
});
