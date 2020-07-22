// mostrare / nascondere il menu principale

//** Versione show/hide **/

$('a i').click(function() {
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