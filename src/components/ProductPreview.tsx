import React from "react";
import productImageDesktop from "../assets/image-product-desktop.jpg";
import cartImage from "../assets/icon-cart.svg";

const ProductPreview = () => {
    return (
        <div className="leading-6 text-2xl flex md:flex-row flex-col justify-center md:h-[50vh] m-4 rounded-lg overflow-hidden bg-white w-screen md:w-[40vw]">
            <div className="md:w-1/2 h-1/2 md:h-full">
                <img src={productImageDesktop} className="w-full h-72 md:h-full object-cover"></img>
            </div>
            <div className="p-6 md:w-1/2 space-y-4 h-1/2">
                <h3 className="text-xs text-gray-500">P E R F U M E</h3>
                <h1 className="font-fraunces text-2xl leading-6 pr-8">
                    Gabrielle Essence Eau De Parfume
                </h1>
                <p className="text-xs leading-5 text-gray-500">
                    A floral, solar and voluptuous interpretation composed by Olivier Polge,
                    Perfumer-Creator for the House of CHANEL.
                </p>
                <div className="flex items-center space-x-5">
                    <h1 className="text-2xl text-green-700 font-fraunces">$149.99</h1>
                    <h3 className="line-through text-sm text-gray-400">$169.99</h3>
                </div>
                <button className="rounded-md bg-emerald-900 px-8 py-3 text-xs w-full">
                    <div className="text-white flex justify-center items-center space-x-2 font-semibold">
                        <img src={cartImage} className="h-3 w-3" />
                        <p>Add to Cart</p>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default ProductPreview;
