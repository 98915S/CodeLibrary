function button(buttonNr, pressed){
    let audio1 = new Audio("https://sndup.net/h2b2/d");
    let audio2 = new Audio("https://sndup.net/r8d6/d");
    let audio3 = new Audio("https://sndup.net/x5k3/d");

    let button1 = document.getElementById("1");
    let button2 = document.getElementById("2");
    let button3 = document.getElementById("3");
    
    let color = document.body; 

    if(buttonNr == 1){
        audio1.play();
        button1.innerHTML = '<button onclick="button(1, 1)" id="1">1</button>';
        if(pressed == 1){
            color.style.backgroundColor = "red";
        }

    }

    if(buttonNr == 2){
        audio2.play();
        button2.innerHTML = '<button onclick="button(2, 2)" id="2">2</button>';
        if(pressed == 2){
            color.style.backgroundColor = "green";
        }
    }

    if(buttonNr == 3){
        audio3.play();
        button3.innerHTML = '<button onclick="button(3, 3)" id="3">3</button>';
        if(pressed == 3){
            color.style.backgroundColor = "red";
        }
    }

}