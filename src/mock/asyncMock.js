const products = [
{
    id: "1",
    name: "Catan",
    price: 45000,
    category: "Juegos de mesa",
    img: "/images/catan juego.jpg",
    stock: 10,
    description: "El clásico juego de estrategia, gestión de recursos y negociación donde los jugadores intentan colonizar una isla en constante expansión.",
    showInHome: true 
},
{
    id: "2",
    name: "Uno Flip",
    price: 12000,
    category: "Cartas",
    img: "/images/uno flip.webp",
    stock: 25,
    description: "El juego de cartas que ya conoces, pero con un giro emocionante: un mazo con doble cara y un lado oscuro con penalizaciones mucho más competitivas y severas.",
    showInHome: true 
},
{
    id: "3",
    name: "Puzzle 1000 pz Paisaje",
    price: 18000,
    category: "Puzzles",
    img: "/images/+1000 piezas.jpg",
    stock: 5,
    description: "Desafía tu mente y tu concentración armando este hermoso y detallado paisaje alpino de alta calidad con encaje perfecto.",
    showInHome: true 
},
{
    id: "4",
    name: "Dixit",
    price: 38000,
    category: "Juegos de mesa",
    img: "/images/dixin.webp",
    stock: 8,
    description: "Un juego de cartas e imaginación bellamente ilustrado, donde tu creatividad y la narración de pistas sutiles te llevarán a descubrir la carta correcta.",
    showInHome: true 
},
{
    id: "5",
    name: "Virus!",
    price: 15000,
    category: "Cartas",
    img: "/images/doctor.webp",
    stock: 14,
    description: "Un juego de cartas rápido y adictivo donde tu objetivo es contagiar los órganos de tus rivales mientras proteges los tuyos para erradicar el virus.",
    showInHome: true 
},
{
    id: "6",
    name: "Puzzle 3D Torre Eiffel",
    price: 24000,
    category: "Puzzles",
    img: "/images/torre eiffel.webp",
    stock: 6,
    description: "Construye una réplica tridimensional increíble del monumento más famoso de París con piezas rígidas de plástico que encajan a la perfección sin pegamento.",
    showInHome: true 
},
{
    id: "7",
    name: "Carcassonne",
    price: 36000,
    category: "Juegos de mesa",
    img: "/images/carcassonne.webp",
    stock: 7,
    description: "Un juego de tablero moderno clásico donde los jugadores trazan caminos, construyen ciudades y controlan monasterios para dominar la región francesa.",
    showInHome: false 
},
{
    id: "8",
    name: "Exploding Kittens",
    price: 19000,
    category: "Cartas",
    img: "/images/Exploding Kittens.webp",
    stock: 12,
    description: "Una versión gatuna de la ruleta rusa con un gran componente estratégico. Los jugadores van robando cartas hasta que a alguien le sale un gato explosivo.",
    showInHome: false 
},
{
    id: "9",
    name: "Puzzle 2000 pz Universo",
    price: 29000,
    category: "Puzzles",
    img: "/images/2000 p universo.webp",
    stock: 4,
    description: "Un colosal desafío de 2000 piezas que ilustra de manera espectacular el cosmos, las galaxias y constelaciones con colores vibrantes y detalles asombrosos.",
    showInHome: false 
}
];

export const getProducts = () => {
    return new Promise((resolve) => {
    setTimeout(() => {
    const homeProducts = products.filter(p => p.showInHome === true);
    resolve(homeProducts);
    }, 1500);
});
};

export const getProductById = (productId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find((p) => p.id === productId);
            if (product) {
                resolve(product);
            } else {
                reject(new Error("Producto no encontrado"));
            }
        }, 1500); 
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter((p) => p.category === categoryId);
            resolve(filteredProducts);
        }, 1500); 
    });
};