function verif(idX,idY)
    {   
        let contenuX = document.getElementById(idX).value; 
        let contenuY = document.getElementById(idY).value;
        
        if (contenuX === contenuY) {
            document.getElementById(idX).style.border = "solid green";
            document.getElementById(idY).style.border = "solid green";
        } else {
            document.getElementById(idX).style.border = "solid red";
            document.getElementById(idY).style.border = "solid red";
        }
    }

