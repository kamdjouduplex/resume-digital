// Dark and light mode implementation for my digital resume
//Autor Duplex kamdjou - August 2022


document.addEventListener("DOMContentLoaded", () => {

    // check for default user mode prefference
    const user_mode = localStorage.getItem('user-mode-pref');

    if(user_mode){
        if(user_mode == 'light-mode'){
            document.documentElement.classList.toggle('light-theme');
        }else{
            document.documentElement.classList.toggle('dark-theme');
        }
    }else{
        // default mode -- dark
        document.documentElement.classList.toggle('dark-theme');
    }

    // get the dark and light button element
    const theme_btn = document.querySelector('#theme-btn');

    theme_btn.addEventListener('click', () =>{
        setUserMode();
    })

    // set the mode from user choise
    function setUserMode(){
        document.documentElement.classList.toggle('light-theme');
        if(document.documentElement.classList.contains('light-theme')){
            theme_btn.innerText = '🌙 dark-mode';
            localStorage.setItem('user-mode-pref', 'light-mode');
            location.reload();
        }else{
            theme_btn.innerText = '🔅 light-mode';
            localStorage.setItem('user-mode-pref', 'dark-mode');
            location.reload();
        }
    }
});