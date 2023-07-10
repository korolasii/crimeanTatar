let headerOpen = document.getElementsByClassName('headerConteinerLogoOpen'),
headerClose = document.getElementsByClassName('headerConteinerLogoClose'),
header = document.getElementsByClassName('header'),
UA = document.getElementsByClassName('UA'),
EN = document.getElementsByClassName('EN'),
closeNewsHeader = document.getElementsByClassName('closeNewsHeader'),
newsHeader = document.getElementsByClassName('newsHeader'),
videoConteiner = document.getElementsByClassName('videoConteiner'),
imgConteinerVideo = document.getElementsByClassName('imgCnteinerVideo'),
touch1 = document.getElementsByClassName('touch1'),
touch2 = document.getElementsByClassName('touch2'),
touch3 = document.getElementsByClassName('touch3'),
touch4 = document.getElementsByClassName('touch4'),
btnAbout = document.getElementsByClassName('btnAbout'),
textOurProject = document.getElementsByClassName('textOurProject'),
menuOpenOurProject = document.getElementsByClassName('menuOpenOurProject'),
ourProject = document.getElementsByClassName('ourProject'),
activeProject = document.getElementsByClassName('activeProject'),
finish = document.getElementsByClassName('finish'),
sign = document.getElementsByClassName('sign'),
left = document.getElementsByClassName('left'),
right = document.getElementsByClassName('right'),
chet = 0,
uaConteiner = document.getElementsByClassName('uaConteiner'),
enConteiner = document.getElementsByClassName('enConteiner'),
uaText = document.getElementsByClassName('uaText'),
enText = document.getElementsByClassName('enText'),
btnHelp = document.getElementsByClassName('btnHelp'),
instagramWhite = document.getElementById('instagramWhite'),
telegramWhite = document.getElementById('telegramWhite'),
facebookWhite = document.getElementById('facebookWhite'),
instagramYellow = document.getElementById('instagramYellow'),
telegramYellow = document.getElementById('telegramYellow'),
facebookYellow = document.getElementById('facebookYellow'),
val = document.getElementsByClassName('val'),
valOpenMenu = document.getElementsByClassName('valOpenMenu'),
touchvonteiner = document.getElementsByClassName('touchConteiner'),
textVal = document.getElementsByClassName('textVal'),
ourTeam = document.getElementsByClassName('ourTeam'),
SignToOur = document.getElementsByClassName('SignToOur'),
dob = document.getElementsByClassName('dob'),
up = document.getElementsByClassName('up'),
control = document.getElementsByClassName('control'),
maskDisable = document.getElementsByClassName('maskDisable'),
removeVideoConteiner = `
                        <video autoplay>
                            <source src="picture/videoMp4.mp4" type="video/mp4" class="videoPlay">
                        </video>
                        <img src="picture/photo_2.jpg">
                        <img src="picture/photo3.jpg">
                        <img src="picture/photo_4.jpg">
                        `,
map = document.getElementsByClassName('map'),
mapUkConteiner = document.getElementsByClassName('mapUkConteiner'),
newsConteiner = document.getElementsByClassName('newsConteiner'),
odessa = document.getElementById('odessa'),
cityOdessa = document.getElementById('cityOdessa'),
baxmyt = document.getElementById('baxmyt'),
selectPlace = document.getElementsByClassName('selectPlace'),
places = document.querySelectorAll('.places'),
aboutPlace = document.getElementsByClassName('aboutPlace'),
textNews = document.getElementsByClassName('textNews'),
imgNews = document.getElementsByClassName('imgNews'),
textNantCart = document.getElementsByClassName('textNantCart'),
imgActiveNant,
activeNant,
clientHeight,
imgConteinerVideoHeight,
outerHeight,
menu = document.getElementsByClassName('menu'),
menuIcon = document.getElementsByClassName('menuIcon'),
navigation = document.getElementsByClassName('navigation'),
potCatVal = document.getElementsByClassName('potCatVal'),
potCatProject = document.getElementsByClassName('potCatProject'),
catVal = document.getElementsByClassName('catVal'),
catProject = document.getElementsByClassName('catProject'),
open1 = document.getElementsByClassName('open1'),
open2 = document.getElementsByClassName('open2'),
iconMenu = document.getElementsByClassName('iconMenu'),
navigationClose = document.getElementsByClassName('navigationClose')
//Переменная
timeToAnimation = 1000

function controlHeight(){
    console.log(imgConteinerVideoHeight*0.5-imgConteinerVideoHeight*0.05)
    $(control).css('top', `${imgConteinerVideoHeight*0.5+imgConteinerVideoHeight*0.05}px`);
}

