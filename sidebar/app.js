const btns = document.querySelectorAll('.btn');
const sidebar = document.querySelector('.sidebar');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains('toggle')){
            sidebar.classList.toggle('show-sidebar');
        }
        else if (styles.contains('close')){
            sidebar.classList.remove('show-sidebar');
        }
    });
});
