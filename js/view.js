$('#slide2').on('click',function(){
    if($('.slidein2').css('display') === "none"){
        $('.slidein2').css('display',"block");
        $('.slidein1').css('display',"none");
        $('#slide2').removeClass("inactive2 underlineHover2 togglel2").addClass('active2 toggler');
        $('#slide1').removeClass("active2 toggler2").addClass('inactive2 underlineHover2 togglel');
        $('.foofirst').css('display','block');
        $('.foosecond').css('display','none');
    }
});
$('#slide1').on('click',function(){
    if($('.slidein1').css('display') === "none"){
        $('.slidein1').css('display',"block");
        $('.slidein2').css('display',"none");
        $('#slide1').removeClass("inactive2 underlineHover2 togglel").addClass('active2 toggler2');
        $('#slide2').removeClass("active2 toggler").addClass('inactive2 underlineHover2 togglel2');
        $('.foofirst').css('display','none');
        $('.foosecond').css('display','block');
    }
});
