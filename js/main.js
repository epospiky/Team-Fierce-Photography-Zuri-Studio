var navbtn = document.getElementsByClassName('m_nav');
var c_name = document.getElementsByClassName('company_name');
var nav = document.getElementsByClassName('main_nav_mb');
var tp = document.getElementsByClassName('tp_company_name');


console.log(navbtn)

for(let i=0; i < nav.length; i++){

    navbtn[i].addEventListener('click',()=>{
        setTimeout(()=>{
            if(nav[i].clientHeight > 520){
                c_name[i].style.transition = ".4s ease-out";
                c_name[i].style.opacity = 0;
                tp[i].style.transition = ".4s ease-out";
                tp[i].style.opacity = 1;
            }
            if(nav[i].clientHeight < 95){
                c_name[i].style.transition = ".4s ease-in";            
                c_name[i].style.opacity = 1;
                tp[i].style.transition = ".4s ease-in";            
                tp[i].style.opacity = 0;
            }
        },500)
    })

}