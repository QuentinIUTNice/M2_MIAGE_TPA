var chartVars = "KoolOnLoadCallFunction=chartReadyHandler";
KoolChart.create("chart1", "chartHolder", chartVars, "100%", "100%");

function chartReadyHandler(id) {
    document.getElementById(id).setLayout(layoutStr);
    document.getElementById(id).setData(chartData);
}

// import dataJson from './catalogue.json' assert {type: 'json'};
let dataJson = [
    {
        "marque": "Volvo",
        "nom": "S80 T6",
        "puissance": 272,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": false,
        "prix": 50500,
        "categorie": "routière"
    },
    {
        "marque": "Volvo",
        "nom": "S80 T6",
        "puissance": 272,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": false,
        "prix": 50500,
        "categorie": "routière"
    },
    {
        "marque": "Volvo",
        "nom": "S80 T6",
        "puissance": 272,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": false,
        "prix": 50500,
        "categorie": "routière"
    },
    {
        "marque": "Volvo",
        "nom": "S80 T6",
        "puissance": 272,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": true,
        "prix": 35350,
        "categorie": "routière"
    },
    {
        "marque": "Volvo",
        "nom": "S80 T6",
        "puissance": 272,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": true,
        "prix": 35350,
        "categorie": "routière"
    },
    {
        "marque": "Volvo",
        "nom": "S80 T6",
        "puissance": 272,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": false,
        "prix": 50500,
        "categorie": "routière"
    },
    {
        "marque": "Volvo",
        "nom": "S80 T6",
        "puissance": 272,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": false,
        "prix": 50500,
        "categorie": "routière"
    },
    {
        "marque": "Volvo",
        "nom": "S80 T6",
        "puissance": 272,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": true,
        "prix": 35350,
        "categorie": "routière"
    },
    {
        "marque": "Volvo",
        "nom": "S80 T6",
        "puissance": 272,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": true,
        "prix": 35350,
        "categorie": "routière"
    },
    {
        "marque": "Volvo",
        "nom": "S80 T6",
        "puissance": 272,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": true,
        "prix": 35350,
        "categorie": "routière"
    },
    {
        "marque": "Volkswagen",
        "nom": "Touran 2.0 FSI",
        "puissance": 150,
        "longueur": "longue",
        "nbPlaces": 7,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": false,
        "prix": 27340,
        "categorie": "monospace"
    },
    {
        "marque": "Volkswagen",
        "nom": "Touran 2.0 FSI",
        "puissance": 150,
        "longueur": "longue",
        "nbPlaces": 7,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": true,
        "prix": 19138,
        "categorie": "monospace"
    },
    {
        "marque": "Volkswagen",
        "nom": "Touran 2.0 FSI",
        "puissance": 150,
        "longueur": "longue",
        "nbPlaces": 7,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": true,
        "prix": 19138,
        "categorie": "monospace"
    },
    {
        "marque": "Volkswagen",
        "nom": "Touran 2.0 FSI",
        "puissance": 150,
        "longueur": "longue",
        "nbPlaces": 7,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": false,
        "prix": 27340,
        "categorie": "monospace"
    },
    {
        "marque": "Volkswagen",
        "nom": "Touran 2.0 FSI",
        "puissance": 150,
        "longueur": "longue",
        "nbPlaces": 7,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": false,
        "prix": 27340,
        "categorie": "monospace"
    },
    {
        "marque": "Volkswagen",
        "nom": "Touran 2.0 FSI",
        "puissance": 150,
        "longueur": "longue",
        "nbPlaces": 7,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": true,
        "prix": 19138,
        "categorie": "monospace"
    },
    {
        "marque": "Volkswagen",
        "nom": "Touran 2.0 FSI",
        "puissance": 150,
        "longueur": "longue",
        "nbPlaces": 7,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": true,
        "prix": 19138,
        "categorie": "monospace"
    },
    {
        "marque": "Volkswagen",
        "nom": "Touran 2.0 FSI",
        "puissance": 150,
        "longueur": "longue",
        "nbPlaces": 7,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": true,
        "prix": 19138,
        "categorie": "monospace"
    },
    {
        "marque": "Volkswagen",
        "nom": "Touran 2.0 FSI",
        "puissance": 150,
        "longueur": "longue",
        "nbPlaces": 7,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": false,
        "prix": 27340,
        "categorie": "monospace"
    },
    {
        "marque": "Volkswagen",
        "nom": "Touran 2.0 FSI",
        "puissance": 150,
        "longueur": "longue",
        "nbPlaces": 7,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": false,
        "prix": 27340,
        "categorie": "monospace"
    },
    {
        "marque": "Volkswagen",
        "nom": "Polo 1.2 6V",
        "puissance": 55,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 3,
        "couleur": "blanc",
        "occasion": true,
        "prix": 8540,
        "categorie": "citadine"
    },
    {
        "marque": "Volkswagen",
        "nom": "Polo 1.2 6V",
        "puissance": 55,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 3,
        "couleur": "blanc",
        "occasion": false,
        "prix": 12200,
        "categorie": "citadine"
    },
    {
        "marque": "Volkswagen",
        "nom": "Polo 1.2 6V",
        "puissance": 55,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 3,
        "couleur": "noir",
        "occasion": false,
        "prix": 12200,
        "categorie": "citadine"
    },
    {
        "marque": "Volkswagen",
        "nom": "Polo 1.2 6V",
        "puissance": 55,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 3,
        "couleur": "noir",
        "occasion": true,
        "prix": 8540,
        "categorie": "citadine"
    },
    {
        "marque": "Volkswagen",
        "nom": "Polo 1.2 6V",
        "puissance": 55,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 3,
        "couleur": "bleu",
        "occasion": true,
        "prix": 8540,
        "categorie": "citadine"
    },
    {
        "marque": "Volkswagen",
        "nom": "Polo 1.2 6V",
        "puissance": 55,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 3,
        "couleur": "bleu",
        "occasion": false,
        "prix": 12200,
        "categorie": "citadine"
    },
    {
        "marque": "Volkswagen",
        "nom": "Polo 1.2 6V",
        "puissance": 55,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 3,
        "couleur": "rouge",
        "occasion": true,
        "prix": 8540,
        "categorie": "citadine"
    },
    {
        "marque": "Volkswagen",
        "nom": "Polo 1.2 6V",
        "puissance": 55,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 3,
        "couleur": "rouge",
        "occasion": false,
        "prix": 12200,
        "categorie": "citadine"
    },
    {
        "marque": "Volkswagen",
        "nom": "Polo 1.2 6V",
        "puissance": 55,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 3,
        "couleur": "gris",
        "occasion": false,
        "prix": 12200,
        "categorie": "citadine"
    },
    {
        "marque": "Volkswagen",
        "nom": "Polo 1.2 6V",
        "puissance": 55,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 3,
        "couleur": "gris",
        "occasion": true,
        "prix": 8540,
        "categorie": "citadine"
    },
    {
        "marque": "Volkswagen",
        "nom": "New Beatle 1.8",
        "puissance": 110,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": true,
        "prix": 18641,
        "categorie": "coupé"
    },
    {
        "marque": "Volkswagen",
        "nom": "New Beatle 1.8",
        "puissance": 110,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": true,
        "prix": 18641,
        "categorie": "coupé"
    },
    {
        "marque": "Volkswagen",
        "nom": "New Beatle 1.8",
        "puissance": 110,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": true,
        "prix": 18641,
        "categorie": "coupé"
    },
    {
        "marque": "Volkswagen",
        "nom": "New Beatle 1.8",
        "puissance": 110,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": true,
        "prix": 18641,
        "categorie": "coupé"
    },
    {
        "marque": "Volkswagen",
        "nom": "New Beatle 1.8",
        "puissance": 110,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": true,
        "prix": 18641,
        "categorie": "coupé"
    },
    {
        "marque": "Volkswagen",
        "nom": "New Beatle 1.8",
        "puissance": 110,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": false,
        "prix": 26630,
        "categorie": "coupé"
    },
    {
        "marque": "Volkswagen",
        "nom": "New Beatle 1.8",
        "puissance": 110,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": false,
        "prix": 26630,
        "categorie": "coupé"
    },
    {
        "marque": "Volkswagen",
        "nom": "New Beatle 1.8",
        "puissance": 110,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": false,
        "prix": 26630,
        "categorie": "coupé"
    },
    {
        "marque": "Volkswagen",
        "nom": "New Beatle 1.8",
        "puissance": 110,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": false,
        "prix": 26630,
        "categorie": "coupé"
    },
    {
        "marque": "Volkswagen",
        "nom": "New Beatle 1.8",
        "puissance": 110,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": false,
        "prix": 26630,
        "categorie": "coupé"
    },
    {
        "marque": "Volkswagen",
        "nom": "Golf 2.0 FSI",
        "puissance": 150,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": true,
        "prix": 16029,
        "categorie": "compacte"
    },
    {
        "marque": "Volkswagen",
        "nom": "Golf 2.0 FSI",
        "puissance": 150,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": true,
        "prix": 16029,
        "categorie": "compacte"
    },
    {
        "marque": "Volkswagen",
        "nom": "Golf 2.0 FSI",
        "puissance": 150,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": true,
        "prix": 16029,
        "categorie": "compacte"
    },
    {
        "marque": "Volkswagen",
        "nom": "Golf 2.0 FSI",
        "puissance": 150,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": true,
        "prix": 16029,
        "categorie": "compacte"
    },
    {
        "marque": "Volkswagen",
        "nom": "Golf 2.0 FSI",
        "puissance": 150,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": true,
        "prix": 16029,
        "categorie": "compacte"
    },
    {
        "marque": "Volkswagen",
        "nom": "Golf 2.0 FSI",
        "puissance": 150,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": false,
        "prix": 22900,
        "categorie": "compacte"
    },
    {
        "marque": "Volkswagen",
        "nom": "Golf 2.0 FSI",
        "puissance": 150,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": false,
        "prix": 22900,
        "categorie": "compacte"
    },
    {
        "marque": "Volkswagen",
        "nom": "Golf 2.0 FSI",
        "puissance": 150,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": false,
        "prix": 22900,
        "categorie": "compacte"
    },
    {
        "marque": "Volkswagen",
        "nom": "Golf 2.0 FSI",
        "puissance": 150,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": false,
        "prix": 22900,
        "categorie": "compacte"
    },
    {
        "marque": "Volkswagen",
        "nom": "Golf 2.0 FSI",
        "puissance": 150,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": false,
        "prix": 22900,
        "categorie": "compacte"
    },
    {
        "marque": "Skoda",
        "nom": "Superb 2.8 V6",
        "puissance": 193,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": false,
        "prix": 31790,
        "categorie": "routière"
    },
    {
        "marque": "Skoda",
        "nom": "Superb 2.8 V6",
        "puissance": 193,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": false,
        "prix": 31790,
        "categorie": "routière"
    },
    {
        "marque": "Skoda",
        "nom": "Superb 2.8 V6",
        "puissance": 193,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": false,
        "prix": 31790,
        "categorie": "routière"
    },
    {
        "marque": "Skoda",
        "nom": "Superb 2.8 V6",
        "puissance": 193,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": false,
        "prix": 31790,
        "categorie": "routière"
    },
    {
        "marque": "Skoda",
        "nom": "Superb 2.8 V6",
        "puissance": 193,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": false,
        "prix": 31790,
        "categorie": "routière"
    },
    {
        "marque": "Seat",
        "nom": "Toledo 1.6",
        "puissance": 102,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": false,
        "prix": 18880,
        "categorie": "compacte"
    },
    {
        "marque": "Seat",
        "nom": "Toledo 1.6",
        "puissance": 102,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": false,
        "prix": 18880,
        "categorie": "compacte"
    },
    {
        "marque": "Seat",
        "nom": "Toledo 1.6",
        "puissance": 102,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": false,
        "prix": 18880,
        "categorie": "compacte"
    },
    {
        "marque": "Seat",
        "nom": "Toledo 1.6",
        "puissance": 102,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": false,
        "prix": 18880,
        "categorie": "compacte"
    },
    {
        "marque": "Seat",
        "nom": "Toledo 1.6",
        "puissance": 102,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": false,
        "prix": 18880,
        "categorie": "compacte"
    },
    {
        "marque": "Saab",
        "nom": "9.3 1.8T",
        "puissance": 150,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": true,
        "prix": 27020,
        "categorie": "familiale"
    },
    {
        "marque": "Saab",
        "nom": "9.3 1.8T",
        "puissance": 150,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": true,
        "prix": 27020,
        "categorie": "familiale"
    },
    {
        "marque": "Saab",
        "nom": "9.3 1.8T",
        "puissance": 150,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": true,
        "prix": 27020,
        "categorie": "familiale"
    },
    {
        "marque": "Saab",
        "nom": "9.3 1.8T",
        "puissance": 150,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": true,
        "prix": 27020,
        "categorie": "familiale"
    },
    {
        "marque": "Saab",
        "nom": "9.3 1.8T",
        "puissance": 150,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": true,
        "prix": 27020,
        "categorie": "familiale"
    },
    {
        "marque": "Saab",
        "nom": "9.3 1.8T",
        "puissance": 150,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": false,
        "prix": 38600,
        "categorie": "familiale"
    },
    {
        "marque": "Saab",
        "nom": "9.3 1.8T",
        "puissance": 150,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": false,
        "prix": 38600,
        "categorie": "familiale"
    },
    {
        "marque": "Saab",
        "nom": "9.3 1.8T",
        "puissance": 150,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": false,
        "prix": 38600,
        "categorie": "familiale"
    },
    {
        "marque": "Saab",
        "nom": "9.3 1.8T",
        "puissance": 150,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": false,
        "prix": 38600,
        "categorie": "familiale"
    },
    {
        "marque": "Saab",
        "nom": "9.3 1.8T",
        "puissance": 150,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": false,
        "prix": 38600,
        "categorie": "familiale"
    },
    {
        "marque": "Renault",
        "nom": "Vel Satis 3.5 V6",
        "puissance": 245,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": true,
        "prix": 34440,
        "categorie": "routière"
    },
    {
        "marque": "Renault",
        "nom": "Vel Satis 3.5 V6",
        "puissance": 245,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": true,
        "prix": 34440,
        "categorie": "routière"
    },
    {
        "marque": "Renault",
        "nom": "Vel Satis 3.5 V6",
        "puissance": 245,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": true,
        "prix": 34440,
        "categorie": "routière"
    },
    {
        "marque": "Renault",
        "nom": "Vel Satis 3.5 V6",
        "puissance": 245,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": true,
        "prix": 34440,
        "categorie": "routière"
    },
    {
        "marque": "Renault",
        "nom": "Vel Satis 3.5 V6",
        "puissance": 245,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": true,
        "prix": 34440,
        "categorie": "routière"
    },
    {
        "marque": "Renault",
        "nom": "Vel Satis 3.5 V6",
        "puissance": 245,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": false,
        "prix": 49200,
        "categorie": "routière"
    },
    {
        "marque": "Renault",
        "nom": "Vel Satis 3.5 V6",
        "puissance": 245,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": false,
        "prix": 49200,
        "categorie": "routière"
    },
    {
        "marque": "Renault",
        "nom": "Vel Satis 3.5 V6",
        "puissance": 245,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": false,
        "prix": 49200,
        "categorie": "routière"
    },
    {
        "marque": "Renault",
        "nom": "Vel Satis 3.5 V6",
        "puissance": 245,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": false,
        "prix": 49200,
        "categorie": "routière"
    },
    {
        "marque": "Renault",
        "nom": "Vel Satis 3.5 V6",
        "puissance": 245,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": false,
        "prix": 49200,
        "categorie": "routière"
    },
    {
        "marque": "Renault",
        "nom": "Megane 2.0 16V",
        "puissance": 135,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": true,
        "prix": 15644,
        "categorie": "compacte"
    },
    {
        "marque": "Renault",
        "nom": "Megane 2.0 16V",
        "puissance": 135,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": true,
        "prix": 15644,
        "categorie": "compacte"
    },
    {
        "marque": "Renault",
        "nom": "Megane 2.0 16V",
        "puissance": 135,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": true,
        "prix": 15644,
        "categorie": "compacte"
    },
    {
        "marque": "Renault",
        "nom": "Megane 2.0 16V",
        "puissance": 135,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": true,
        "prix": 15644,
        "categorie": "compacte"
    },
    {
        "marque": "Renault",
        "nom": "Megane 2.0 16V",
        "puissance": 135,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": true,
        "prix": 15644,
        "categorie": "compacte"
    },
    {
        "marque": "Renault",
        "nom": "Megane 2.0 16V",
        "puissance": 135,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": false,
        "prix": 22350,
        "categorie": "compacte"
    },
    {
        "marque": "Renault",
        "nom": "Megane 2.0 16V",
        "puissance": 135,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": false,
        "prix": 22350,
        "categorie": "compacte"
    },
    {
        "marque": "Renault",
        "nom": "Megane 2.0 16V",
        "puissance": 135,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": false,
        "prix": 22350,
        "categorie": "compacte"
    },
    {
        "marque": "Renault",
        "nom": "Megane 2.0 16V",
        "puissance": 135,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": false,
        "prix": 22350,
        "categorie": "compacte"
    },
    {
        "marque": "Renault",
        "nom": "Megane 2.0 16V",
        "puissance": 135,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": false,
        "prix": 22350,
        "categorie": "compacte"
    },
    {
        "marque": "Renault",
        "nom": "Laguna 2.0T",
        "puissance": 170,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": true,
        "prix": 19110,
        "categorie": "familiale"
    },
    {
        "marque": "Renault",
        "nom": "Laguna 2.0T",
        "puissance": 170,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": true,
        "prix": 19110,
        "categorie": "familiale"
    },
    {
        "marque": "Renault",
        "nom": "Laguna 2.0T",
        "puissance": 170,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": true,
        "prix": 19110,
        "categorie": "familiale"
    },
    {
        "marque": "Renault",
        "nom": "Laguna 2.0T",
        "puissance": 170,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": true,
        "prix": 19110,
        "categorie": "familiale"
    },
    {
        "marque": "Renault",
        "nom": "Laguna 2.0T",
        "puissance": 170,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": true,
        "prix": 19110,
        "categorie": "familiale"
    },
    {
        "marque": "Renault",
        "nom": "Laguna 2.0T",
        "puissance": 170,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": false,
        "prix": 27300,
        "categorie": "familiale"
    },
    {
        "marque": "Renault",
        "nom": "Laguna 2.0T",
        "puissance": 170,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": false,
        "prix": 27300,
        "categorie": "familiale"
    },
    {
        "marque": "Renault",
        "nom": "Laguna 2.0T",
        "puissance": 170,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": false,
        "prix": 27300,
        "categorie": "familiale"
    },
    {
        "marque": "Renault",
        "nom": "Laguna 2.0T",
        "puissance": 170,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": false,
        "prix": 27300,
        "categorie": "familiale"
    },
    {
        "marque": "Renault",
        "nom": "Laguna 2.0T",
        "puissance": 170,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": false,
        "prix": 27300,
        "categorie": "familiale"
    },
    {
        "marque": "Renault",
        "nom": "Espace 2.0T",
        "puissance": 165,
        "longueur": "longue",
        "nbPlaces": 7,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": true,
        "prix": 21245,
        "categorie": "monospace"
    },
    {
        "marque": "Renault",
        "nom": "Espace 2.0T",
        "puissance": 165,
        "longueur": "longue",
        "nbPlaces": 7,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": true,
        "prix": 21245,
        "categorie": "monospace"
    },
    {
        "marque": "Renault",
        "nom": "Espace 2.0T",
        "puissance": 165,
        "longueur": "longue",
        "nbPlaces": 7,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": true,
        "prix": 21245,
        "categorie": "monospace"
    },
    {
        "marque": "Renault",
        "nom": "Espace 2.0T",
        "puissance": 165,
        "longueur": "longue",
        "nbPlaces": 7,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": true,
        "prix": 21245,
        "categorie": "monospace"
    },
    {
        "marque": "Renault",
        "nom": "Espace 2.0T",
        "puissance": 165,
        "longueur": "longue",
        "nbPlaces": 7,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": true,
        "prix": 21245,
        "categorie": "monospace"
    },
    {
        "marque": "Renault",
        "nom": "Espace 2.0T",
        "puissance": 165,
        "longueur": "longue",
        "nbPlaces": 7,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": false,
        "prix": 30350,
        "categorie": "monospace"
    },
    {
        "marque": "Renault",
        "nom": "Espace 2.0T",
        "puissance": 165,
        "longueur": "longue",
        "nbPlaces": 7,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": false,
        "prix": 30350,
        "categorie": "monospace"
    },
    {
        "marque": "Renault",
        "nom": "Espace 2.0T",
        "puissance": 165,
        "longueur": "longue",
        "nbPlaces": 7,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": false,
        "prix": 30350,
        "categorie": "monospace"
    },
    {
        "marque": "Renault",
        "nom": "Espace 2.0T",
        "puissance": 165,
        "longueur": "longue",
        "nbPlaces": 7,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": false,
        "prix": 30350,
        "categorie": "monospace"
    },
    {
        "marque": "Renault",
        "nom": "Espace 2.0T",
        "puissance": 165,
        "longueur": "longue",
        "nbPlaces": 7,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": false,
        "prix": 30350,
        "categorie": "monospace"
    },
    {
        "marque": "Peugeot",
        "nom": "1007 1.4",
        "puissance": 75,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": true,
        "prix": 9625,
        "categorie": "minispace"
    },
    {
        "marque": "Peugeot",
        "nom": "1007 1.4",
        "puissance": 75,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": false,
        "prix": 13750,
        "categorie": "minispace"
    },
    {
        "marque": "Peugeot",
        "nom": "1007 1.4",
        "puissance": 75,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": false,
        "prix": 13750,
        "categorie": "minispace"
    },
    {
        "marque": "Peugeot",
        "nom": "1007 1.4",
        "puissance": 75,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": true,
        "prix": 9625,
        "categorie": "minispace"
    },
    {
        "marque": "Peugeot",
        "nom": "1007 1.4",
        "puissance": 75,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": false,
        "prix": 13750,
        "categorie": "minispace"
    },
    {
        "marque": "Peugeot",
        "nom": "1007 1.4",
        "puissance": 75,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": true,
        "prix": 9625,
        "categorie": "minispace"
    },
    {
        "marque": "Peugeot",
        "nom": "1007 1.4",
        "puissance": 75,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": false,
        "prix": 13750,
        "categorie": "minispace"
    },
    {
        "marque": "Peugeot",
        "nom": "1007 1.4",
        "puissance": 75,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": true,
        "prix": 9625,
        "categorie": "minispace"
    },
    {
        "marque": "Peugeot",
        "nom": "1007 1.4",
        "puissance": 75,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": true,
        "prix": 9625,
        "categorie": "minispace"
    },
    {
        "marque": "Peugeot",
        "nom": "1007 1.4",
        "puissance": 75,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": false,
        "prix": 13750,
        "categorie": "minispace"
    },
    {
        "marque": "Nissan",
        "nom": "Primera 1.6",
        "puissance": 109,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": false,
        "prix": 18650,
        "categorie": "familiale"
    },
    {
        "marque": "Nissan",
        "nom": "Primera 1.6",
        "puissance": 109,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": false,
        "prix": 18650,
        "categorie": "familiale"
    },
    {
        "marque": "Nissan",
        "nom": "Primera 1.6",
        "puissance": 109,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": false,
        "prix": 18650,
        "categorie": "familiale"
    },
    {
        "marque": "Nissan",
        "nom": "Primera 1.6",
        "puissance": 109,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": false,
        "prix": 18650,
        "categorie": "familiale"
    },
    {
        "marque": "Nissan",
        "nom": "Primera 1.6",
        "puissance": 109,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": false,
        "prix": 18650,
        "categorie": "familiale"
    },
    {
        "marque": "Nissan",
        "nom": "Maxima 3.0 V6",
        "puissance": 200,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": false,
        "prix": 30000,
        "categorie": "routière"
    },
    {
        "marque": "Nissan",
        "nom": "Maxima 3.0 V6",
        "puissance": 200,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": false,
        "prix": 30000,
        "categorie": "routière"
    },
    {
        "marque": "Nissan",
        "nom": "Maxima 3.0 V6",
        "puissance": 200,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": false,
        "prix": 30000,
        "categorie": "routière"
    },
    {
        "marque": "Nissan",
        "nom": "Maxima 3.0 V6",
        "puissance": 200,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": false,
        "prix": 30000,
        "categorie": "routière"
    },
    {
        "marque": "Nissan",
        "nom": "Maxima 3.0 V6",
        "puissance": 200,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": false,
        "prix": 30000,
        "categorie": "routière"
    },
    {
        "marque": "Nissan",
        "nom": "Almera 1.8",
        "puissance": 115,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": false,
        "prix": 16450,
        "categorie": "compacte"
    },
    {
        "marque": "Nissan",
        "nom": "Almera 1.8",
        "puissance": 115,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": false,
        "prix": 16450,
        "categorie": "compacte"
    },
    {
        "marque": "Nissan",
        "nom": "Almera 1.8",
        "puissance": 115,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": false,
        "prix": 16450,
        "categorie": "compacte"
    },
    {
        "marque": "Nissan",
        "nom": "Almera 1.8",
        "puissance": 115,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": false,
        "prix": 16450,
        "categorie": "compacte"
    },
    {
        "marque": "Nissan",
        "nom": "Almera 1.8",
        "puissance": 115,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": false,
        "prix": 16450,
        "categorie": "compacte"
    },
    {
        "marque": "Mini",
        "nom": "Copper 1.6 16V",
        "puissance": 115,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": true,
        "prix": 12740,
        "categorie": "citadine"
    },
    {
        "marque": "Mini",
        "nom": "Copper 1.6 16V",
        "puissance": 115,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": true,
        "prix": 12740,
        "categorie": "citadine"
    },
    {
        "marque": "Mini",
        "nom": "Copper 1.6 16V",
        "puissance": 115,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": true,
        "prix": 12740,
        "categorie": "citadine"
    },
    {
        "marque": "Mini",
        "nom": "Copper 1.6 16V",
        "puissance": 115,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": true,
        "prix": 12740,
        "categorie": "citadine"
    },
    {
        "marque": "Mini",
        "nom": "Copper 1.6 16V",
        "puissance": 115,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": true,
        "prix": 12740,
        "categorie": "citadine"
    },
    {
        "marque": "Mini",
        "nom": "Copper 1.6 16V",
        "puissance": 115,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": false,
        "prix": 18200,
        "categorie": "citadine"
    },
    {
        "marque": "Mini",
        "nom": "Copper 1.6 16V",
        "puissance": 115,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": false,
        "prix": 18200,
        "categorie": "citadine"
    },
    {
        "marque": "Mini",
        "nom": "Copper 1.6 16V",
        "puissance": 115,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": false,
        "prix": 18200,
        "categorie": "citadine"
    },
    {
        "marque": "Mini",
        "nom": "Copper 1.6 16V",
        "puissance": 115,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": false,
        "prix": 18200,
        "categorie": "citadine"
    },
    {
        "marque": "Mini",
        "nom": "Copper 1.6 16V",
        "puissance": 115,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": false,
        "prix": 18200,
        "categorie": "citadine"
    },
    {
        "marque": "Mercedes",
        "nom": "S500",
        "puissance": 306,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": true,
        "prix": 70910,
        "categorie": "berline"
    },
    {
        "marque": "Mercedes",
        "nom": "S500",
        "puissance": 306,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": true,
        "prix": 70910,
        "categorie": "berline"
    },
    {
        "marque": "Mercedes",
        "nom": "S500",
        "puissance": 306,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": true,
        "prix": 70910,
        "categorie": "berline"
    },
    {
        "marque": "Mercedes",
        "nom": "S500",
        "puissance": 306,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": true,
        "prix": 70910,
        "categorie": "berline"
    },
    {
        "marque": "Mercedes",
        "nom": "S500",
        "puissance": 306,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": false,
        "prix": 101300,
        "categorie": "berline"
    },
    {
        "marque": "Mercedes",
        "nom": "S500",
        "puissance": 306,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": true,
        "prix": 70910,
        "categorie": "berline"
    },
    {
        "marque": "Mercedes",
        "nom": "S500",
        "puissance": 306,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": false,
        "prix": 101300,
        "categorie": "berline"
    },
    {
        "marque": "Mercedes",
        "nom": "S500",
        "puissance": 306,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": false,
        "prix": 101300,
        "categorie": "berline"
    },
    {
        "marque": "Mercedes",
        "nom": "S500",
        "puissance": 306,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": false,
        "prix": 101300,
        "categorie": "berline"
    },
    {
        "marque": "Mercedes",
        "nom": "S500",
        "puissance": 306,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": false,
        "prix": 101300,
        "categorie": "berline"
    },
    {
        "marque": "Mercedes",
        "nom": "A200",
        "puissance": 136,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": false,
        "prix": 25900,
        "categorie": "polyvalente"
    },
    {
        "marque": "Mercedes",
        "nom": "A200",
        "puissance": 136,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": false,
        "prix": 25900,
        "categorie": "polyvalente"
    },
    {
        "marque": "Mercedes",
        "nom": "A200",
        "puissance": 136,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": true,
        "prix": 18130,
        "categorie": "polyvalente"
    },
    {
        "marque": "Mercedes",
        "nom": "A200",
        "puissance": 136,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": true,
        "prix": 18130,
        "categorie": "polyvalente"
    },
    {
        "marque": "Mercedes",
        "nom": "A200",
        "puissance": 136,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": true,
        "prix": 18130,
        "categorie": "polyvalente"
    },
    {
        "marque": "Mercedes",
        "nom": "A200",
        "puissance": 136,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": false,
        "prix": 25900,
        "categorie": "polyvalente"
    },
    {
        "marque": "Mercedes",
        "nom": "A200",
        "puissance": 136,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": true,
        "prix": 18130,
        "categorie": "polyvalente"
    },
    {
        "marque": "Mercedes",
        "nom": "A200",
        "puissance": 136,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": true,
        "prix": 18130,
        "categorie": "polyvalente"
    },
    {
        "marque": "Mercedes",
        "nom": "A200",
        "puissance": 136,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": false,
        "prix": 25900,
        "categorie": "polyvalente"
    },
    {
        "marque": "Mercedes",
        "nom": "A200",
        "puissance": 136,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": false,
        "prix": 25900,
        "categorie": "polyvalente"
    },
    {
        "marque": "Lancia",
        "nom": "Ypsilon 1.4 16V",
        "puissance": 90,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 3,
        "couleur": "rouge",
        "occasion": false,
        "prix": 13500,
        "categorie": "citadine"
    },
    {
        "marque": "Lancia",
        "nom": "Ypsilon 1.4 16V",
        "puissance": 90,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 3,
        "couleur": "bleu",
        "occasion": true,
        "prix": 9450,
        "categorie": "citadine"
    },
    {
        "marque": "Lancia",
        "nom": "Ypsilon 1.4 16V",
        "puissance": 90,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 3,
        "couleur": "gris",
        "occasion": false,
        "prix": 13500,
        "categorie": "citadine"
    },
    {
        "marque": "Lancia",
        "nom": "Ypsilon 1.4 16V",
        "puissance": 90,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 3,
        "couleur": "bleu",
        "occasion": false,
        "prix": 13500,
        "categorie": "citadine"
    },
    {
        "marque": "Lancia",
        "nom": "Ypsilon 1.4 16V",
        "puissance": 90,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 3,
        "couleur": "noir",
        "occasion": false,
        "prix": 13500,
        "categorie": "citadine"
    },
    {
        "marque": "Lancia",
        "nom": "Ypsilon 1.4 16V",
        "puissance": 90,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 3,
        "couleur": "rouge",
        "occasion": true,
        "prix": 9450,
        "categorie": "citadine"
    },
    {
        "marque": "Lancia",
        "nom": "Ypsilon 1.4 16V",
        "puissance": 90,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 3,
        "couleur": "gris",
        "occasion": true,
        "prix": 9450,
        "categorie": "citadine"
    },
    {
        "marque": "Lancia",
        "nom": "Ypsilon 1.4 16V",
        "puissance": 90,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 3,
        "couleur": "blanc",
        "occasion": false,
        "prix": 13500,
        "categorie": "citadine"
    },
    {
        "marque": "Lancia",
        "nom": "Ypsilon 1.4 16V",
        "puissance": 90,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 3,
        "couleur": "blanc",
        "occasion": true,
        "prix": 9450,
        "categorie": "citadine"
    },
    {
        "marque": "Lancia",
        "nom": "Ypsilon 1.4 16V",
        "puissance": 90,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 3,
        "couleur": "noir",
        "occasion": true,
        "prix": 9450,
        "categorie": "citadine"
    },
    {
        "marque": "Kia",
        "nom": "Picanto 1.1",
        "puissance": 65,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": false,
        "prix": 8990,
        "categorie": "citadine"
    },
    {
        "marque": "Kia",
        "nom": "Picanto 1.1",
        "puissance": 65,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": false,
        "prix": 8990,
        "categorie": "citadine"
    },
    {
        "marque": "Kia",
        "nom": "Picanto 1.1",
        "puissance": 65,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": false,
        "prix": 8990,
        "categorie": "citadine"
    },
    {
        "marque": "Kia",
        "nom": "Picanto 1.1",
        "puissance": 65,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": false,
        "prix": 8990,
        "categorie": "citadine"
    },
    {
        "marque": "Kia",
        "nom": "Picanto 1.1",
        "puissance": 65,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": false,
        "prix": 8990,
        "categorie": "citadine"
    },
    {
        "marque": "Jaguar",
        "nom": "X-Type 2.5 V6",
        "puissance": 197,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": false,
        "prix": 37100,
        "categorie": "berline"
    },
    {
        "marque": "Jaguar",
        "nom": "X-Type 2.5 V6",
        "puissance": 197,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": true,
        "prix": 25970,
        "categorie": "berline"
    },
    {
        "marque": "Jaguar",
        "nom": "X-Type 2.5 V6",
        "puissance": 197,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": true,
        "prix": 25970,
        "categorie": "berline"
    },
    {
        "marque": "Jaguar",
        "nom": "X-Type 2.5 V6",
        "puissance": 197,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": false,
        "prix": 37100,
        "categorie": "berline"
    },
    {
        "marque": "Jaguar",
        "nom": "X-Type 2.5 V6",
        "puissance": 197,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": true,
        "prix": 25970,
        "categorie": "berline"
    },
    {
        "marque": "Jaguar",
        "nom": "X-Type 2.5 V6",
        "puissance": 197,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": true,
        "prix": 25970,
        "categorie": "berline"
    },
    {
        "marque": "Jaguar",
        "nom": "X-Type 2.5 V6",
        "puissance": 197,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": true,
        "prix": 25970,
        "categorie": "berline"
    },
    {
        "marque": "Jaguar",
        "nom": "X-Type 2.5 V6",
        "puissance": 197,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": false,
        "prix": 37100,
        "categorie": "berline"
    },
    {
        "marque": "Jaguar",
        "nom": "X-Type 2.5 V6",
        "puissance": 197,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": false,
        "prix": 37100,
        "categorie": "berline"
    },
    {
        "marque": "Jaguar",
        "nom": "X-Type 2.5 V6",
        "puissance": 197,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": false,
        "prix": 37100,
        "categorie": "berline"
    },
    {
        "marque": "Hyundai",
        "nom": "Matrix 1.6",
        "puissance": 103,
        "longueur": "longue",
        "nbPlaces": 7,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": false,
        "prix": 15960,
        "categorie": "monospace"
    },
    {
        "marque": "Hyundai",
        "nom": "Matrix 1.6",
        "puissance": 103,
        "longueur": "longue",
        "nbPlaces": 7,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": false,
        "prix": 15960,
        "categorie": "monospace"
    },
    {
        "marque": "Hyundai",
        "nom": "Matrix 1.6",
        "puissance": 103,
        "longueur": "longue",
        "nbPlaces": 7,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": false,
        "prix": 15960,
        "categorie": "monospace"
    },
    {
        "marque": "Hyundai",
        "nom": "Matrix 1.6",
        "puissance": 103,
        "longueur": "longue",
        "nbPlaces": 7,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": false,
        "prix": 15960,
        "categorie": "monospace"
    },
    {
        "marque": "Hyundai",
        "nom": "Matrix 1.6",
        "puissance": 103,
        "longueur": "longue",
        "nbPlaces": 7,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": false,
        "prix": 15960,
        "categorie": "monospace"
    },
    {
        "marque": "Honda",
        "nom": "FR-V 1.7",
        "puissance": 125,
        "longueur": "longue",
        "nbPlaces": 7,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": false,
        "prix": 19550,
        "categorie": "monospace"
    },
    {
        "marque": "Honda",
        "nom": "FR-V 1.7",
        "puissance": 125,
        "longueur": "longue",
        "nbPlaces": 7,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": false,
        "prix": 19550,
        "categorie": "monospace"
    },
    {
        "marque": "Honda",
        "nom": "FR-V 1.7",
        "puissance": 125,
        "longueur": "longue",
        "nbPlaces": 7,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": false,
        "prix": 19550,
        "categorie": "monospace"
    },
    {
        "marque": "Honda",
        "nom": "FR-V 1.7",
        "puissance": 125,
        "longueur": "longue",
        "nbPlaces": 7,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": false,
        "prix": 19550,
        "categorie": "monospace"
    },
    {
        "marque": "Honda",
        "nom": "FR-V 1.7",
        "puissance": 125,
        "longueur": "longue",
        "nbPlaces": 7,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": false,
        "prix": 19550,
        "categorie": "monospace"
    },
    {
        "marque": "Ford",
        "nom": "Mondeo 1.8",
        "puissance": 125,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": true,
        "prix": 16730,
        "categorie": "familiale"
    },
    {
        "marque": "Ford",
        "nom": "Mondeo 1.8",
        "puissance": 125,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": true,
        "prix": 16730,
        "categorie": "familiale"
    },
    {
        "marque": "Ford",
        "nom": "Mondeo 1.8",
        "puissance": 125,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": true,
        "prix": 16730,
        "categorie": "familiale"
    },
    {
        "marque": "Ford",
        "nom": "Mondeo 1.8",
        "puissance": 125,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": true,
        "prix": 16730,
        "categorie": "familiale"
    },
    {
        "marque": "Ford",
        "nom": "Mondeo 1.8",
        "puissance": 125,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": true,
        "prix": 16730,
        "categorie": "familiale"
    },
    {
        "marque": "Ford",
        "nom": "Mondeo 1.8",
        "puissance": 125,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": false,
        "prix": 23900,
        "categorie": "familiale"
    },
    {
        "marque": "Ford",
        "nom": "Mondeo 1.8",
        "puissance": 125,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": false,
        "prix": 23900,
        "categorie": "familiale"
    },
    {
        "marque": "Ford",
        "nom": "Mondeo 1.8",
        "puissance": 125,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": false,
        "prix": 23900,
        "categorie": "familiale"
    },
    {
        "marque": "Ford",
        "nom": "Mondeo 1.8",
        "puissance": 125,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": false,
        "prix": 23900,
        "categorie": "familiale"
    },
    {
        "marque": "Ford",
        "nom": "Mondeo 1.8",
        "puissance": 125,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": false,
        "prix": 23900,
        "categorie": "familiale"
    },
    {
        "marque": "Fiat",
        "nom": "Croma 2.2",
        "puissance": 147,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": true,
        "prix": 17346,
        "categorie": "familiale"
    },
    {
        "marque": "Fiat",
        "nom": "Croma 2.2",
        "puissance": 147,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": true,
        "prix": 17346,
        "categorie": "familiale"
    },
    {
        "marque": "Fiat",
        "nom": "Croma 2.2",
        "puissance": 147,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": true,
        "prix": 17346,
        "categorie": "familiale"
    },
    {
        "marque": "Fiat",
        "nom": "Croma 2.2",
        "puissance": 147,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": true,
        "prix": 17346,
        "categorie": "familiale"
    },
    {
        "marque": "Fiat",
        "nom": "Croma 2.2",
        "puissance": 147,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": false,
        "prix": 24780,
        "categorie": "familiale"
    },
    {
        "marque": "Fiat",
        "nom": "Croma 2.2",
        "puissance": 147,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": false,
        "prix": 24780,
        "categorie": "familiale"
    },
    {
        "marque": "Fiat",
        "nom": "Croma 2.2",
        "puissance": 147,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": true,
        "prix": 17346,
        "categorie": "familiale"
    },
    {
        "marque": "Fiat",
        "nom": "Croma 2.2",
        "puissance": 147,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": false,
        "prix": 24780,
        "categorie": "familiale"
    },
    {
        "marque": "Fiat",
        "nom": "Croma 2.2",
        "puissance": 147,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": false,
        "prix": 24780,
        "categorie": "familiale"
    },
    {
        "marque": "Fiat",
        "nom": "Croma 2.2",
        "puissance": 147,
        "longueur": "longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": false,
        "prix": 24780,
        "categorie": "familiale"
    },
    {
        "marque": "Daihatsu",
        "nom": "Cuore 1.0",
        "puissance": 58,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 3,
        "couleur": "noir",
        "occasion": false,
        "prix": 8850,
        "categorie": "citadine"
    },
    {
        "marque": "Daihatsu",
        "nom": "Cuore 1.0",
        "puissance": 58,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 3,
        "couleur": "blanc",
        "occasion": false,
        "prix": 8850,
        "categorie": "citadine"
    },
    {
        "marque": "Daihatsu",
        "nom": "Cuore 1.0",
        "puissance": 58,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 3,
        "couleur": "rouge",
        "occasion": false,
        "prix": 8850,
        "categorie": "citadine"
    },
    {
        "marque": "Daihatsu",
        "nom": "Cuore 1.0",
        "puissance": 58,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 3,
        "couleur": "bleu",
        "occasion": false,
        "prix": 8850,
        "categorie": "citadine"
    },
    {
        "marque": "Daihatsu",
        "nom": "Cuore 1.0",
        "puissance": 58,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 3,
        "couleur": "gris",
        "occasion": false,
        "prix": 8850,
        "categorie": "citadine"
    },
    {
        "marque": "Dacia",
        "nom": "Logan 1.6 MPI",
        "puissance": 90,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": false,
        "prix": 7500,
        "categorie": "polyvalente"
    },
    {
        "marque": "Dacia",
        "nom": "Logan 1.6 MPI",
        "puissance": 90,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": false,
        "prix": 7500,
        "categorie": "polyvalente"
    },
    {
        "marque": "Dacia",
        "nom": "Logan 1.6 MPI",
        "puissance": 90,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": false,
        "prix": 7500,
        "categorie": "polyvalente"
    },
    {
        "marque": "Dacia",
        "nom": "Logan 1.6 MPI",
        "puissance": 90,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": false,
        "prix": 7500,
        "categorie": "polyvalente"
    },
    {
        "marque": "Dacia",
        "nom": "Logan 1.6 MPI",
        "puissance": 90,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": false,
        "prix": 7500,
        "categorie": "polyvalente"
    },
    {
        "marque": "BMW",
        "nom": "M5",
        "puissance": 507,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": true,
        "prix": 66360,
        "categorie": "routière"
    },
    {
        "marque": "BMW",
        "nom": "M5",
        "puissance": 507,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": false,
        "prix": 94800,
        "categorie": "routière"
    },
    {
        "marque": "BMW",
        "nom": "M5",
        "puissance": 507,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": false,
        "prix": 94800,
        "categorie": "routière"
    },
    {
        "marque": "BMW",
        "nom": "M5",
        "puissance": 507,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": false,
        "prix": 94800,
        "categorie": "routière"
    },
    {
        "marque": "BMW",
        "nom": "M5",
        "puissance": 507,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": true,
        "prix": 66360,
        "categorie": "routière"
    },
    {
        "marque": "BMW",
        "nom": "M5",
        "puissance": 507,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": true,
        "prix": 66360,
        "categorie": "routière"
    },
    {
        "marque": "BMW",
        "nom": "M5",
        "puissance": 507,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": false,
        "prix": 94800,
        "categorie": "routière"
    },
    {
        "marque": "BMW",
        "nom": "M5",
        "puissance": 507,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": true,
        "prix": 66360,
        "categorie": "routière"
    },
    {
        "marque": "BMW",
        "nom": "M5",
        "puissance": 507,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": false,
        "prix": 94800,
        "categorie": "routière"
    },
    {
        "marque": "BMW",
        "nom": "M5",
        "puissance": 507,
        "longueur": "très longue",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": true,
        "prix": 66360,
        "categorie": "routière"
    },
    {
        "marque": "BMW",
        "nom": "120i",
        "puissance": 150,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": true,
        "prix": 25060,
        "categorie": "compacte"
    },
    {
        "marque": "BMW",
        "nom": "120i",
        "puissance": 150,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": false,
        "prix": 35800,
        "categorie": "compacte"
    },
    {
        "marque": "BMW",
        "nom": "120i",
        "puissance": 150,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": false,
        "prix": 35800,
        "categorie": "compacte"
    },
    {
        "marque": "BMW",
        "nom": "120i",
        "puissance": 150,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": false,
        "prix": 35800,
        "categorie": "compacte"
    },
    {
        "marque": "BMW",
        "nom": "120i",
        "puissance": 150,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": false,
        "prix": 35800,
        "categorie": "compacte"
    },
    {
        "marque": "BMW",
        "nom": "120i",
        "puissance": 150,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": true,
        "prix": 25060,
        "categorie": "compacte"
    },
    {
        "marque": "BMW",
        "nom": "120i",
        "puissance": 150,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": true,
        "prix": 25060,
        "categorie": "compacte"
    },
    {
        "marque": "BMW",
        "nom": "120i",
        "puissance": 150,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": true,
        "prix": 25060,
        "categorie": "compacte"
    },
    {
        "marque": "BMW",
        "nom": "120i",
        "puissance": 150,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": true,
        "prix": 25060,
        "categorie": "compacte"
    },
    {
        "marque": "BMW",
        "nom": "120i",
        "puissance": 150,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": false,
        "prix": 35800,
        "categorie": "compacte"
    },
    {
        "marque": "Audi",
        "nom": "A3 2.0 FSI",
        "puissance": 150,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": true,
        "prix": 19950,
        "categorie": "compacte"
    },
    {
        "marque": "Audi",
        "nom": "A3 2.0 FSI",
        "puissance": 150,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": false,
        "prix": 28500,
        "categorie": "compacte"
    },
    {
        "marque": "Audi",
        "nom": "A3 2.0 FSI",
        "puissance": 150,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": false,
        "prix": 28500,
        "categorie": "compacte"
    },
    {
        "marque": "Audi",
        "nom": "A3 2.0 FSI",
        "puissance": 150,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": true,
        "prix": 19950,
        "categorie": "compacte"
    },
    {
        "marque": "Audi",
        "nom": "A3 2.0 FSI",
        "puissance": 150,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": false,
        "prix": 28500,
        "categorie": "compacte"
    },
    {
        "marque": "Audi",
        "nom": "A3 2.0 FSI",
        "puissance": 150,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": true,
        "prix": 19950,
        "categorie": "compacte"
    },
    {
        "marque": "Audi",
        "nom": "A3 2.0 FSI",
        "puissance": 150,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": true,
        "prix": 19950,
        "categorie": "compacte"
    },
    {
        "marque": "Audi",
        "nom": "A3 2.0 FSI",
        "puissance": 150,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": false,
        "prix": 28500,
        "categorie": "compacte"
    },
    {
        "marque": "Audi",
        "nom": "A3 2.0 FSI",
        "puissance": 150,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": false,
        "prix": 28500,
        "categorie": "compacte"
    },
    {
        "marque": "Audi",
        "nom": "A3 2.0 FSI",
        "puissance": 150,
        "longueur": "moyenne",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": true,
        "prix": 19950,
        "categorie": "compacte"
    },
    {
        "marque": "Audi",
        "nom": "A2 1.4",
        "puissance": 75,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": true,
        "prix": 12817,
        "categorie": "minispace"
    },
    {
        "marque": "Audi",
        "nom": "A2 1.4",
        "puissance": 75,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": false,
        "prix": 18310,
        "categorie": "minispace"
    },
    {
        "marque": "Audi",
        "nom": "A2 1.4",
        "puissance": 75,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": false,
        "prix": 18310,
        "categorie": "minispace"
    },
    {
        "marque": "Audi",
        "nom": "A2 1.4",
        "puissance": 75,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "bleu",
        "occasion": true,
        "prix": 12817,
        "categorie": "minispace"
    },
    {
        "marque": "Audi",
        "nom": "A2 1.4",
        "puissance": 75,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "gris",
        "occasion": true,
        "prix": 12817,
        "categorie": "minispace"
    },
    {
        "marque": "Audi",
        "nom": "A2 1.4",
        "puissance": 75,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "noir",
        "occasion": false,
        "prix": 18310,
        "categorie": "minispace"
    },
    {
        "marque": "Audi",
        "nom": "A2 1.4",
        "puissance": 75,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": false,
        "prix": 18310,
        "categorie": "minispace"
    },
    {
        "marque": "Audi",
        "nom": "A2 1.4",
        "puissance": 75,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": true,
        "prix": 12817,
        "categorie": "minispace"
    },
    {
        "marque": "Audi",
        "nom": "A2 1.4",
        "puissance": 75,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "rouge",
        "occasion": true,
        "prix": 12817,
        "categorie": "minispace"
    },
    {
        "marque": "Audi",
        "nom": "A2 1.4",
        "puissance": 75,
        "longueur": "courte",
        "nbPlaces": 5,
        "nbPortes": 5,
        "couleur": "blanc",
        "occasion": false,
        "prix": 18310,
        "categorie": "minispace"
    }
]

