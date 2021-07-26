function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


$(document).ready(function(){
    var language = getCookie("language");
    if (language=="sr"){
        serbian();
    }else if (language=="en"){
        english();
    }
    if (language==""){
        setCookie("language", "sr", 356)
        serbian();
    }
});


function serbian(){
    setCookie("language", "sr", 356)
    $(".en").hide();
	$(".sr").show();
};

function english(){
    setCookie("language", "en", 356)
    $(".sr").hide();
	$(".en").show();
};