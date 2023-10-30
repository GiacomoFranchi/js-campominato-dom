# ESERCIZIO
## Campo Minato
**Consegna**
Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella:
    - se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
    - altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
**BONUS:**
1. L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
2. quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
3. quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
## Svolgimento:
**Logica del programma:**

1. Creare 3 event listener che si attivano al click dei bottoni  "Play.."
al click viene dichiarata la funzione "game" che come parametri ha il numero massimo di caselle e la classe css relativa alla difficoltà del livello
2. creare la funzione game:
    - dichiarare all'interno della funzione le variabili costanti: container, associata alla classe ".container" e box.
    - impedire l'accumolo delle griglie dei livelli, al click consecutivo dei bottoni, dichiarando che container non ha elementi all'intermo di HTML
    - Creare un ciclo for con "i" = 1 che continua finchè i non diventa superiore al numero massimo (dato in ingresso della funzione)
         a ogni ciclo viene generato un elemento div a cui verra associata la classe box e prenderà come valore in HTML la variabile "i"
        Utilizzando .append inserire la variabile box all'interno di container così da visualizzare ogni box nella pagina 
    - creare un event listener che si attiva al click di un elemento box
3. Creare la funzione genRandomNum che genrea numeri random comresi fra i parametri minimo e massimo 
4. Creare una funzione che associa le bombe ai numeri
    - creare un ciclo while che continua finche l'array delle bombe non arriva a 16 elementi
    - a cogni ciclo controllare che il nuovo numero non sia già presente nell'array
    -riportare l'array numBom
5. all'interno della funzione game creare un event listener che si attiva al click su un elemento box
6dichiareare la variabile "cati" che corrisponde al testo contenuto nel box cliccato
6. inserire nel eventlistener la funzione già cliccato che controlla che non vengano inseriti per 2 volte gli stessi numeri
7. creare un ciclo if per cui 
    - se il testo di "cati" è già presente nell'array bombe allora il box diventa rosso e il giocatore perde
    - altrimenti se
        - la lunghezza dell'array contenente i numeri cliccati è minore del numero massimo meno le 16 bombe allora colora lo sfondo di blu
        - se è uguale allora il gioco finisce e il giocatore ha vinto

## Output
associare a <p> in HTML la stringa "hai perso in x mosse" se il giocatore perde
e "hai vinto" se il giocatore vince