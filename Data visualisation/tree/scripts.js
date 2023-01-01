import dataJson from './catalogue.json' assert {type: 'json'};

let marqueArray = [...new Set(dataJson.map(item => item.marque))];

let graphChildren = [];

marqueArray.forEach(marque => {
    let dataBrand = dataJson.filter(item => item.marque === marque);
    let categoryArray = [...new Set(dataBrand.map(item => item.categorie))];
    let categoryChildren = [];

    categoryArray.forEach(category => {
        let modeleChildren = [];
        let dataCategory = dataBrand.filter(item => item.categorie === category);
        dataCategory.forEach(item => {
            let str = "<div class='modele'><b>" + item.nom + "</b><br>" +
                "Prix: " + item.prix + " €<br>" +
                "Puissance: " + item.puissance + "cv<br>" +
                "Couleur: " + item.couleur + "<br>" +
                "Taille: " + item.longueur + "<br>" +
                "Places: " + item.nbPlaces + "<br>" +
                "Portes: " + item.nbPortes + "<br>" +
                "Occasion: " + (item.occasion ? "Oui" : "Non") + "<br></div>";

            let json = {
                innerHTML: str,
            }
            modeleChildren.push(json);
        });
        let catJson = {
            text: {
                title: category,
            },
            collapsed: true,
            stackChildren: true,
            children: modeleChildren,
        }
        categoryChildren.push(catJson);
    });

    let json = {
        image: "img/thumb/" + marque.toLowerCase() + ".png",
        text: {
            name: marque,
        },
        collapsed: true,
        children: categoryChildren,
        HTMLclass: "marque",
    }
    graphChildren.push(json);
})


var chart_config = {
    chart: {
        container: "#collapsable-example",
        hideRootNode: true,
        animateOnInit: true,
        siblingSeparation: 10,
        subTeeSeparation: 80,
        padding: 10,
        nodeAlign: "BOTTOM",
        node: {
            collapsable: true
        },
        animation: {
            nodeAnimation: "easeOutBounce",
            nodeSpeed: 1000,
            connectorsAnimation: "bounce",
            connectorsSpeed: 1000
        }
    },
    nodeStructure: {
        text: {
            name: "",
        },
        collapsed: true,
        children: graphChildren
    }
};

new Treant(chart_config);
