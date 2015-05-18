/**
 * Created by Mersalin on 5/13/2015.
 */


var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});


/**
 * Login function
 */
function login() {
    $("#main-username").val($("#modal-username").val());
    $("#main-result").val($("#modal-result").val());
    $("#myModal").modal("hide");
}

//called when the modal is closed, logs values grabbed from the modal in login()
$('#myModal').on('hidden', function() {
    console.log('username : '+$("#main-username").val());
    console.log('result : '+$("#main-result").val());
});