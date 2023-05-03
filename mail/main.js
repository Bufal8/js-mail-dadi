// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// Dichiara lista invitati
const invitati = ["ciao@mail.com", "manuel@gmail.com", "boolean@mail.com", "mail@boolean.com", "com@mail.boolean", "studentepazzo04@gmail.com", "hackerino@mail.tor", "pizza@pasta.it"]

// chiedi mail a user
const mail_user = prompt("Scrivi qui la tua mail");
// confronta mail user a lista invitati
for(let i = 0; i < invitati.length; i++){
    if(mail_user == invitati[i]){
        console.log("ti aspetto al partyyyy!!!!");
    }
    else{
        console.log("mi dispiace non sei in lista :(");
    }
}
    // SE mail_user = 1 elemento lista invitati ----> "ti aspetto al partyyyy!!!!"

    // ALTRIMENTI ----> "mi dispiace non sei in lista :("