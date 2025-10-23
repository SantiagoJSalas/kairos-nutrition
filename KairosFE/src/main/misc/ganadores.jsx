import React from "react";
import products from '../../data/ganadores.json'
import ProductCard from "../components/productCard";


function Ganadores() {
    return (
        <div className="bg-kairosblack space-y-10 h-screen py-20 flex flex-col items-center relative">
            <h1 className="text-center text-kairoswhite text-6xl font-bold">GANADORES DE PESO</h1>
            <div className="w-[85%] h-10 bg-kairosgold absolute top-0 left-0 rounded-br-xl z-10"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-items-center gap-10 py-10 max-h-11/12 overflow-y-scroll w-full">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
            <a href="" className="h-16 w-16 rounded-full bg-green-400 absolute bottom-6 right-6 z-20"></a>
            <div className="w-[85%] h-10 bg-kairosgold absolute bottom-0 right-0 rounded-tl-xl z-10"></div>
        </div>
    )
}

export default Ganadores;