// mostrare / nascondere il menu principale

//** Versione show/hide **/
$(document).ready(function(){
    
$('.header-right > a').click(function() { // oppure $('.header-right:last-child)
    $('.hamburger-menu').show();
});

$('.close').click(function() {
    $('.hamburger-menu').hide();
});

//** Versione fadeIn/fadeOut **//

// $('header-right > a').click(function(){
//     $('.hamburger-menu').fadeIn('fast');
// });

// $('.close').click(function(){
//     $('.hamburger-menu').fadeOut('fast');
// });

//** Con addClass/removeClass ***//

// $('.header-right > a').click(function(){
//     $('.hamburger-menu').addClass('active');
// });

// $('.close').click(function(){
//     $('.hamburger-menu').removeClass('active');
// });
});