const btns = document.querySelectorAll('.btn');
const overlay = document.querySelector('.modal-overlay');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains('close')){
            overlay.classList.remove('open-modal');
        }
        else if (styles.contains('open')){
            overlay.classList.add('open-modal');
        }
    });
});