var i = 0;
    var images = [];
    var time = 2000;

    images.push(document.getElementsByClassName(slides));
    function changeImage(){
        document.slide.src = images[i];

        if(i < images.length - 1){
            i++;
        }
        else{
            i = 0;
        }

        setTimeout(changeImage, time);
    }

    window.onload = changeImage;