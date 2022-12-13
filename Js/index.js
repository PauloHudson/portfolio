
const modal = document.querySelector('.modal-container')

function openModal(){
    modal.classList.add('active')
}

function closeModal(){
    modal.classList.remove('active')
}

modal.addEventListener('click', function(e) {
    if (e.target == this) closeModal();
});