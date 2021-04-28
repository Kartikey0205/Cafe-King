$(document).ready(function(){
    $('.modal').modal();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    // added slider function
    $('.slider').slider({
        full_width: true
    });
});

function toggleModal() {
    var instance = M.Modal.getInstance($('#modal3'))
    instance.open();
}
