function survol(x)
    {
        let images = document.getElementsByTagName('img');
        switch (x) {
            case 0:
                images[0].src = 'images/image1_2.jpg';
                break;
            case 1:
                images[1].src = 'images/image2_2.jpg';
                break;
            case 2:
                images[2].src = 'images/image3_2.jpg';
                break;
            case 3:
                images[3].src = 'images/image4_2.jpg';
                break;
            case 4:
                images[4].src = 'images/image5_2.jpg';
                break;
            default:
        }
        //document.getElementById("image1").src = 'images/image1_2.jpg';
        //console.log(document.getElementById("image1").src);
    }
