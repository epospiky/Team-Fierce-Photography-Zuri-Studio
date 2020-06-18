var navbtn = document.getElementById('m_nav');
var c_name = document.getElementById('company_name');
var nav = document.getElementById('main_nav')

navbtn.addEventListener('click',()=>{
    setTimeout(()=>{
        if(nav.clientHeight > 520){
            c_name.style.transition = ".4s ease-out";
            c_name.style.opacity = 0;
        }
        if(nav.clientHeight < 95){
            c_name.style.transition = ".4s ease-in";            
            c_name.style.opacity = 1;
        }
    },500)
})