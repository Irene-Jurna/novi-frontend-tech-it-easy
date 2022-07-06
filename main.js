// VOORRAAD ARRAY MET TV'S
const inventory = [
    {
        type: '43PUS6504/12',
        name: '4K TV',
        brand: 'Philips',
        price: 379,
        availableSizes: [43, 50, 58, 65],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 23,
        sold: 2,
    },
    {
        type: 'NH3216SMART',
        name: 'HD smart TV',
        brand: 'Nikkei',
        price: 159,
        availableSizes: [32],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'HD ready',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 4,
        sold: 4,
    },
    {
        type: 'QE55Q60T',
        name: '4K QLED TV',
        brand: 'Samsung',
        price: 709,
        availableSizes: [43, 50, 55, 58, 65],
        refreshRate: 60,
        screenType: 'QLED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 7,
        sold: 0,
    },
    {
        type: '43HAK6152',
        name: 'Ultra HD SMART TV',
        brand: 'Hitachi',
        price: 349,
        availableSizes: [43, 50, 55, 58],
        refreshRate: 60,
        screenType: 'LCD',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 5,
        sold: 5,
    },
    {
        type: '50PUS7304/12',
        name: 'The One 4K TV',
        brand: 'Philips',
        price: 479,
        availableSizes: [43, 50, 55, 58, 65, 70],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: true,
        },
        originalStock: 8,
        sold: 3,
    },
    {
        type: '55PUS7805',
        name: '4K LED TV',
        brand: 'Philips',
        price: 689,
        availableSizes: [55],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: true,
        },
        originalStock: 6,
        sold: 3,
    },
    {
        type: 'B2450HD',
        name: 'LED TV',
        brand: 'Brandt',
        price: 109,
        availableSizes: [24],
        refreshRate: 60,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
    {
        type: '32WL1A63DG',
        name: 'HD TV',
        brand: 'Toshiba',
        price: 161,
        availableSizes: [32],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
];

//OPDRACHT 1 - Array methoden
//1a: We maken een lijst met alle tv-namen (map methode)

const tvNames = inventory.map((tvName) => {
    return tvName.name;
});

console.log(tvNames);

//1b: We maken een lijst met alle tv's die volledig uitverkocht zijn (filter methode)

const tvSoldOut = inventory.filter((soldOut) => {
    if (soldOut.originalStock === soldOut.sold) {
        return true;
    }
    return false;
});

console.log(tvSoldOut);

//1c: We maken een lijst met alle tv's die over AmbiLight beschikken (filter methode)
const ambiLightTVs = inventory.filter((ambiLightTV) => {
    if (ambiLightTV.options.ambiLight === true) {
        return true;
    }
});

console.log(ambiLightTVs);

//1d: We maken een lijst waarin de tv's van de laagste naar de hoogste prijs zijn gesorteerd (sort methode)

inventory.sort((a, b) => {
    if (a.price > b.price) {
        return 1;
    }
    if (a.price < b.price) {
        return -1;
    }
    return 0;
});

console.log(inventory);

//OPDRACHT 2 - Elementen in de DOM plaatsen
//Tip: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon een oude vertrouwde for-loop voor!

//2a: We maken een script dat berekent hoeveel tv's er al verkocht zijn


let totalTVsSold = 0;
for (let i = 0; i < inventory.length; i++) {
    totalTVsSold += inventory[i].sold;
}

console.log(totalTVsSold);

//2b: We maken het aantal verkochte tv's groen op de pagina
const tvElement = document.getElementById('amountOfTVsSold');
tvElement.innerHTML = `<p>Totaal aantal verkochte TV's: ${totalTVsSold}.`;
tvElement.style.color = 'green';

//2c: We maken een script dat berekent hoeveel tv's er zijn ingekocht
let tvOriginalStock = 0;
for (let i = 0; i < inventory.length; i++) {
    tvOriginalStock += inventory[i].originalStock;
}

console.log(tvOriginalStock);

//2d: We maken het aantal ingekochte tv's blauw op de pagina
const amountOfTVsOriginalInStock = document.getElementById('amountOfTVsStockedTotal');
amountOfTVsOriginalInStock.innerHTML = `<p>Totaal aantal tv's ingekocht: ${tvOriginalStock}.`;
amountOfTVsOriginalInStock.style.color = 'blue';

//2e: We maken een script dat berekent hoeveel tv's er nog verkocht moeten worden

let totalTVsInStock = tvOriginalStock - totalTVsSold;
const sumTVsCurrentlyInStock = document.getElementById('sumOfTVsSoldMinusTVsStocked');
sumTVsCurrentlyInStock.innerHTML = `<p>Hoeveelheid tv's die nog verkocht moet worden: ${totalTVsInStock}.`;
sumTVsCurrentlyInStock.style.color = 'red';

//OPDRACHT 3 - Array methoden en functies

//3a: We maken een lijst waarin je alle tv merken in een lijst op de pagina ziet. Deze lijst werkt ook bij honderden merknamen (map methode)

const tvBrands = inventory.map((tvBrand) => {
    return tvBrand.brand;
});

const listTVs = document.getElementById('listOfTVBrands');
listTVs.innerHTML = `${tvBrands}`;

//3b: We maken een lijst waarin je alle tv merken ziet (functie)
//Note: deze zie je alleen in de console, niet op de webpagina zelf, omdat de lijst van 3a al te zien is

const getBrandList = (inventory) => {
    let brandList = [];
    for (let i = 0; i < inventory.length; i++) {
    brandList += inventory[i].brand
    }

    return brandList;
};

console.log(getBrandList(inventory));

// OPDRACHT 4 - Functies

// 4a: We maken een lijst voor een tv met informatie over het merk, type en naam. Bijvoorbeeld: Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.

function getDetailedList(arr, index) {
    const tvContainer = document.getElementById('containerWithTV');
    tvContainer.textContent += `${arr[index].brand} ${arr[index].type} - ${arr[index].name}`;
}

getDetailedList(inventory,1);


