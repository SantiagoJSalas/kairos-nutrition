import React from "react";
import { Link } from "react-router-dom";

function Categories() {
    return (
        <div className="min-h-screen max-h-fit text-kairoswhite font-bold text-4xl space-y-20 p-20 relative px-4">
            <div className="w-[85%] h-10 bg-kairosgold absolute top-0 left-0 rounded-br-xl z-10"></div>
            <h1 className="md:text-6xl text-center">PRODUCTOS</h1>
            <div id="productContainer" className="w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-items-center text-center gap-20 gap-y-40">
                <Link to='/proteinas'>
                    <div className="Product space-y-10 flex flex-col items-center">
                        <div className="w-fit aspect-square bg-kairoswhite -rotate-12 flex justify-center items-center rounded-2xl"><img src="https://picsum.photos/200/355" className="aspect-square rotate-12 md:w-[300px]" alt="" /></div>
                        <h1 className="pb-5 border-b-2 border-kairosgold">PROTEINAS</h1>
                    </div>
                </Link>
                <Link to='/ganadores'>
                    <div className="Product space-y-10 flex flex-col items-center">
                        <div className="w-fit aspect-square bg-kairoswhite -rotate-12 flex justify-center items-center rounded-2xl"><img src="https://picsum.photos/200/356" className="aspect-square rotate-12 md:w-[300px]" alt="" /></div>
                        <h1 className="pb-5 border-b-2 border-kairosgold">GANADORES DE MASA</h1>
                    </div>
                </Link>
                <Link to='/creatinas'>
                    <div className="Product space-y-10 flex flex-col items-center">
                        <div className="w-fit aspect-square bg-kairoswhite -rotate-12 flex justify-center items-center rounded-2xl"><img src="https://picsum.photos/200/357" className="aspect-square rotate-12 md:w-[300px]" alt="" /></div>
                        <h1 className="pb-5 border-b-2 border-kairosgold">CREATINA</h1>
                    </div>
                </Link>
                <Link to='/preentrenos'>
                    <div className="Product space-y-10 flex flex-col items-center">
                        <div className="w-fit aspect-square bg-kairoswhite -rotate-12 flex justify-center items-center rounded-2xl"><img src="https://picsum.photos/200/358" className="aspect-square rotate-12 md:w-[300px]" alt="" /></div>
                        <h1 className="pb-5 border-b-2 border-kairosgold">PRE-ENTRENO</h1>
                    </div>
                </Link>
                <Link to='/aminoacidos#productSection'>
                    <div className="Product space-y-10 flex flex-col items-center">
                        <div className="w-fit aspect-square bg-kairoswhite -rotate-12 flex justify-center items-center rounded-2xl"><img src="https://picsum.photos/200/359" className="aspect-square rotate-12 md:w-[300px]" alt="" /></div>
                        <h1 className="pb-5 border-b-2 border-kairosgold">AMINOACIDOS</h1>
                    </div>
                </Link>
                <Link to='/termogenicos'>
                    <div className="Product space-y-10 flex flex-col items-center">
                        <div className="w-fit aspect-square bg-kairoswhite -rotate-12 flex justify-center items-center rounded-2xl"><img src="https://picsum.photos/200/350" className="aspect-square rotate-12 md:w-[300px]" alt="" /></div>
                        <h1 className="pb-5 border-b-2 border-kairosgold">CONTROL DE PESO</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Categories;