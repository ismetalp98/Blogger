$(document).ready(function () {

    var temail = document.getElementById("email");
    var tname = document.getElementById("name");

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    var user = firebase.auth().currentUser;
    var name, email;

    if (user != null) {
        name = user.displayName;
        email = user.email;
        temail.innerHTML = email;
        tname.innerHTML = name;
    }
});