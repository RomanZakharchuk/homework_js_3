// Task 1

const task1 = 'Привіт!';

for (let i = 0; i < 10; i++) {
    document.write(`<div>${task1}</div>`);
}

// Task 2

const task2 = "Номер:";

for (let i = 0; i < 10; i++) {
    document.write(`<div>${task2} ${i}</div>`);
}

// Task 3

const task3 = 'Заголовок';

{
    let i = 0
    while (i < 20) {
        i++;
        document.write(`<h1>${task3}</h1>`);
    }
}

// Task 4

const task4 = 'Другий заголовок!!';

{
    let i = 0
    while (i < 20) {
        i++;
        document.write(`<h1>${task4} ${i}</h1>`);
    }
}

// Task 5

const listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write('<ul>');
for (let i = 0; i < listOfItems.length; i++) {
    document.write(`<li>${listOfItems[i]}</li>`);
}
document.write('</ul>');

// Task 6

const products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

document.write('<div class="box">');
for (let product of products) {
    document.write('<div class="product-card">');
    document.write(`<h3 class="product-title">${product.title}. Price - ${product.price}</h3>`);
    document.write(`<img src=${product.image} alt="" class="product-img">`);
    document.write('</div>');
}
document.write('</div>');
