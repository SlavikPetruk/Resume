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
        })
    }
})


//-------------------- change background color -------------------
document.querySelector('.changeBG').addEventListener('click', (e) => {
    e.preventDefault()
    if ( localStorage.getItem('theme') === 'blue') { 
        localStorage.removeItem('theme')
    } else { 
        localStorage.setItem('theme','blue') 
    }
    changeColor ()
    })

const changeColor =()=> {
        if (localStorage.getItem('theme') === 'blue') {
          document.querySelector('html').classList.add('blue')
        } else {
          document.querySelector('html').classList.remove('blue')
        }
} 
changeColor()