let rangeh = "10"
let rangev = "22"


var layoutStr =
    '<KoolChart backgroundColor="#FFFFFF"  borderStyle="none">'
    + '<Options>'
    + '<Caption text="Brand / Category Matrix" fontFamily="Malgun Gothic"/>'
    + '</Options>'
    + '<SeriesSlide id="ss" duration="1000" elementOffset="0"/>'
    + '<Matrix2DChart showDataTips="true" type="fill" dataTipJsFunction="tipFunc" fontFamily="Malgun Gothic">'
    + '<backgroundElements>'
    + '<GridLines direction="horizontal" horizontalChangeCount="2">'
    + '<horizontalStroke>'
    + '<Stroke color="#f1f1f1"/>'
    + '</horizontalStroke>'
    + '</GridLines>'
    + '</backgroundElements>'
    + '<verticalAxis>'
    + '<LinearAxis id="vAxis" interval="0.5" maximum="10" minimum="1" labelJsFunction="vertiJsFunc" title="CATEGORY"/>'
    + '</verticalAxis>'
    + '<horizontalAxis>'
    + '<LinearAxis id="hAxis" interval="0.5" maximum="22" minimum="1" labelJsFunction="horiJsFunc" title="BRAND"/>'
    + '</horizontalAxis>'
    + '<series>'
    + '<Matrix2DSeries xField="Data_x" yField="Data_y" zField="Data" showDataEffect="{ss}" labelPosition="inside" fillJsFunction="fillJsFunc" insideLabelJsFunction="labelJsFunc" styleName="seriesFont"/>'
    + '</series>'
    + '<verticalAxisRenderers>'
    + '<Axis2DRenderer axis="{vAxis}" tickPlacement="none" styleName="font" minorTickPlacement="none"/>'
    + '</verticalAxisRenderers>'
    + '<horizontalAxisRenderers>'
    + '<Axis2DRenderer axis="{hAxis}" tickPlacement="none" styleName="font" minorTickPlacement="none" showLine="true"/>'
    + '</horizontalAxisRenderers>'
    + '</Matrix2DChart>'
    + '<Box width="100%" horizontalAlign="center">'
    + '<SubLegend borderStyle="solid" markerWidth="15" markerHeight="10" direction="horizontal" fontFamily="Malgun Gothic">'
    + '<LegendItem label="(0€ ~ 15 000€)" fill="#73ff71"/>'
    + '<LegendItem label="(15 000€ ~ 20 000€)" fill="#bdff7f"/>'
    + '<LegendItem label="(20 000€ ~ 30 000€)" fill="#ffff7c"/>'
    + '<LegendItem label="(30 000€ ~ 40 000€)" fill="#ffc07e"/>'
    + '<LegendItem label="(~ 40 000€)" fill="#ff7878"/>'
    + '</SubLegend>'
    + '</Box>'
    + '<Style>'
    + '.font{fontFamily:"Malgun Gothic";fontSize:11;}'
    + '.seriesFont{color:#777;fontFamily:"Malgun Gothic";fontSize:12;}'
    + '</Style>'
    + '</KoolChart>';
