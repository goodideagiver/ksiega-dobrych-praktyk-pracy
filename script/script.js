const nextbt = document.getElementById('next')
nextbt.addEventListener("click",anim)
function anim() {
    nextbt.classList.toggle('anim');    
    setTimeout(() => {
        nextbt.classList.toggle('anim');
    }, 300);
    setBg();
}



const clrbl = document.querySelectorAll('.colorgrad');
const setBg = () => {
    // clrbl.style.backgroundColor = "#" + randomColor;
    clrbl.forEach(element => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        element.style.backgroundColor = "#" + randomColor;
        const randomRotation = Math.floor(Math.random()*360);
        element.style.transform = "rotate(" + randomRotation +"deg)";
    });
  }
