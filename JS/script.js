document.getElementById("play").addEventListener("click", function(){
    game(100, "box100")
})

document.getElementById("play2").addEventListener("click", function(){
    game(81, "box81")
    })


document.getElementById("play3").addEventListener("click", function(){
    game(49, "box49")
   
})


//Funzioni 

function game (max, classe){
    const container = document.querySelector(".container")
    container.innerHTML = "";
    const box = "";
    for(let i = 1; i <= max; i++){
        const box = document.createElement("div")
        box.classList.add(classe)
        box.innerHTML = i
    
        box.addEventListener("click", function(){
            this.classList.add("blue")
            console.log(this.textContent);
         })
    container.append(box)
}    
}