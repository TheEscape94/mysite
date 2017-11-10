$(document).ready(function () {
    
    
    //preload code
    //area 1 -> sidebar html
    typeCode('<!-- sidebar -->', 'area-1-0', 0);
    typeCode('<nav>', 'area-1-1', 800);
    typeCode('<ul>', 'area-1-2', 1100);
    typeCode('<li><a href="#home"><img src="my-img.jpg" alt="milosaperlic.com"</a></li>', 'area-1-3', 1400);
    typeCode('<li><a href="#home">početna</a></li>', 'area-1-4', 2000);
    typeCode('<li><a href="#about">o meni</a></li>', 'area-1-5', 3000);
    typeCode('<li><a href="#projects">projekti</a></li>', 'area-1-6', 4000);
    typeCode('<li><a href="#contact">kontakt</a></li>', 'area-1-7', 5000);
    typeCode('</ul>', 'area-1-8', 5800);
    typeCode('</nav>', 'area-1-9', 6000);
    typeCode('<!-- sidebar END -->', 'area-1-10', 6200);

    //area2 -> sidebar css
    show_part_('.code-area-2', 6800);
    typeCode('// sidebar style', 'area-2-0', 7600);
    typeCode('nav {', 'area-2-1', 8800);
    typeCode('background: #656565;', 'area-2-2', 9600);
    typeCode('position: fixed;', 'area-2-3', 11000);
    typeCode('color: #fff;', 'area-2-4', 11800);
    typeCode('}', 'area-2-5', 12800);

    //hide area1 & area2
    hide_part_('.code-area-2', 13100);
    hide_part_('.code-area-1', 13300);

    //aside show
    add_z_index('aside', 13500);

    //show area3 -> header html
    show_part_('.code-area-3', 14000);
    typeCode('<!-- header -->', 'area-3-0', 14600);
    typeCode('<header>', 'area-3-1', 15400);
    typeCode('<div class="header-title">', 'area-3-2', 15400);
    typeCode('<h1>Miloš Aperlić</h1>', 'area-3-3', 16400);
    typeCode('<p>Front-end &amp; Back-end Web Developer</p>', 'area-3-4', 17400);
    typeCode('<i class="fa fa-code"></i>', 'area-3-5', 20600);
    typeCode('</div>', 'area-3-6', 21400);
    typeCode('</header>', 'area-3-7', 22000);
    typeCode('<!-- header END -->', 'area-3-8', 22800);

    //show area4 -> header css
    show_part_('.code-area-4', 23200);
    typeCode('// header style', 'area-4-0', 23800);
    typeCode('header {', 'area-4-1', 24800);
    typeCode('background-image: url( background.jpg );', 'area-4-2', 25600);
    typeCode('header-title {', 'area-4-3', 28000);
    typeCode('position: absolute;', 'area-4-4', 29000);
    typeCode('top: 50%;', 'area-4-5', 30200);
    typeCode('left: 50%;', 'area-4-6', 31000);
    typeCode('transform: translate(-50%, -50%);', 'area-4-7', 32000);
    typeCode('}', 'area-4-8', 35000);
    typeCode('}', 'area-4-9', 35400);
    typeCode('// header style END', 'area-4-10', 35800);
    
    //hide area3 & area4
    hide_part_('.code-area-4', 37000);
    hide_part_('.code-area-3', 37400);

    //show header
    hide_part_('.overlay', 38000);
});

//typing function
//str -> code
//element -> DOM element
//del -> delay of showing

function typeCode(str, element, del) {
    var i = 0,
        isTag,
        text;
    str = str + '>';
    setTimeout(function type() {
        text = str.slice(0, ++i);
        if (text === str) return;

        document.getElementById(element).innerHTML = text;
        //$('.' + element).html = text;

        var char = text.slice(-1);
        if (char === '<') isTag = true;
        if (char === '>') isTag = false;

        if (isTag) return type();
        setTimeout(type, 80);
    }, del);
};

function show_part_(element, del) {
    setTimeout(function () {
        $(element).show(250);
    }, del);
}

function hide_part_(element, del) {
    setTimeout(function () {
        $(element).hide(250);
    }, del);
}

function add_z_index(element, del){
    setTimeout(function () {
        $(element).css('zIndex', '500');
    }, del);
}
