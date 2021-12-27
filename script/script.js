const nextbt = document.getElementById('next')
nextbt.addEventListener("click",anim)
function anim() {
    setBg();
}



const clrbl = document.querySelectorAll('.colorgrad');
const gradwrap = document.getElementById('gradbg');
const setBg = () => {
    // clrbl.style.backgroundColor = "#" + randomColor;
        let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        gradwrap.style.background = randomColor;
        gradwrap.style.background = gradwrap.style.background.replace("/)","/,0.5/)");
        let bgstyle = gradwrap.style.background;
        bgstyle = bgstyle.replace("rgb","rgba");
        bgstyle = bgstyle.replace("\)","\,0.2)")
        gradwrap.style.background = bgstyle;
        gradwrap.style.boxShadow = '#'+Math.floor(Math.random()*16777215).toString(16)+" 0vw -25vh 80vw -10vh inset";
        console.log(bgstyle);
        //const randomRotation = Math.floor(Math.random()*360);
  }
