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