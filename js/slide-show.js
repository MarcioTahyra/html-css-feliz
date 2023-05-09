var imagens=[
    '../assets/img/1.png',
    '../assets/img/2.png',
    '../assets/img/3.png',
    '../assets/img/4.png',
    '../assets/img/5.png',
    '../assets/img/6.png'
];

let Index = 0;
let time = 1000;

function slideShow(){
    document.getElementById('image').src = imagens[Index];
    Index++;
    if(Index == imagens.length){Index = 0}
    setTimeout("slideShow()", time);
}

slideShow();