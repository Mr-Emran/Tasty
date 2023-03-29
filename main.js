// function showMenu(toggleId, navId) {
//     const toggle = document.getElementById(toggleId);
//     nav = document.getElementById(navId);

//     if (toggle && nav) {
//         toggle.addEventListener('click', () => {
//             nav.classList.toggle('show-menu');
//         })
//     }
// }


// showMenu('nav-toggle', 'nav-menu')

// remove menu mobile
AOS.init({
    disable: false,
});

const navlink = document.querySelectorAll('.nav__link');
window.onscroll = () =>{
    let windowPY = window.pageYOffset
    // console.log(windowPY);
for(let item of navlink){
    item.classList.remove('active-link')
    if(windowPY < 613){
       navlink[0].classList.add('active-link')
    }else if(windowPY > 613 && windowPY < 1152){
        navlink[1].classList.add('active-link')
    }else if(windowPY > 1152 && windowPY < 1656){
        navlink[2].classList.add('active-link')
    }else if(windowPY > 1656 && windowPY < 2933){
        navlink[3].classList.add('active-link')
    }else if(windowPY > 2933){
        navlink[4].classList.add('active-link')
    }
}
}


// function lineAction() {
//     const navMenu = document.getElementById('nav-menu');
//     navMenu.classList.remove('show-menu');
 
    
// }
// navlink.forEach(n => n.addEventListener('click', lineAction));




// window.addEventListener('scroll', console.log(window));

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
      spaceBetween: 30,
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  
let btn_contact = document.querySelector(".bbt")
let display_con = document.querySelector('.form_display')
let btn_contact_xxl = document.querySelector(".xxxl")


// let change_btn_contact = () =>{
// display_con.style = "  display: flex;"
// }

btn_contact.addEventListener("click",   () =>{
    // display_con.classList.remove(".form_display")
    display_con.style = "display: flex"
    
})

btn_contact_xxl.addEventListener("click", () =>{
    display_con.style = "display: none"
  
})

let forms = document.querySelector('.form')
// let formData = new FormData(forms)

// let json = JSON.stringify()
forms.addEventListener("submit" , (event) => {

    event.preventDefault()
    let inputs = document.querySelectorAll('input')

let form_data = {}
for(let item of inputs){
    let { name, value} = item  
    form_data[name] = value 
    item.value = ""
}
console.log(form_data);

}) 


let btn_contact_xxl2 = document.querySelector(".xxxl2")
let burg_menu_activ2 = document.querySelector('.burg_menu_activ')
let burg_menu1 = document.querySelector('.burg_menu')

burg_menu1.addEventListener("click", () =>{
    burg_menu_activ2.style = 'transform: translateY(0)'
})
btn_contact_xxl2.addEventListener("click", () =>{
    burg_menu_activ2.style = 'transform: translateY(-700%)'
})
