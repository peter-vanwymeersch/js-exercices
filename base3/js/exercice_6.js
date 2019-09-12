function survol(x)
    {
        switch (x) {
            case 'image1':
                document.getElementById(x).src = 'images/image1_2.jpg';
                break;
            case 'image2':
                document.getElementById(x).src = 'images/image2_2.jpg';
                break;
            case 'image3':
                document.getElementById(x).src = 'images/image3_2.jpg';
                break;
            case 'image4':
                document.getElementById(x).src = 'images/image4_2.jpg';
                break;
            case 'image5':
                document.getElementById(x).src = 'images/image5_2.jpg';
                break;
            default:
        }
    }

function sortie(x)
    {
        switch (x) {
            case 'image1':
                document.getElementById(x).src = 'images/image1.jpg';
                break;
            case 'image2':
                document.getElementById(x).src = 'images/image2.jpg';
                break;
            case 'image3':
                document.getElementById(x).src = 'images/image3.jpg';
                break;
            case 'image4':
                document.getElementById(x).src = 'images/image4.jpg';
                break;
            case 'image5':
                document.getElementById(x).src = 'images/image5.jpg';
                break;
            default:
        }
    }
