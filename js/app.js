$(document).ready(function(){
    $('.modal').modal();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    // added slider function
    $('.slider').slider({
        full_width: true
    });
    $('.myreviews').carousel({
        numVisible: 7,
        shift: 5,
        padding: 55,
    });
});

function toggleModal() {
    var instance = M.Modal.getInstance($('#modal3'))
    instance.open();
}
