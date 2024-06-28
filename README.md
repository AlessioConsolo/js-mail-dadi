# js-mail-dadi

Mail
Chiedi all’utente la sua email (tramite prompt o input, a voi la scelta),
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

**_ MAIL _**

1. Creo una variabile array che contenga la lista di email
2. Creo la variabile button collegandola tramite id all'elemento html
3. Creo la function annessa al button in cui vado a reperirmi il value della mail inserita dall'utente ed inoltre creo una variabile di controllo
4. All'interno dell'eventlistener vado a creare un ciclo for in grado di confrontare se l'email imessa dall'utente sia riscontrata dalla variabile di controllo, se passa il controllo l'accesso viene autorizzato mentre in caso contrario fallirà l'autenticazione

**_ DADI _**

1. Creo due variabili, una per il giocatore ed una per il computer in grado di formulare randomicamente un numero da 1 a 6 in modo intero
2. Creo 2 log che vadano a mostrare il risultato dei dadi dei partecipanti
3. Creo una condizione if in grado di determinare il risultato della partita ed inviare la risposta adeguata in console in base al risultato ottenuto
