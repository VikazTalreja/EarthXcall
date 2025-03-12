import React from "react";

const products = [
  { id: 1, name: "Cacti Plant", price: "19.99", img: "/assets/img/product1.png" },
  { id: 2, name: "Cactus Plant", price: "11.99", img: "/assets/img/product2.png" },
  { id: 3, name: "Aloe Vera Plant", price: "7.99", img: "/assets/img/product3.png" },
  { id: 4, name: "Succulent Plant", price: "5.99", img: "/assets/img/product4.png" },
  { id: 5, name: "Succulent Plant", price: "10.99", img: "/assets/img/product5.png" },
  { id: 6, name: "Green Plant", price: "98.99", img: "./assets/forest-background.jpg" },
];

const ProductCard = ({ product }) => {
  return (
    <article className="bg-white rounded-lg shadow-md p-5 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-green-100 rounded-full -z-10"></div>
      <img src={product.img} alt={product.name} className="mx-auto w-32 h-32 object-contain mb-4" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <span className="text-gray-700 block mb-3">{product.price}</span>
      <button className="bg-green-600 w-full text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-green-700">
        <i className="ri-shopping-bag-line"></i> Add to Cart
      </button>
    </article>
  );
};

const ProductsPage = () => {
  return (
    <section className="container mx-auto py-10 px-5">
      <h2 className="text-3xl font-bold text-center mb-4">Check out our <br /> products</h2>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
        Here are some selected plants from our showroom, all are in excellent shape and have a long lifespan. Buy and enjoy the best quality.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
