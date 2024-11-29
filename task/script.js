let left = 0;

$(document).ready(()=>{
    $(document).keyup((e)=>{
        if (e.key === 'ArrowLeft' && left > 0){
            left -= 100;
        }
        else if (e.key === 'ArrowRight' && left < window.innerWidth){
            left += 100;
        }
        else return;

        $('.block').animate({
            left: left + 'px',
        }, 500);
    });
});
