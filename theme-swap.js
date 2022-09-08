const button = document.getElementById("theme-swap");
button.addEventListener("click", () => {

    const elements = document.getElementsByTagName('html');
    const html = elements[0];

    const theme = getTheme();
    html.classList.toggle('light', isThemeLight)

    let isThemeLight = theme === 'light';

    if(isThemeLight){
        html.classList.remove('light')
        button.innerText = "🌞";
        setTheme('dark');
    } else{
        html.classList.add('light');
        button.innerText = "🌑";
        setTheme('light');
    }
});

function getTheme(){
    const theme = localStorage.getItem('theme');

    if('theme' === 'light'){
        return 'light';
    } else{
        return 'dark';
    } 
};

function setTheme(){
    localStorage.setItem('theme', theme);
};