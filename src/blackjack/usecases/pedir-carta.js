import { crearDeck } from "./create-deck";


/**
 * 
 * @param {Array<String>} deck es uun arreglo de String
 * @returns {String} retorna la ultima carta del arreglo
 */
export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0 ) {
        throw new Error ('No hay cartas en el deck');
    }

    const carta = deck.pop();
    return carta;
}