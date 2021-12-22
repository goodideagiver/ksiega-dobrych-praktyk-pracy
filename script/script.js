const nextbt = document.getElementById('next')
nextbt.addEventListener("click",anim)
function anim() {
    nextbt.classList.toggle('anim');    
    setTimeout(() => {
        nextbt.classList.toggle('anim');
    }, 300);
}