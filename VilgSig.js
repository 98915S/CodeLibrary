    
    var er34 = "";
    var er56 = ["Vilgot", "Andersson", "TE23"];
    var er78 = 0;
    var er65 = false;

    function remover() {
        var header = document.getElementById("signature");

        if (er65) {
            er34 = er56[er78].substring(0, er34.length - 1);
            header.innerHTML = er34 + "|";
            if (er34 === "") {
                er65 = false;
                er78 = (er78 + 1) % er56.length;
                setTimeout(remover, 500);
            }   else{
                setTimeout(remover, 70);
            }
            
        } else {
        if (er34 === er56[er78]) {
            er65 = true;
            setTimeout(remover, 1000);
        }   else {
            er34 = er56[er78].substring(0, er34.length + 1);
            header.innerHTML = er34 + "|"
            setTimeout(remover, 70)
        }
        }

    }

    remover();
