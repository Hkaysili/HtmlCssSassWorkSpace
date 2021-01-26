 /* Call th OWL Carousel */
 $(document).ready(() => {
    /* owl Carousel basic settings */
    let owl = $(".owl-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        dotsData: true,  /* belirtmiş olduğumuz data-dot gösterimi sağlar */
        loop: true,
        nav: false,
        items: 1
    });

    //slider sayfalandırma rakamlarına tıklama işlemi ve aktifi belirleme...
    $('.owl-dot').click(function(){
         owl.trigger('to.owl.carousel', [$(this).index(), 1000]);
    });
});

// OPEN - CLOSE MENU
$("#check").change(function(){
    if($(this).is(":checked")){
        $('.nav-header').addClass("active");
    }
    else{ 
        $('.nav-header').removeClass("active");
    }
})