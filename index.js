    var nd=document.querySelectorAll(".drum").length;

    for(var i=0; i<nd;i++){

    document.querySelectorAll("button")[i].addEventListener("click" , handleclick);
    function handleclick(){
        // alert("just got clicked")
    var btnpress=this.innerHTML;
        switch(btnpress){
            case "w":
                var ad=new Audio("sounds/tom-1.mp3");
                ad.play();

                break;
            case "a":
                var ad=new Audio("sounds/tom-2.mp3");
                ad.play();
                break;
            case "s":
                    var ad=new Audio("sounds/tom-3.mp3");
                    ad.play();
                    break;
            case "d":
                    var ad=new Audio("sounds/tom-4.mp3");
                    ad.play();
                    break;
            case "j":
                    var ad=new Audio("sounds/snare.mp3");
                    ad.play();
                    break;
            case "k":
                    var ad=new Audio("sounds/crash.mp3");
                    ad.play();
                    break;
            case "l":
                    var ad=new Audio("sounds/kick-bass.mp3");
                    ad.play();
                    break;
            default:
        }
    }
    }
    // var ad=new Audio("sounds/tom-1.mp3");
        // ad.play();