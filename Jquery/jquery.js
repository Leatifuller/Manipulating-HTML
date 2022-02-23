$(document).ready(function () {
//1.
 let $button1 = $('<button>Click</button>').attr('id', 'btn1').appendTo('body');
    $('#btn1').click(function () {
    alert("Grand Risings!");
    })
//2.
$('#btn2').click(function(){
let $text = $('#textbox').val();
    alert($text);
    })

//3.
$('#hoverDiv').css({
    'background-color': 'blue',
    'height': '100px',
    'width': '100px'
    })
$('#hoverDiv').hover(function(){
        $('#hoverDiv').css('background-color', 'green')
        $('#hoverDiv').mouseleave(function(){
            $('#hoverDiv').css('background-color', 'blue')
        })
    })
//4.
  let $paraFour=$('<p>I love you for your brownness And the rounded darkness of your breast I love you for the breaking sadness in your voice And shadows where your wayward eye-lids rest. Something of old forgotten queens Lurks in the lithe abandon of your walk And something of the shackled slave Sobs in the rhythm of your talk Oh, little brown girl, born for sorrows mate  Keep all you have of queenliness Forgetting that you were once were slave And let your full lips laugh at Fate</p>').attr('id', 'para4').appendTo('body');
$('#para4').click(function(){
    let r = Math.floor((Math.random() * 256));
    let g = Math.floor((Math.random() * 256));
    let b = Math.floor((Math.random() * 256));
    let random = Math.floor(Math.random() * colors.length);
     $('#paraFour').css('color', colors[random]);
    })
    //5.
    $('<div><div>').attr({'name': 'Goddess Leati!', 'id': 'div'}).appendTo('body');
    $('<button>Click</div>').attr('id', 'btn5').appendTo(div);
    $('#btn5').click(function(){
        $('<span>'+$('#div').attr('name')+'</span>').appendTo(div);
    })
    //6.
  friendArr = ['Ape','Monko','Dragon','Dea', 'Majik','SinCy', 'Abdul','Destiny','Larry','ApTure'];
  let $button6 = $('<button>Click</button>').attr('id', 'btn6').appendTo('body');
    let ul=$('<ul></ul>').appendTo('body');
    let counter = 0;
    $('#btn6').click(function(){
        if(counter<friendArr.length) {
            let li=$('<li>'+ friendArr[counter]+'</li>')
            ul.append(li)
        }
        counter++;})})