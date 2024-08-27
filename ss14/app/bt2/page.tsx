import axios from 'axios';
import React from 'react';

async function getData() {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
}

export default async function Page() {
    const products = await getData();

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((item: any) => (
                    <div 
                        key={item.id} 
                        className="border border-gray-200 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-200"
                    >
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-48 object-cover rounded-t-lg mb-4"
                        />
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">
                            {item.title}
                        </h2>
                        <p className="text-gray-600 mb-4">
                            ${item.price}
                        </p>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
