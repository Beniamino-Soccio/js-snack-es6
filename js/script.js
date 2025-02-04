/*
*SNACK 1*
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
```
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
```
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, 
per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come proprietà:

nome del tavolo (tableName),
nome dell'ospite (guestName),
posto occupato (place),

Generiamo e stampiamo in console la lista per i segnaposto.
*/
console.log('SNACK-1----------------------')
//FOREACH
//inizializzo le cose di partenza
const tableName = "Tavolo Vip";
const guests = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];
const segnaposti = []
//aggiungo all'array segnaposto nometavolo, il vip e il posto
guests.forEach((guest, i) => {
    segnaposti.push({tableName: tableName, guestName: guest, place: i + 1 }); 
})
console.log(segnaposti);

/*
*SNACK 2*
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
Questo è l'elenco degli studenti:

Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna 	    48
145 Gaia Borromini          74
196 Luigi Grimaldello 	    68
102 Piero della Francesca   50
120 Francesca da Polenta    84
*/
console.log('SNACK-2----------------------')
//inizializzo l'array studenti
const students = [
    {id: 213, name: 'Marco della Rovere', grades: 78},
    {id: 110, name:  'Paola Cortellessa', grades: 96},
    {id: 25, name: 'Andrea Mantegna', grades: 48},
    {id: 145, name: 'Gaia Borromini' , grades: 74},
    {id: 196, name:  'Luigi Grimaldello', grades: 68},
    {id: 102, name:  'Piero della Francesca', grades: 50},
    {id: 120, name:  'Francesca da Polenta', grades: 84}
]
console.log(students);
//array nome in maiuscolo
const studentUpperCase = students.map(student => student.name.toUpperCase());
console.log(studentUpperCase);
//array studenti che hanno un totale di voti superiore a 70
const gradesOver70 = students.filter(student => student.grades >= 70);
console.log(gradesOver70);
//array studenti che hanno un totale di voti superiore a 70 e id superiore a 120
const gradesOver70Id120 = students.filter(student => student.grades >= 70 && student.id > 120);
console.log(gradesOver70Id120);

/*
*SNACK 3*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/
console.log('SNACK-3----------------------')

const bikes = [
    {nameBike: 'Mountain bike', weight: 15 },
    {nameBike: 'BMX', weight: 10 },
    {nameBike: 'Graziella', weight: 8 },
    {nameBike: 'Bici elettrica', weight: 23 },
    {nameBike: 'Downhill', weight: 18 },
    {nameBike: 'Tandem', weight: 35 }
]
console.log(bikes);

// Inizializziamo l'array
let lightestBike = bikes[0];

for (const bike of bikes) {
    if (bike.weight < lightestBike.weight) {
        lightestBike = bike;
    }
}

// destructuring name e weight
const {nameBike, weight} = lightestBike;

// Stampo con template literal
console.log(`La bici più leggera è la ${nameBike} con un peso di ${weight} kg.`);




/*
*SNACK 4*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/
console.log('SNACK-4----------------------')

const teams = [
    {nameTeam: 'Bologna', points: 0, fouls: 0},
    {nameTeam: 'Juventus', points: 0, fouls: 0},
    {nameTeam: 'Inter', points: 0, fouls: 0},
    {nameTeam: 'Lazio', points: 0, fouls: 0},
    {nameTeam: 'Milan', points: 0, fouls: 0},
    {nameTeam: 'Napoli', points: 0, fouls: 0},
    {nameTeam: 'Parma', points: 0, fouls: 0},
]

//funzione numeri random
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// randomizzo i punti e i falli all'interno di [teams]
teams.forEach(team => {
    team.points = getRandomNumber();
    team.fouls = getRandomNumber();
});
console.log('teams', teams);

//creo un nuovo array con solo il nome della squadra e i falli
const teamStats = teams.map(({nameTeam, fouls}) => ({nameTeam, fouls}));

//stampo array
console.log('array di nomi e falli: ', teamStats);

/*
SNACK-5
A partire da un array di stringhe, crea un secondo array
formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']
*/ 
let names = ['pippo', 'PLUTO', 'Paperino'];
console.log(names);

function formattazioneArray(names) {
    return names.map(name => {
        let lowerCase = name.toLowerCase();
        return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    });
}
let formattedArray = formattazioneArray(names);

console.log(formattedArray);

function contrarioArray(names) {
    return names.map(name => {
        let upperCase = name.toUpperCase();
        return upperCase.charAt(0).toLowerCase() + upperCase.slice(1);
    })
}
let notFormattedArray = contrarioArray(names);
console.log(notFormattedArray);

