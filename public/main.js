const topMenu = document.getElementById('ntd-top-menu')
const toptoogleMenuicon = document.getElementById('ntd-toogle-top-menu-icon')

document.addEventListener('click',(e) =>{
    if(toptoogleMenuicon.contains(e.target)){
        // click nút icon
        topMenu.classList.toggle('ntd-topmenu-expanded')
        topMenu.classList.toggle('hidden')
   
    } else{
        //click ngoài 
        if(topMenu.classList.contains('ntd-topmenu-expanded')){
            topMenu.classList.remove('ntd-topmenu-expanded')
            topMenu.classList.add('hidden')
        }
    }
    
})