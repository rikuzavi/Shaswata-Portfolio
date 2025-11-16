let darkmode = document.getElementById('darkmode')
darkmode.addEventListener('click',()=>{
    if(darkmode.children[0].classList[1] == 'fa-moon'){
        darkmode.children[0].classList.replace(darkmode.children[0].classList[1],'fa-sun')
        document.getElementsByTagName('body')[0].className = "bg-[bisque] duration-[0.5s]"
        let twtext = document.querySelectorAll(".tw")
        for(let i of twtext){
            i.classList.replace(i.classList[0],'tb')
        }
    }else{
        darkmode.children[0].classList.replace(darkmode.children[0].classList[1],'fa-moon')
        document.getElementsByTagName('body')[0].className = "bg-[#313647] duration-[0.5s]"
        let tbtext = document.querySelectorAll(".tb")
        for(let i of tbtext){
            i.classList.replace(i.classList[0],'tw')
        }
    }
})
