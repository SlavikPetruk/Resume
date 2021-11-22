const preloader = document.querySelector('.preloader')
window.addEventListener('load', () => {
    preloader.classList.add('.hidden')
    setTimeout(()=>{
        preloader.remove(), 600 })
})


//-------------------- up to top -------------------
const btnToTop = document.querySelector('.upToTop')
document.addEventListener('scroll', (event)=>{
    if (document.documentElement.scrollTop < 120 || window.screen.width < 1080) {
        btnToTop.style.display = 'none'
    } else {
        btnToTop.style.display = 'flex'
        btnToTop.addEventListener('click', () => {
            document.documentElement.scrollTop = 0
            scrollTop.scrollIntoView({behavior:"smooth"})
        })
    }
})


//-------------------- change background color -------------------

document.querySelector('.changeBG').addEventListener('click', (e) => {
    if ( localStorage.getItem('theme') === 'blue') { localStorage.removeItem('theme') }
     else { localStorage.setItem('theme','blue') }
    changeColor ()})
    
const changeColor =()=> {
    if (localStorage.getItem('theme') === 'blue') { document.querySelector('html').classList.add('blue') }
     else { document.querySelector('html').classList.remove('blue')
        }
} 
changeColor()

//----------- modal------------

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnsOpen = document.querySelectorAll('.site_img')
const btnClose = document.querySelector('.closeModal')

const toggleModal = () => {
    modal.classList.toggle('hiddens')
    overlay.classList.toggle('hiddens')
}
for (let i = 0; i < btnsOpen.length; i++) {
    btnsOpen[i].addEventListener('click', toggleModal)
}

function myFunction() {
  var x = document.getElementsByClassName("site_img")[0].id;
  console.log(x)
}

btnClose.addEventListener('click', toggleModal)
overlay.addEventListener('click', toggleModal)