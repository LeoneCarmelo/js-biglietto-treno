/* 
Tools:
-prompt
-const/let
-if/else


Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
1 il prezzo del biglietto è definito in base ai km (0.21 € al km)
2 va applicato uno sconto del 20% per i minorenni
3 va applicato uno sconto del 40% per gli over 65.
4 L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

/* Data */
const priceKm = 0.21;
const youngDiscount = 20;
const adultDiscount = 40;
const maxAge = 18;
const minAge = 65;
const ticketEl = document.getElementById('ticket')
const userKm = prompt('Hey!, Quanti chilometri vuoi percorrere?')
const userAge = prompt('Inserisci la tua età')


/* Code */
const costTotalKm = userKm * priceKm;
let ticketCost
if (userAge < maxAge) {
    ticketCost = costTotalKm - (costTotalKm * youngDiscount) / 100
    console.log(ticketCost.toFixed(2))
} else if (userAge >= minAge) {
    ticketCost = costTotalKm - (costTotalKm * adultDiscount) / 100
    console.log(ticketCost.toFixed(2))
} else {
    ticketCost = costTotalKm
    console.log(ticketCost.toFixed(2))
}

ticketEl.innerHTML = `Il costo del tuo biglietto è di: ${ticketCost.toFixed(2)} €`





