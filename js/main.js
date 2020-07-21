const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function () {

    /*var div = document.createElement('div');
    div.setAttribute("class" ,"blog-content");
    var divchild = document.createElement('div');
    var h3 = document.createElement("h3");
    var button = document.createElement("button");
    var span = document.createElement("span");
    var img = document.createElement('img');

    img.src = "./assets/Blog-post/post-1.jpg";
    img.alt = "post-1";
    h3.innerHTML = "London Fashion week's";
    divchild.setAttribute("class","blog-title");
    button.setAttribute("class","btn btn-blog");
    button.innerHTML = "Fashionasd";
    span.innerHTML = "2 minutes";

    divchild.append(h3);
    divchild.append(button);
    divchild.append(span);
    div.append(img);
    div.append(divchild);
    document.getElementById('carousel').append(div);*/

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: true,
        nav: false,
        responsive: responsive
    });


    // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();

});