function visible(){
    targetPosition = {
        top:  dob[0].getBoundingClientRect().top,
        left:  dob[0].getBoundingClientRect().left,
        right: dob[0].getBoundingClientRect().right,
        bottom:  dob[0].getBoundingClientRect().bottom
      }
    windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      }
    if (targetPosition.bottom > windowPosition.top && 
            targetPosition.top < windowPosition.bottom && 
            targetPosition.right > windowPosition.left && 
            targetPosition.left < windowPosition.right){
        $(btnAbout).css('display', 'none');
        $(up).css('display', 'none');
        $(maskDisable).css('display', 'none');
    }else{
        $(btnAbout).css('display', 'block');
        $(up).css('display', 'block');
        $(maskDisable).css('display', 'block');
    }
}

function removeClassTouch(){
    $(touch1).removeClass('active');
    $(touch2).removeClass('active');
    $(touch3).removeClass('active');
    $(touch4).removeClass('active');
}

function openMenu(block, text, heightBlockOpen){
    $(block).css('color', '#F8FAFB');
    $(block).css('background-color', '#1264AB');
    $(block).css('border-radius', ' 7px 7px 0 0');
    $(text).css('display', 'block');
    $(text).animate({
        height: heightBlockOpen
    }, 500)
}

function closeMenu(block, text){
    $(text).animate({
        height: '0px',
    }, 500)
    setTimeout(()=>{
        $(text).css('height', '0px');
        $(text).css('display', 'none');
        $(block).css('color', '#1264AB');
        $(block).css('background-color', '#F8FAFB');
        $(block).css('border-radius', ' 0 0 0 0');
    },500)
}

function videoConteinerCss(){
    $(videoConteiner).css('padding-top', heightHeader);
    // $(videoConteiner).css('height', clientHeight - heightHeader);
}

function placeSelect (placeActive){
    fetch('city.json')
    .then(response => response.json())
    .then(place => {
      $(selectPlace).html(`${place[`${placeActive}`]['nameCity']}`);
      $(aboutPlace).html(`${place[`${placeActive}`]['ourHelp']}`);
    })
    .catch(err => {
      console.error('Ошибка при загрузке файла:', err);
    });

}

function widthMapFunct(){
    hightMap = clientHeight - heightHeader
    widthMap = hightMap * 1.23226
    $(mapUkConteiner).css('width', widthMap);
}

// function active(className){
//     $(className).css('color', '#FBFC04');
//     $(className).css('background', '#1264AB');
//     $(className).css('border-radius', '7px');
//     $(className).css('font-weight', 'bold');
// }

// function disable(className){
//     $(className).css('color', '#1264AB');
//     $(className).css('background', '#F8FAFB');
//     $(className).css('border-radius', '0px');
//     $(className).css('font-weight', '400px');
// }

$(document).ready ( function(){
    clientHeight = window.screen.availHeight
    heightHeader = $(document.getElementsByClassName('header')).outerHeight()
    videoConteinerCss()
    imgConteinerVideoHeight = $(document.getElementsByClassName('imgCnteinerVideo')).outerHeight()
    controlHeight()
    widthMapFunct()
});

$(document).resize(function () { 
    clientHeight = window.screen.availHeight
    heightHeader = $(document.getElementsByClassName('header')).outerHeight()
    videoConteinerCss()
    imgConteinerVideoHeight = $(document.getElementsByClassName('imgCnteinerVideo')).outerHeight()
    controlHeight()
    widthMapFunct()
});

window.addEventListener('resize', ()=>{
    clientHeight = window.screen.availHeight
    heightHeader = $(document.getElementsByClassName('header')).outerHeight()
    videoConteinerCss()
    imgConteinerVideoHeight = $(document.getElementsByClassName('imgCnteinerVideo')).outerHeight()
    controlHeight()
    widthMapFunct()
})

$(menuIcon).click(function () { 
    $(menuIcon).css('display', 'none');
    $(menu).css('left', '-500px');
    $(navigation).css('display', 'block');
    $(menu).animate({
        left: '10px'
    }, 1000)
});

$(navigationClose).click(function (e) { 
    e.preventDefault();
    $(menu).animate({
        left: '-500px'
    }, 1000)
    $(navigation).css('display', 'none');
    $(menuIcon).css('display', 'block');
    $(menu).animate({
        left: '10px'
    }, 1000)
});

