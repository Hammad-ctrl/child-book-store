import React, { useState } from 'react';
import { TiTick } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';

const BookCover = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const BuyBookNow = () => {
        setLoading(true);
        setTimeout(() => {
            navigate("/book/cart/payment");
        }, 200);
    };

    const [books, setBooks] = useState([
        {
            isSelected: false,
            topInfo: "Lifetime keepsake",
            imgSrc: "/premimum.webp",
            name: "Premium Hardcover Layflat",
            price: 69.99,
            description: "Luxurious pages that lay perfectly flat when reading – all wrapped up in a sturdy cover for an unforgettable gift.",
            btnText: "Select Premium Hardcover"
        },
        {
            isSelected: false,
            topInfo: "Most popular",
            imgSrc: "/popular.webp",
            name: "Hardcover",
            price: 59.99,
            description: "A premium hardcover with a quality matte finish. Made to be read again and again.",
            btnText: "Select Hardcover"
        },
        {
            isSelected: false,
            imgSrc: "/softback.webp",
            name: "Softcover",
            price: 69.99,
            description: "A lovely, lightweight softcover printed on thick, durable paper.",
            btnText: "Select Softcover"
        }
    ]);

    const handleSelect = (index) => {
        const updatedBooks = books.map((book, i) => 
            ({ ...book, isSelected: i === index })
        );
        setBooks(updatedBooks);
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center gap-4 px-6 py-8 bg-gray-100">
            <h3 className='text-2xl font-semibold text-center mb-4'>
                Choose a Format for Your Book
            </h3>
            <h4 className='text-gray-700 text-lg text-center mb-8'>
                Enhance your gift with our selection of premium cover options
            </h4>
            <div className="flex flex-wrap justify-center gap-8">
                {books.map((book, i) => (
                    <div 
                        key={i} 
                        className={`relative w-72 p-4 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 ${book.isSelected ? 'border-green-500 border-4' : 'border border-gray-200 bg-white'}`}
                    >
                        {book.isSelected && (
                            <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white">
                                <TiTick size={18} />
                            </div>
                        )}
                        {book.topInfo && (
                            <div className="bg-yellow-300 text-yellow-900 font-semibold text-center py-1 rounded-t-md mb-3">
                                {book.topInfo}
                            </div>
                        )}
                        <div className="mb-4">
                            <img src={book.imgSrc} alt={book.name} className="w-full h-40 object-cover rounded-md" />
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-medium text-gray-800 mb-2">{book.name}</h3>
                            <p className="text-green-700 text-lg font-semibold mb-2">${book.price} USD</p>
                            <p className="text-gray-600 text-sm font-light mb-4">{book.description}</p>
                            <button
                                className={`w-full py-3 rounded-md font-semibold transition-colors duration-200 ${book.isSelected ? "bg-green-600 text-white" : "bg-white text-green-600 border border-green-600 hover:bg-green-600 hover:text-white"}`}
                                onClick={() => handleSelect(i)}
                            >
                                {book.btnText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="fixed bottom-8 right-8">
                <button 
                    className='bg-black text-white py-3 px-6 rounded-md shadow-lg transition-transform duration-200 hover:bg-gray-800 disabled:opacity-50' 
                    disabled={loading} 
                    onClick={BuyBookNow}
                >
                    {loading ? "Loading..." : "Continue"}
                </button>
            </div>
        </div>
    );
};

export default BookCover;
