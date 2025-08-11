// Mock data for testing the frontend without backend
export const mockProducts = [
    {
        _id: "1",
        name: "iPhone 12 Pro",
        price: 999,
        description: "Latest Apple iPhone with 5G capability",
        ratings: 4.5,
        stock: 10,
        seller: "Apple Inc.",
        images: [
            { image: "/images/products/1.jpg" }
        ]
    },
    {
        _id: "2",
        name: "Samsung Galaxy S21",
        price: 899,
        description: "High-end Android smartphone",
        ratings: 4.3,
        stock: 8,
        seller: "Samsung",
        images: [
            { image: "/images/products/2.jpg" }
        ]
    },
    {
        _id: "3",
        name: "MacBook Pro",
        price: 1299,
        description: "Powerful laptop for professionals",
        ratings: 4.7,
        stock: 5,
        seller: "Apple Inc.",
        images: [
            { image: "/images/products/3.jpg" }
        ]
    },
    {
        _id: "4",
        name: "Sony WH-1000XM4",
        price: 349,
        description: "Noise-canceling wireless headphones",
        ratings: 4.6,
        stock: 15,
        seller: "Sony",
        images: [
            { image: "/images/products/4.jpg" }
        ]
    },
    {
        _id: "5",
        name: "Dell XPS 13",
        price: 1099,
        description: "Compact and powerful laptop",
        ratings: 4.4,
        stock: 7,
        seller: "Dell",
        images: [
            { image: "/images/products/5.jpg" }
        ]
    },
    {
        _id: "6",
        name: "iPad Air",
        price: 599,
        description: "Versatile tablet for work and play",
        ratings: 4.5,
        stock: 12,
        seller: "Apple Inc.",
        images: [
            { image: "/images/products/6.jpg" }
        ]
    }
];

export const findProductById = (id) => {
    return mockProducts.find(product => product._id === id);
};

export const searchProducts = (keyword) => {
    if (!keyword) return mockProducts;
    return mockProducts.filter(product => 
        product.name.toLowerCase().includes(keyword.toLowerCase()) ||
        product.description.toLowerCase().includes(keyword.toLowerCase())
    );
};
