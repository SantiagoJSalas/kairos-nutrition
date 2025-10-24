import React from "react";
import products from '../../data/proteinas.json'
import ProductCard from "../components/productCard";


function Proteinas() {
    return (
        <div className="space-y-10 h-screen py-20 flex flex-col items-center relative">
            <h1 className="text-center text-kairoswhite text-3xl md:text-6xl font-bold">PROTEINAS</h1>
            <div id="productSection" className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-items-center gap-10 py-10 max-h-11/12 overflow-y-scroll w-full">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Proteinas;