$(catProject).click(function () {  
    if ($(potCatProject).css('display') === 'none'){
        $(potCatProject).css('display', 'block');
        $(open2).css('rotate', '0deg'); 
    }else{
        $(potCatProject).css('display', 'none');
        $(open2).css('rotate', '267deg'); 
    }   
});

$(catVal).click(function () { 
    if ($(potCatVal).css('display') === 'none'){
        $(potCatVal).css('display', 'block');
        $(open1).css('rotate', '0deg'); 
    }else{
        $(potCatVal).css('display', 'none');
        $(open1).css('rotate', '267deg'); 
    }  
});

$(closeNewsHeader).click(function (e) { 
    e.preventDefault();
    $(touchvonteiner).css('bottom', '140px');
    $(newsHeader).css('position', 'absolute');
    $(newsHeader).css('width', '100%');
    $(newsHeader).animate({
        bottom: '3000px'
    }, 3000)
    heightHeader = $(document.getElementsByClassName('header')).outerHeight();
    $(videoConteiner).css('padding-top', heightHeader);
    widthMap()
});

// $(document).on( "scroll",function () { 
//     $(headerOpen).css('display', 'none');
//     $(headerClose).css('display', 'flex');
//     $(header).css('height', 'auto');
// });


$(uaConteiner).click(function (e) { 
    $(uaText).css('color', '#FBFC04');
    $(uaText).css('font-weight', 'bold');
    $(enText).css('color', '#F8FAFB');
    $(enText).css('font-weight', '400');
});

$(enConteiner).click(function (e) { 
    $(enText).css('color', '#FBFC04');
    $(uaText).css('font-weight', '400');
    $(uaText).css('color', '#F8FAFB');
    $(enText).css('font-weight', 'bold');
});

// $(textVal).mouseover(function (e) { 
//     active(this)
// });

// $(textVal).mouseout(function (e) { 
//     disable(this)
// });

$(ourProject).click(function () { 
    openMenu(textOurProject, menuOpenOurProject, `115px`) 
});

$(activeProject).click(function (e) { 
    closeMenu(textOurProject, menuOpenOurProject)
});

$(finish).click(function (e) { 
    closeMenu(textOurProject, menuOpenOurProject)
});

$(sign).click(function (e) { 
    closeMenu(textOurProject, menuOpenOurProject)
});

$(window).on('click', function (e) {
    if(e.target != menuOpenOurProject[0] && e.target != ourProject[0] && e.target != textOurProject[0]) {
       closeMenu(textOurProject, menuOpenOurProject) 
    }
});

$(val).click(function () { 
    openMenu(textVal, valOpenMenu, `70px`)
});

$(ourTeam).click(function (e) { 
    closeMenu(textVal, valOpenMenu)
});

$(SignToOur).click(function (e) { 
    closeMenu(textVal, valOpenMenu)
});

$(window).on('click', function (e) {
    if(e.target != valOpenMenu[0] && e.target != textVal[0] && e.target != val[0]) {
        closeMenu(textVal, valOpenMenu)
    }
});

$(window).scroll(function (у) { 
    visible()
});

$(right).click(function () { 
    chet++
    if (chet>3){
        imgConteinerVideo[0].innerHTML += removeVideoConteiner
        $(imgConteinerVideo).css('width', '800%');
        $(imgConteinerVideo).animate({
            right: '400%'
        }, 1000)
        setTimeout(()=>{
            imgConteinerVideo[0].innerHTML = removeVideoConteiner
            $(imgConteinerVideo).animate({
                right: '0px'
            }, 0)
            $(imgConteinerVideo).css('width', '400%');
            removeClassTouch()
            chet = 0
            $(touch1).addClass('active');
        },1000)
        chet = 0
    }else{
        $(imgConteinerVideo).animate({
            right: `${chet*100}%`
        }, 1000)
    }
    removeClassTouch()
    $(document.getElementsByClassName(`touch${chet+1}`)).addClass('active');
});

$(left).click(function () { 
    chet--
    console.log(chet)
    if (chet<0){
        imgConteinerVideo[0].innerHTML= removeVideoConteiner + imgConteinerVideo[0].innerHTML
        $(imgConteinerVideo).css('width', '800%');
        $(imgConteinerVideo).animate({
            right: '400%'
        }, 0)
        $(imgConteinerVideo).animate({
            right: '300%'
        }, 1000)

        setTimeout(()=>{
            imgConteinerVideo[0].innerHTML = removeVideoConteiner
            $(imgConteinerVideo).animate({
                right: '300%'
            }, 0)
            $(imgConteinerVideo).css('width', '400%');
            removeClassTouch()
            chet = 3
            $(touch4).addClass('active');
        },1000)
    }else{
        $(imgConteinerVideo).animate({
            right: `${chet*100}%`
        }, 1000)
    }
    removeClassTouch()
    $(document.getElementsByClassName(`touch${chet+1}`)).addClass('active');
});

