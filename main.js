// mostrare / nascondere il menu principale

//** Versione show/hide **/

$('i.fa-bars').click(function() {
    $('.hamburger-menu').show();
});

$('i.fa-times').click(function() {
    $('.hamburger-menu').hide();
});

//** Versione fadeIn/fadeOut **//

// $('i.fa-bars').click(function(){
//     $('.hamburger-menu').fadeIn('fast');
// });

// $('i.fa-times').click(function(){
//     $('.hamburger-menu').fadeOut('fast');
// });