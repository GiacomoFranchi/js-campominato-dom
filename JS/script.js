//Easy
document.getElementById("play").addEventListener("click", function(){
    game(100, "box100");
})
//Mid
document.getElementById("play2").addEventListener("click", function(){
    game(81, "box81");
})
//Hard
document.getElementById("play3").addEventListener("click", function(){
    game(49, "box49");
})

//Funzioni 
//FUNZIONE PRINCIPALE 
function game (max, classe){
    const container = document.querySelector(".container")
    container.innerHTML = "";
    container.classList.remove("hidden")
    const box = "";
    cliccati = [];
    const p = document.querySelector(".testo")
    p.innerHTML = "";
    bombe =  boomNum(max);
    const maxClick = max - bombe.length 
    console.log(bombe, maxClick);

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

            if(bombe.includes(cati)){
                this.classList.add("red");
                p.innerHTML= `Hai perso in ${tap} mosse`
                container.classList.add("hidden")
            }else{
                strisciaVincente(this, maxClick);
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
// Lista numeri cliccati
function giàCliccato(cati){

    if(!cliccati.includes(cati)){
        cliccati.push(cati)
    } else{
        alert("già cliccato")}
    }
// Segna i numeri vincenti
function strisciaVincente (elemento, maxClick){
    const testo = document.querySelector(".testo")
    if(cliccati.length < maxClick){
        elemento.classList.add("blue")
    }else{
        elemento.classList.add("blue")
        testo.innerHTML= `Hai vinto!!` 
    }
}