document.querySelector('#slide2').addEventListener('click', function () {
    if (document.querySelector('.slidein2').style.display === "none") {
        document.querySelector('.slidein2').style.display = "block";
        document.querySelector('.slidein1').style.display = "none";
        
        document.querySelector('#slide2').classList.remove('inactive2');
        document.querySelector('#slide2').classList.remove('underlineHover');
        document.querySelector('#slide2').classList.add('active2');
        document.querySelector('#slide2').classList.remove('togglel2');
        document.querySelector('#slide2').classList.add('toggler');
        document.querySelector('#slide1').classList.remove('active2');
        document.querySelector('#slide1').classList.add('inactive2');
        document.querySelector('#slide1').classList.add('underlineHover');
        document.querySelector('#slide1').classList.remove('toggler2');
        document.querySelector('#slide1').classList.add('togglel');
        
        document.querySelector('.foofirst').style.display = "block";
        document.querySelector('.foosecond').style.display = "none";
    }
}
     );
document.querySelector('#slide1').addEventListener('click', function () {
    if (document.querySelector('.slidein1').style.display === "none") {
        document.querySelector('.slidein1').style.display = "block";
        document.querySelector('.slidein2').style.display = "none";
        
        document.querySelector('#slide1').classList.remove('inactive2');
        document.querySelector('#slide1').classList.remove('underlineHover');
        document.querySelector('#slide1').classList.add('active2');
        document.querySelector('#slide1').classList.remove('togglel');
        document.querySelector('#slide1').classList.add('toggler2');
        document.querySelector('#slide2').classList.remove('active2');
        document.querySelector('#slide2').classList.add('underlineHover');
        document.querySelector('#slide2').classList.add('inactive2');
        document.querySelector('#slide2').classList.remove('toggler');
        document.querySelector('#slide2').classList.add('togglel2');
        
        document.querySelector('.foofirst').style.display = "none";
        document.querySelector('.foosecond').style.display = "block";
    }
}
                                                  );
