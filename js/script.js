// BackTotop
var btt =document.querySelector('#btt'),
    docElement = document.documentElement,
    scrollAmt;

    window.addEventListener('scroll',()=>{
        scrollAmt = window.pageYOffset;
       console.log(scrollAmt);
       if(scrollAmt > 600){
           btt.style.opacity = '1';
       }else{
           btt.style.opacity = '0';
       }

       if(scrollAmt < 7030){
           btt.style.color = '';
       }else{
           btt.style.color = 'antiquewhite';
       }
    });

    // AutoSlide
var mainSlideWrapper = document.querySelector('.main_banner'),
mainSlideContainer = mainSlideWrapper.querySelector('.main_banner_slides'),
mainSlides = mainSlideContainer.querySelectorAll('li'),
mainSlideCount = mainSlides.length,
mainCurrentIdx = 0,
pagerContainer = mainSlideWrapper.querySelector('.pager'),
mainPagerHTML = '',
Bndown = mainSlideWrapper.querySelector('.controls .next'),
Timer = undefined;

for (i = 0; i < mainSlideCount; i++) {
    mainSlides[i].style.top = (i * 100) + '%';
}

function goToSlide(idx) {
    mainSlideContainer.style.top = -idx * 100 + '%';
    mainCurrentIdx = idx;

    for (a = 0; a < pagerBtn.length; a++) {
        pagerBtn[a].classList.remove('active');
    }
    pagerBtn[mainCurrentIdx].classList.add('active');
}

Bndown.addEventListener('click', function (e) {
    e.preventDefault();
    if (mainCurrentIdx != mainSlideCount - 1) {
        goToSlide(mainCurrentIdx + 1);
    } else {
        goToSlide(0);
    }
});
for (j = 0; j < mainSlideCount; j++) {
    mainPagerHTML += '<a href="">' + j + '</a>';
}
pagerContainer.innerHTML = mainPagerHTML;

pagerBtn = pagerContainer.querySelectorAll('a');
for (p = 0; p < pagerBtn.length; p++) {
    pagerBtn[p].addEventListener('click', function (e) {
        e.preventDefault();
        var targetIdx = parseInt(this.innerHTML);

        goToSlide(targetIdx);
    });
}
goToSlide(0);

//autoSlide
function autoSlide() {
    if (Timer == undefined) {
        Timer = setInterval(function () {
            var nextSlide = (mainCurrentIdx + 1)%mainSlideCount;
            goToSlide(nextSlide);
        }, 3500);
    }
}
autoSlide();
mainSlideWrapper.addEventListener('mouseover', function () {
    clearInterval(Timer);
    Timer = undefined;
});
mainSlideWrapper.addEventListener('mouseout', function () {
    autoSlide();
});