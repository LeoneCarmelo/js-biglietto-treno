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

/* Dati */
const priceKm = 0.21;
const youngDiscount = 20;
const adultDiscount = 40;
const minAge = 18;
const maxAge = 65;
const userKm = Number(prompt('Hey!, Quanti chilometri vuoi percorrere?'))
const userAge = prompt('Inserisci la tua età')

/* Code */
const costTotalKm = userKm * priceKm
if (userAge < minAge) {
    let ticketCost = costTotalKm - (costTotalKm * youngDiscount) / 100
    console.log(ticketCost.toFixed(2))
} else if (userAge >= maxAge) {
    ticketCost = costTotalKm - (costTotalKm * adultDiscount) / 100
    console.log(ticketCost.toFixed(2))
} else {
    ticketCost = costTotalKm
    console.log(ticketCost.toFixed(2))
}




