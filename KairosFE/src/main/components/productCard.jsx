import React from "react";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="grid justify-center items-center gap-10 ">
        <div className="relative flex justify-center items-center">
          <div className="w-fit aspect-square bg-kairosgold rotate-12 flex justify-center items-center rounded-2xl">
            <img src={product.URL} alt="" className="w-[300px] aspect-square -rotate-12"/>
          </div>
        </div>
        <div className="text-center font-bold space-y-2 text-2xl">
          <h1 className="text-kairoswhite">{product.Titulo}</h1>
          <h1 className="text-kairosgold max-w-4xl"><span className="text-kairoswhite">Sabores: </span>{product.Sabor}</h1>
          <h1 className="text-kairoswhite">${product.Precio.toFixed(2)}</h1>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
