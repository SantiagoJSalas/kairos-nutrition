import React from "react";
import products from '../../data/termogenicos.json'
import ProductCard from "../components/productCard";


function Termogenicos() {
    return (
        <div className="space-y-10 h-screen py-20 flex flex-col items-center relative">
            <h1 className="text-center text-kairoswhite text-3xl md:text-6xl font-bold">TERMOGENICOS</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-items-center gap-10 py-10 max-h-11/12 overflow-y-scroll w-full">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
            <a href="" className="h-16 w-16 rounded-full bg-green-400 absolute bottom-6 right-6 z-20"></a>
        </div>
    )
}

export default Termogenicos;