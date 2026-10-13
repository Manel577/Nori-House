//dark mode
const btn = document.getElementById("butt");
 
if (localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark-mode");
    btn.textContent="☀️";
};
 
btn.addEventListener("click" , () => {
     
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    if (isDarkMode){
        btn.textContent="☀️";
        localStorage.setItem("theme","dark");
        
    }else{
        btn.textContent="🌙";
        localStorage.setItem("theme","light");
         document.body.classList.add("light-mode");

    }
}
);
 
 