function fillJsFunc(seriesId, index, param, values) {
    let cat = vertiJsFunc(seriesId, values[1]);
    let brd = horiJsFunc(seriesId, values[0]);
    let average = getAveragePrice(brd, cat);
    if (average < 15000)
        return "#73ff71";
    else if (average >= 15000 && average < 20000)
        return "#bdff7f";
    else if (average >= 20000 && average < 30000)
        return "#ffff7c";
    else if (average >= 30000 && average < 40000)
        return "#ffc07e";
    else if (average >= 40000)
        return "#ff7878";
}

function labelJsFunc(seriesId, index, data, values) {
    return "<b>" + values[2] + " cars</b>";
}

function getAveragePrice(brd, cat) {
    let objs = getObject(brd, cat);
    let sum = 0;
    for (let i = 0; i < objs.length; i++) {
        sum += objs[i].prix;
    }
    return Math.round(sum / objs.length);
}

function tipFunc(seriesId, seriesName, index, xName, yName, data, values) {
    let cat = vertiJsFunc(seriesId, values[1]);
    let brd = horiJsFunc(seriesId, values[0]);
    let objs = getObject(brd, cat);
    let str = "<table>\n" +
        "    <thead>\n" +
        "        <tr>\n" +
        "            <th colspan=\"1\">Marque</th>\n" +
        "            <th colspan=\"1\">Modele</th>\n" +
        "            <th colspan=\"1\">Puissance</th>\n" +
        "            <th colspan=\"1\">Longueur</th>\n" +
        "            <th colspan=\"1\">Nb de places</th>\n" +
        "            <th colspan=\"1\">Nb de portes</th>\n" +
        "            <th colspan=\"1\">Couleur</th>\n" +
        "            <th colspan=\"1\">Occasion</th>\n" +
        "            <th colspan=\"1\">Prix</th>\n" +
        "        </tr>\n" +
        "    </thead>\n" +
        "    <tbody>\n";

    for (let i = 0; i < objs.length; i++) {
        str += "        <tr>\n" +
            "            <td>" + objs[i].marque + "</td>\n" +
            "            <td>" + objs[i].nom + "</td>\n" +
            "            <td>" + objs[i].puissance + "</td>\n" +
            "            <td>" + objs[i].longueur + "</td>\n" +
            "            <td>" + objs[i].nbPlaces + "</td>\n" +
            "            <td>" + objs[i].nbPortes + "</td>\n" +
            "            <td>" + objs[i].couleur + "</td>\n" +
            "            <td>" + objs[i].occasion + "</td>\n" +
            "            <td>" + objs[i].prix + "</td>\n" +
            "        </tr>\n";
    }
    str += "    </tbody>\n" +
        "</table>";
    return str;
}

