let taskbar = document.getElementById("icons");
let startMenu = document.getElementsByClassName("start-menu")[0];
taskbar.addEventListener("click",function(){
   if(startMenu.style.bottom === "-500px"){
    startMenu.style.bottom = "50px";
   }
   else{
    startMenu.style.bottom = "-500px";
   }
});
let icons = document.querySelectorAll(".icons");

let chrome1 = document.getElementById("chrome1-window");
let edge = document.getElementById("edge-window");
let recycle = document.getElementById("recycle-window");
let file = document.getElementById("file-window");


         Array.from(icons).forEach( element =>{
            element.addEventListener("click",function(){
               let clickedId = element.getAttribute("id");
               switch (clickedId) {
                  case "chrome":
                     if(chrome1.style.display === "block"){
                        chrome1.style.display = "none";
                     }
                     else{
                        chrome1.style.display = "block";
                     }
                     break;
                     case "edge":
                        if(edge.style.display === "block"){
                           edge.style.display = "none";
                        }
                        else{
                           edge.style.display = "block";
                        }
                        break;
                        case "recycle":
                           if(recycle.style.display === "block"){
                              recycle.style.display = "none";
                           }
                           else{
                              recycle.style.display = "block";
                           }
                     break;
                     case "file":
                        if(file.style.display === "block"){
                           file.style.display = "none";
                        }
                        else{
                           file.style.display = "block";
                        }
                        break;
                 
                     }
               element.classList.add("display-icons");
               setTimeout(() => {
                  element.classList.remove("display-icons");
               }, 1000);
               
            })
         })