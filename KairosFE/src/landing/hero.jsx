import React from "react";
import kairosLogo from "../assets/kairosLogo.svg";

function Hero() {
    return (
        <div id="hero" className="h-screen bg-kairosblack font-bold static">
            <div id="heroBanner" className="flex flex-col text-center text-5xl items-center justify-around h-11/12">
                <div id="logotype" className="flex flex-col items-center space-y-5">
                    <img src={kairosLogo} />                    
                    <h1 className="text-kairoswhite text-8xl">KAIROS</h1>
                    <h2 className="text-kairosgold">NUTRITION</h2>
                </div>
                <h1 className="text-kairoswhite max-w-6xl">EL MOMENTO PARA HACER UN CAMBIO ES <span className="text-kairosgold">AHORA</span></h1>
                <h1 className="text-kairoswhite p-10 border-b-2 border-b-kairosgold">CATOLOGO DE PRODUCTOS</h1>
            </div>
            <div id="heroFooter" className="absolute bottom-0 left-0 space-x-20 p-5 text-kairoswhite ">
                <a href="#">INSTAGRAM</a>
                <a href="#">WHATSAPP</a>
            </div>
        </div>
    );
}

export default Hero;