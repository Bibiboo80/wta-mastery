import * as fs from 'fs';

// Pfad zur Namensliste
const nameFile = './app/data/business/namen.txt';

/**
 * getRandomName
 *
 * Liest die Datei nameFile und gibt einen zufälligen Namen zurück.
 *
 * @returns string
 */
export function getRandomName() {
    // Tipps:
    // 1.) Datei einlesen (mit "utf-8" encoding)
    // 2.) Text in Array umwandeln (Zeilenumbrüche werden entweder als "\n" oder als "\r\n" erkannt)
    // 3.) Zufälliges Arrayelement auslesen und zurückgeben
    const names = fs.readFileSync(nameFile, 'utf-8').split(/\r?\n/);
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
    let randomName = '';
    return randomName;
};


/**
 * getAutoComplette
 *
 * Liest die Datei nameFile und gibt alle Namen zurück, die mit dem übergebenen Query beginnen.
 *
 * @param {*} query
 * @returns array<string>
 */


export function getAutoComplete(query) {
    // Tipp: Zum Einlesen der Datei kann dieselbe Funktion wie in getRandomName verwendet werden.
    // Du darfst diese Funktion auch gerne in eine eigene Funktion auslagern, statt den Code zu duplizieren.
    const names = fs.readFileSync(nameFile, 'utf-8').split(/\r?\n/);
    const autoComplete = names.filter(name => name.startsWith(query));
    return autoComplete;
};



/**
 * getStatistik
 *
 * Liest die Datei nameFile und berechnet die folgende Statistik für alle Namen, die mit dem
 * übergebenen Query beginnen
 *
 * @param {*} query
 * @returns object {minNameLength: number, maxNameLength: number, averageNameLength: number}
 */
export function getStatistics(query) {
    let stat = {
        minNameLength: 0, // Die Länge des kürzesten gefundenen Namen
        maxNameLength: 0, // Die Länge des längsten gefundenen Namen
        averageNameLength: 0, // Die Durchschnittslänge aller gefundenen Namen
    };

    // Tipps:
    // 1. Zum Einlesen der Namen wird dieselbe Funktion wie oben benötigt.
    // 2. Zum Suchen von passenden Namen, wird ähnlicher Code wie in getAutoComplete benötigt.

    return stat;
};
