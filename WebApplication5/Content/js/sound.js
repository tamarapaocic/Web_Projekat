
 soundManager.onready(function () {
    soundManager.createSound({
        id: 'mySound',
        url: '.../images/Bosnian Landscapes 4K (UHD).mp3'
    });
    // ...and play it
    soundManager.play('mySound');
});