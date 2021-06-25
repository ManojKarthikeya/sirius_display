const logo = document.querySelectorAll("#logo path")
// const logo2 = document.querySelectorAll("#logo mask")
setTimeout(() => {
    for (let i=0; i<logo.length; i++){
        logo[i].style.fill = "white";
    }
}, 4000);
// logo.style.fill = "white";
// logo2.style.fill = "white";

// for(let i=0 ; i<logo.length ; i++){
//     console.log(`letter ${i} is ${logo[i].getTotalLength()}`)
// }

// document.addEventListener('DOMContentLoaded', () => {
//     function animateSgv (id){
//         const logo = document.getElementById(id);
//         const logoPaths = document.querySelectorAll(`#${id} path`);
//         setTimeout(() => {for(let i = 0; i < logoPaths.length/2;i++){
//             logoPaths[i].style.fill  = "white";
//         }
            
//         }, 3500);
        
//     }
//     animateSgv('logo')
// }, false);

