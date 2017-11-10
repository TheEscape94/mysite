$(document).ready(function () {
    //sidebar links
    $('nav a').click(function () {
        $('nav a').removeClass('w3-black');
        $(this).addClass('w3-black');
    });
    //show-hide more projects
    $('.project-content').addClass('hide');
    $('.project-content').slice(0, 12).removeClass('hide');

    $('.showMe').click(function () {
        $('.project-content').removeClass('hide');
        $('.more').hide();
        $('.hideMe').removeClass('hide');
    });

    $('.hideMe').click(function () {
        $('.project-content').addClass('hide');
        $('.project-content').slice(0, 12).removeClass('hide');
        $('.more').show();
        $('.hideMe').addClass('hide');
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 300);
    });

    //filters

    // *web - web aplications, website
    // *design - design projects
    // *soft - desktop applications

    $('.list-web-design').click(function () {
        $('.hiden-content').removeClass('hide');
        $('.project-content').addClass('hide');
        $('.design').removeClass('hide');
        $('.more').hide();
    });
    $('.list-web-app').click(function () {
        $('.hiden-content').removeClass('hide');
        $('.project-content').addClass('hide');
        $('.web').removeClass('hide');
        $('.more').hide();
    });
    $('.list-destop-app').click(function () {
        $('.project-content').addClass('hide');
        $('.soft').removeClass('hide');
        $('.more').hide();
    });
    $('.list-all').click(function () {
        $('.project-content').addClass('hide');
        $('.project-content').slice(0, 12).removeClass('hide');
        $('.more').show();
    });

    //waypoints

    var waypoint0 = new Waypoint({
        element: document.getElementById('plain-txt'),
        handler: function (direction) {
            if (direction == 'up') {
                $('nav a').removeClass('w3-black');
                $('.link1').addClass('w3-black');
                $('.back_to_top').addClass('hide');
            }
        },
        offset: 40
    })
    var waypoint1 = new Waypoint({
        element: document.getElementById('about'),
        handler: function (direction) {
            $('nav a').removeClass('w3-black');
            $('.link2').addClass('w3-black');
            $('.back_to_top').removeClass('hide');
        },
        offset: 15
    })
    
    var waypoint11 = new Waypoint({
        element: document.getElementById('skills'),
        handler: function (direction) {
            $('.progress0').addClass('grey-70');
            $('.progress1').addClass('grey-80');
            $('.progress2').addClass('grey-75');
            $('.progress3').addClass('grey-50');
        },
        offset: 10
    })
    
    var waypoint2 = new Waypoint({
        element: document.getElementById('projects'),
        handler: function (direction) {
            $('nav a').removeClass('w3-black');
            $('.link3').addClass('w3-black');
        },
        offset: 15
    })
    var waypoint3 = new Waypoint({
        element: document.getElementById('contact'),
        handler: function (direction) {
            $('nav a').removeClass('w3-black');
            $('.link4').addClass('w3-black');
        },
        offset: 15
    })
});
