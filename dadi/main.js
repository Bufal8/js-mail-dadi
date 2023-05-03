/* Gioco dei dadi
 * Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
 * Stabilire il vincitore, in base a chi fa il punteggio più alto.
 * Prima di partire a scrivere codice poniamoci qualche domanda:
 * Che ci sia un array da qualche parte?
 * Se dobbiamo confrontare qualcosa che “cosa” ci serve?
 * Bonus possibili su entrambi:
 * Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
 * Consigli del giorno SeeeeEEEEEEeeeempre validi però:
 * 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
 * 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
 * 3. si ma noi cosa vogliamo fare?
 * 4. torniamo a scrivere in italiano
 * 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
 */ 

// generazione numero random da 1 a 6 utente
const numero_utente = Math.floor(Math.random() * 6) + 1;
console.log(numero_utente);
// generazione numero random da 1 a 6 pc
let numero_pc = Math.floor(Math.random() * 6) + 1;
console.log(numero_pc);
// confronto due numeri
    // SE numero_utente > numero_pc -----> HAI VINTO!!
if(numero_utente > numero_pc){
    console.log(`il tuo numero (${numero_utente}) è maggiore del numero del pc (${numero_pc}), HAI VINTO!!`)
}
    // ALTRIMENTI SE numero_utente = numero_pc -----> È UN PAREGGIO!!
else if(numero_utente === numero_pc){
    console.log(`il tuo numero (${numero_utente}) è uguale numero del pc (${numero_pc}), È UN PAREGGIO!!`)
}
    // ALTRIMENTI ------> HAI PERSO :(
else{
    console.log(`il tuo numero (${numero_utente}) è minore del numero del pc (${numero_pc}), HAI PERSO :(`)
}