// function get number of jsob object where attribute = value
function getNumberOfObject(json, attribute, value) {
    return json.filter(item => item[attribute] == value).length;
}

// function get object where brand = brand and category = category
function getObject(brand, category) {
    return dataJson.filter(item => item.marque == brand && item.categorie == category);
}

function getDistinctValues(json, key) {
    return [...new Set(json.map(item => item[key]))];
}

let distinctBrands = getDistinctValues(dataJson, 'marque');
let jsonCars = [];
distinctBrands.forEach((brand, index) => {
    let brandObjects = dataJson.filter(item => item.marque == brand);
    let distinctCategory = getDistinctValues(brandObjects, 'categorie');
    distinctCategory.forEach((category, index) => {
        let nbOfObject = getNumberOfObject(brandObjects, "categorie", category);
        let brandName = brand
        jsonCars.push({"brand": brandName, "category": category, "Data": nbOfObject});
    });
});

let distinctBrandss = getDistinctValues(jsonCars, 'brand');
distinctBrandss.unshift('empty');
let listItemBrand = [];
distinctBrandss.forEach((brand, index) => {
    listItemBrand.push(index + 0.5);
})

let distinctCategoryy = getDistinctValues(jsonCars, 'category');
distinctCategoryy.unshift('empty');
let listItemCategory = [];
distinctCategoryy.forEach((brand, index) => {
    listItemCategory.push(index + 0.5);
})

var chartData = []
for (var i = 0; i < jsonCars.length; i++) {
    let indexBrand = distinctBrandss.indexOf(jsonCars[i].brand)
    let indexCategory = distinctCategoryy.indexOf(jsonCars[i].category)
    let jsonCar = {
        "Data_x": listItemBrand[indexBrand],
        "Data_y": listItemCategory[indexCategory],
        "Data": jsonCars[i].Data,
    }
    chartData.push(jsonCar)
}

function vertiJsFunc(id, value) {
    let indexCategory = listItemCategory.indexOf(value)
    if (indexCategory > 0) return distinctCategoryy[indexCategory]
    else return "";
}

function horiJsFunc(id, value) {
    let indexBrand = listItemBrand.indexOf(value)
    if (indexBrand > 0) return distinctBrandss[indexBrand]
    else return "";
}
