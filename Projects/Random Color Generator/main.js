function randomColour(){
    const colours = ["#8699a5", "#c638f1", "#31aa41", "#a5868f", "#ac4c34" ];
    document.getElementById('id1').style.background = colours[Math.floor(Math.random() * colours.length)];
}

