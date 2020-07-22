// mostrare / nascondere il menu principale

//** Versione show/hide **/

$('.header-right a i').click(function() { // oppure $('.header-right:last-child)
    $('.hamburger-menu').show();
});

$('.close').click(function() {
    $('.hamburger-menu').hide();
});

//** Versione fadeIn/fadeOut **//

// $('a i').click(function(){
//     $('.hamburger-menu').fadeIn('fast');
// });

// $('.close').click(function(){
//     $('.hamburger-menu').fadeOut('fast');
// });