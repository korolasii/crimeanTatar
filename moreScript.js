let headerOpen = document.getElementsByClassName('headerConteinerLogoOpen'),
headerClose = document.getElementsByClassName('headerConteinerLogoClose'),
header = document.getElementsByClassName('header'),
UA = document.getElementsByClassName('UA'),
EN = document.getElementsByClassName('EN'),
closeNewsHeader = document.getElementsByClassName('closeNewsHeader'),
newsHeader = document.getElementsByClassName('newsHeader'),
btnAbout = document.getElementsByClassName('btnAbout'),
textOurProject = document.getElementsByClassName('textOurProject'),
menuOpenOurProject = document.getElementsByClassName('menuOpenOurProject'),
ourProject = document.getElementsByClassName('ourProject'),
activeProject = document.getElementsByClassName('activeProject'),
finish = document.getElementsByClassName('finish'),
sign = document.getElementsByClassName('sign'),
uaConteiner = document.getElementsByClassName('uaConteiner'),
enConteiner = document.getElementsByClassName('enConteiner'),
uaText = document.getElementsByClassName('uaText'),
enText = document.getElementsByClassName('enText'),
heightHeader = $(document.getElementsByClassName('header')).outerHeight(),
btnHelp = document.getElementsByClassName('btnHelp'),
instagramWhite = document.getElementById('instagramWhite'),
telegramWhite = document.getElementById('telegramWhite'),
facebookWhite = document.getElementById('facebookWhite'),
instagramYellow = document.getElementById('instagramYellow'),
telegramYellow = document.getElementById('telegramYellow'),
facebookYellow = document.getElementById('facebookYellow'),
val = document.getElementsByClassName('val'),
valOpenMenu = document.getElementsByClassName('valOpenMenu'),
textVal = document.getElementsByClassName('textVal'),
ourTeam = document.getElementsByClassName('ourTeam'),
SignToOur = document.getElementsByClassName('SignToOur'),
up = document.getElementsByClassName('up'),
dob = document.getElementsByClassName('dob'),
content = document.getElementsByClassName('content')

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

$(document).ready ( function(){
    $(content).css('padding-top', heightHeader);
});

$(document).resize(function () { 
    $(content).css('padding-top', heightHeader);
});

window.addEventListener('resize', ()=>{
    $(content).css('padding-top', heightHeader);
})

$(closeNewsHeader).click(function (e) { 
    e.preventDefault();
    $(newsHeader).css('position', 'absolute');
    $(newsHeader).css('width', '100%');
    $(newsHeader).animate({
        bottom: '3000px'
    }, 3000)
    heightHeader = $(document.getElementsByClassName('header')).outerHeight();
    $(content).css('padding-top', heightHeader);
});

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