$(document).ready(function(){

    // kada user klikne na neki tab link sacuvaj taj tab u sessionStorage

    const selectedLink = sessionStorage.getItem('selectedLink');

    if(selectedLink)
        $(".navbar-nav").find(`#${selectedLink}`).addClass('active');
    else {
        $(".navbar-nav").find(`#home`).addClass('active');
    }


    $(".nav-item a").on("click", function() {
        // sessionStorage.setItem('selectedLink', "test");
        $(".navbar-nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    })

    $(".nav-item").on("click", function() {
        sessionStorage.setItem('selectedLink', this.id);
    })
});
