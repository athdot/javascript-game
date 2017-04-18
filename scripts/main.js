function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
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

        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", "https://athdot.github.io/javascript-game/levels/01/level.html");
        ifrm.style.width = "100%";
        ifrm.style.height = "100vh";
        ifrm.style.border = "0";
        ifrm.style.position = "absolute";
        ifrm.style.top = "0";
        ifrm.style.left = "0";
        ifrm.id = "cookie";
        document.body.appendChild(ifrm);
    var user=getCookie("level");
    if (user != "") {
    var level=user
    var url = ('https://athdot.github.io/javascript-game/levels/' + level + '/level.html');
document.getElementById('cookie').src = url;
    } else {
       user = "02"
           var level=user
               var url = ('https://athdot.github.io/javascript-game/levels/' + level + '/level.html');
document.getElementById('cookie').src = url
       if (user != "" && user != null) {
           setCookie("level", user, 30);
       }
    }
