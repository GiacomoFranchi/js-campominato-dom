document.getElementById("play").addEventListener("click", function(){
    game(100, "box100")
})

document.getElementById("play2").addEventListener("click", function(){
    game(81, "box81")
    })


document.getElementById("play3").addEventListener("click", function(){
    game(49, "box49")
   
})

let cliccati = [];





//Funzioni 

//FUNZIONE PRINCIPALE 
function game (max, classe){
    const container = document.querySelector(".container")
    container.innerHTML = "";
    container.classList.remove("hidden")
    const box = "";

    const p = document.querySelector(".testo")
    p.innerHTML = "";
    bombe =  boomNum(max);
    console.log(bombe, typeof bombe);
    const maxClick = max - bombe.length 
    console.log(maxClick);    

    for(let i = 1; i <= max; i++){
        const box = document.createElement("div")
        box.classList.add(classe)
        box.innerHTML = i

        container.append(box)    

        box.addEventListener("click", function(){
            let cati = parseInt(this.textContent)
            giàCliccato(cati);
            console.log(cliccati, bombe);
            tap = cliccati.length
            let cicli = 1;

            if(bombe.includes(cati)){
                this.classList.add("red");
                p.innerHTML= `Hai perso in ${tap} mosse`
                container.classList.add("hidden")
                cicli = cicli;
            }else{
                
                if(cliccati.length < maxClick){
                    this.classList.add("blue")
                }else{
                    this.classList.add("blue")
                    p.innerHTML= `Hai vinto!!`
                    
                }
            }
        })
    }
}



// Crea numeri random per bombe
function genRandomNum (max){
    return Math.floor(Math.random()* (max - 1)) + 1;
}

// Funzione genera Bombe
function boomNum (max){
    const numBom = [];
    while (numBom.length < 16) {
        const num = genRandomNum(max);
        if (!numBom.includes(num)){
            numBom.push(num);
        }
        //console.log(num);
    }
    //console.log(numBom);
    return numBom;
}


function giàCliccato(cati){

    if(!cliccati.includes(cati)){
        cliccati.push(cati)
    } else{
        alert("già cliccato")}
    }