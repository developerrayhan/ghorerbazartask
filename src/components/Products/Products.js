import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
    const Allproduct = products;

    return (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-4 sm:gap-4 lg:mt-16">
            {Allproduct.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Products;
