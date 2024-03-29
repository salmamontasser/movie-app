export function cardHoverIn() {
    $(this).find($('.overlay')).css({ "opacity": "1", "visibility": "visible" });
    $(this).find($('.overlay .title')).removeClass('animate__slideOutLeft');
    $(this).find($('.overlay .title')).addClass('animate__fadeInDown animate__delay-0s');
    $(this).find($('.overlay .desc')).removeClass('animate__slideOutLeft');
    $(this).find($('.overlay .desc')).addClass('animate__flipInX animate__delay-0s');
    $(this).find($('.overlay .date')).removeClass('animate__slideOutLeft');
    $(this).find($('.overlay .date')).addClass('animate__fadeInUp animate__delay-0s');
    $(this).find($('.overlay .rate')).removeClass('animate__slideOutLeft');
    $(this).find($('.overlay .rate')).addClass('animate__fadeInUp animate__delay-0s');
    $(this).find($('.cardImage img')).addClass("animate");
}
export function cardHoverOut() {
    $(this).find($('.overlay')).css({ "opacity": "0", "visibility": "hidden" });
    $(this).find($('.overlay .title')).removeClass('animate__fadeInDown animate__delay-0s');
    $(this).find($('.overlay .title')).addClass('animate__slideOutLeft');
    $(this).find($('.overlay .desc')).removeClass('animate__flipInX animate__delay-0s');
    $(this).find($('.overlay .desc')).addClass('animate__slideOutLeft');
    $(this).find($('.overlay .date')).removeClass('animate__fadeInUp animate__delay-0s');
    $(this).find($('.overlay .date')).addClass('animate__slideOutLeft');
    $(this).find($('.overlay .rate')).removeClass('animate__fadeInUp animate__delay-0s');
    $(this).find($('.overlay .rate')).addClass('animate__slideOutLeft');
    $('.cardImage img').removeClass("animate");
}  