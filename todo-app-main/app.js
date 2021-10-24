const themeSwitch = document.querySelector('input')
themeSwitch.addEventListener('click',()=>{
    document.body.classList.toggle('light-theme')
    console.log('ere');
})