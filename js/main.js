var navbtn = document.getElementsByClassName('m_nav'); //Class of toggle button
var c_name = document.getElementsByClassName('company_name'); //Zuri studio text for nav
var nav = document.getElementsByClassName('main_nav_mb'); //Div of The mb container 
var tp = document.getElementsByClassName('tp_company_name'); //Zuri studio text for nav


console.log(navbtn);
console.log(nav.length);

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