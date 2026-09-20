const products = [
{
    id: "1",
    name: "Catan",
    price: 45000,
    category: "Juegos de mesa",
    img: "/images/catan juego.jpg",
    stock: 10,
    description: "El clásico juego de estrategia y negociación donde colonizas una isla."
},
{
    id: "2",
    name: "Uno Flip",
    price: 12000,
    category: "Cartas",
    img: "/images/uno flip.webp",
    stock: 25,
    description: "El juego de cartas que ya conoces, pero con un lado oscuro más competitivo."
},
{
    id: "3",
    name: "Puzzle 1000 pz Paisaje",
    price: 18000,
    category: "Puzzles",
    img: "/images/+1000 piezas.jpg",
    stock: 5,
    description: "Desafía tu mente armando este hermoso paisaje alpino."
}
];

export const getProducts = () => {
    return new Promise((resolve) => {
    setTimeout(() => {
    resolve(products);
    }, 2000);
});
};