$(touch1).click(function () { 
    if (chet == 3){
        imgConteinerVideo[0].innerHTML += removeVideoConteiner
        $(imgConteinerVideo).css('width', '800%');
        $(imgConteinerVideo).animate({
            right: '400%'
        }, 1000)
        setTimeout(()=>{
            imgConteinerVideo[0].innerHTML = removeVideoConteiner
            $(imgConteinerVideo).animate({
                right: '0px'
            }, 0)
            $(imgConteinerVideo).css('width', '400%');
            removeClassTouch()
            chet = 0
            $(touch1).addClass('active');
        },1000)
    }else{
        $(imgConteinerVideo).animate({
            right: '0px'
        }, 1000)
        removeClassTouch()
        chet = 1
        $(touch1).addClass('active');
    }
});

$(touch2).click(function () { 
    $(imgConteinerVideo).animate({
        right: '100%'
    }, 1000)
    removeClassTouch()
    chet = 2
    $(touch2).addClass('active');
});

$(touch3).click(function () { 
    $(imgConteinerVideo).animate({
        right: '200%'
    }, 1000)
    removeClassTouch()
    chet = 3
    $(touch3).addClass('active');
});

$(touch4).click(function () { 
    $(imgConteinerVideo).animate({
        right: '300%'
    }, 1000)
    removeClassTouch()
    chet = 4
    $(touch4).addClass('active');
});

$(textNews).hover(
    function (e) {
        e.preventDefault();
        activeNews = e.target.id
        imgActiveNews = 'imgNews' + activeNews.slice(8,9)
        if (activeNews == 'textNews1'){
            $(`#${activeNews}`).animate({
                width: '68%'
            },timeToAnimation)
            $(`#${imgActiveNews}`).animate({
                width: '32%'
            },timeToAnimation)
        }else{
            $(`#${activeNews}`).animate({
                height: '80%'
            },timeToAnimation)
            $(`#${imgActiveNews}`).animate({
                height: '20%'
            },timeToAnimation)
        }
    }, function () {
        if (activeNews == 'textNews1'){
            $(`#${activeNews}`).animate({
                width: '32%'
            },timeToAnimation)
            $(`#${imgActiveNews}`).animate({
                width: '68%'
            },timeToAnimation)
        }else{
            $(`#${activeNews}`).animate({
                height: '20%'
            },timeToAnimation)
            $(`#${imgActiveNews}`).animate({
                height: '80%'
            },timeToAnimation)
        }
    }
);

$(textNantCart).hover(
    function (e) {
        e.preventDefault();
        activeNant = e.target.id
        imgActiveNant = 'imgNantCart' + activeNant.slice(12,13)
        $(`#${activeNant}`).animate({
            height: '70%'
        },timeToAnimation)
        $(`#${imgActiveNant}`).animate({
            height: '30%'
        },timeToAnimation)
    }, function () {
        $(`#${activeNant}`).animate({
            height: '30%'
        },timeToAnimation)
        $(`#${imgActiveNant}`).animate({
            height: '70%'
        },timeToAnimation)
    }
);

$('.places').click(function (e) { 
    e.preventDefault()
    placeSelect(e.target.id)
});

$(telegramYellow).mouseout(function () { 
    $(telegramYellow).css('display', 'none');
    $(telegramWhite).css('display', 'block');
});

$(telegramWhite).mouseover(function () { 
    $(telegramWhite).css('display', 'none');
    $(telegramYellow).css('display', 'block');
});

$(instagramYellow).mouseout(function () { 
    $(instagramYellow).css('display', 'none');
    $(instagramWhite).css('display', 'block');
});

$(instagramWhite).mouseover(function () { 
    $(instagramYellow).css('display', 'block');
    $(instagramWhite).css('display', 'none');
});

$(facebookYellow).mouseout(function () { 
    $(facebookYellow).css('display', 'none');
    $(facebookWhite).css('display', 'block');
});

$(facebookWhite).mouseover(function () { 
    $(facebookWhite).css('display', 'none');
    $(facebookYellow).css('display', 'block');
});

$(btnHelp).click(function () { 
    setTimeout(()=>{
        window.open('https://send.monobank.ua/jar/ZFxhj24BZ', '_blank');
    },10)
});
