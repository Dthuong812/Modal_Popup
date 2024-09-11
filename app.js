document.addEventListener('DOMContentLoaded', function() {
    var btnOpen = document.querySelector(".modal_btn");
    var modal = document.querySelector(".modal");
    var iconClose = document.querySelector(".fa-solid");
    var btnClose = document.querySelector(".footer-btn");

    function toggleModal() {
        modal.classList.toggle('hide');
    }

    if (btnOpen) {
        btnOpen.addEventListener('click', toggleModal);
    }
    if (btnClose) {
        btnClose.addEventListener('click', toggleModal);
    }
    if (iconClose) {
        iconClose.addEventListener('click', toggleModal);
    }

    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                toggleModal();
            }
        });
    }
});