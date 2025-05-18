let ppic=document.getElementById('profilepic')
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; // Get the scroll position
    const welcomeText = document.getElementById('welcome');
    const welcomeDiv = document.getElementById('welcomediv');
    if(window.innerWidth > 1099){
        if(scrollPosition <= 320){
            
            welcomeText.style.transform = `translateY(-${scrollPosition *0.7}px)`
        }
        if(scrollPosition <=650){
            welcomeText.style.backgroundPosition = `${scrollPosition *0.3}% 0%`
        }
        if (scrollPosition > 650) {
            const newHeight = Math.max(0, 200 - (scrollPosition - 650) * 0.5); // Gradually reduce the height
            welcomeDiv.style.height = `${newHeight}px`;
        } else {
            // Reset height to original value when scrolling up
            welcomeDiv.style.height = '200px'; 
        }
        if(scrollPosition >1450){
            ppic.style.position='absolute'
            ppic.style.top = '1530px'
        }else{
            ppic.style=""
        }
        // console.log(scrollPosition);
    }
});

let d= new Date()
let year = document.getElementById('year')
year.style.color = 'blueviolet'
year.innerText=d.getFullYear()

let skill=['python','javascript','html','css','tailwind css','nodejs','flask','sql','mongodb']
let sk=document.getElementById('skill')
for(let i of skill){
    let sd=document.createElement('div')
    let img = document.createElement('img')
    img.src = `./images/skills/${i}.png`
    img.style.width = '70%'
    img.style.height = '100px'
    sd.className = 'indiv'
    sd.append(img)
    sk.append(sd)
}

if(window.innerWidth < 1100){
    let nav = document.getElementById('nav')
    let navbtn = document.getElementById('navbtn')
    nav.style.height = '0vh'
    navbtn.addEventListener('click',()=>{
        if(nav.style.height == '0vh'){
            nav.style.height = '100vh'
        }else{
            nav.style.height = '0vh'
        }
    })
}

let design = document.getElementById('design')
for(let i=0;i<150;i++){
    let inner = document.createElement('div')
    inner.className = 'inner'
    design.append(inner)
}

let body = document.getElementsByTagName('body')[0]
let darkinner= document.getElementsByClassName('darkinner')[0]
let darkinn = document.getElementsByClassName('darkinn')[0]

let mode='dark'
darkinner.addEventListener('click',()=>{
  if(mode=='default'){
    darkinn.style.transform = 'translateX(-10px)'
    darkinner.style.border = '5px solid blueviolet'
    if(window.innerWidth <1100){
        body.style.background ='linear-gradient(to top,black,black)'
        body.style.backgroundRepeat='no-repeat'
        body.style.backgroundSize='100vw 100vh'
        body.style.backgroundAttachment='fixed'
    }else{
        body.style.background ='black';
        body.style.backgroundRepeat='no-repeat'
        body.style.backgroundSize='100vw 100vh'
        body.style.backgroundAttachment='fixed'
    }
    mode='dark'
  }else{
    darkinn.style.transform = 'translateX(30px)'
    darkinner.style.border = '5px solid white'
    if(window.innerWidth <1100){
        body.style.background ='linear-gradient(to top,blueviolet,black)'
        body.style.backgroundRepeat='no-repeat'
        body.style.backgroundSize='100vw 100vh'
        body.style.backgroundAttachment='fixed'
    }else{
        body.style.background ='lightpink';
        body.style.backgroundRepeat='no-repeat'
        body.style.backgroundSize='100vw 100vh'
        body.style.backgroundAttachment='fixed'
    }
    mode='default'
  }
})




let PROJDATA = [
    {   'name' : 'High Rise Mobile Game',
        'desc' : "This is a close replica game of Hot air balloon.where one have to save the balloon from the nail bars coming from the top",
        'techused' : 'HTML5, CSS3, JAVASCRIPT, HTML CANVAS, Github Pages Deployment',
        'ytlink' : 'https://www.youtube.com/embed/CCHtYU_-eps?si=hO2F8GDZ3TAJqME0',
        'projlink' : 'https://rikuzavi.github.io/High-Rise/'
    },
]
let project = document.getElementById('project')
for(let i of PROJDATA){
    
    let d=document.createElement('div')
    d.className = 'proj'

    let iframe = document.createElement('iframe')
    iframe.className = 'frame'
    iframe.src = i.ytlink
    iframe.title="YouTube video player" 
    iframe.frameborder="0" 
    iframe.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    iframe.referrerpolicy="strict-origin-when-cross-origin" 
    iframe.allowfullscreen = true

    let descdiv = document.createElement('div')
    descdiv.className = 'desc'
    descdiv.innerHTML = `<h2 style="color:lightcoral">${i.name}</h2> <hr> <h3 style="color:lightcoral;text-decoration : underline">DESCRIPTION</h3>${i.desc}<h3 style="color:lightcoral;text-decoration:underline">TECHNOLOGY USED</h3>${i.techused} <br><br> <a href="${i.projlink}" target="_blank">-Link</a>`
    d.append(iframe)
    d.append(descdiv)
    project.append(d)

}



