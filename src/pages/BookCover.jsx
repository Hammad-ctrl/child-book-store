import React, { useState } from 'react';
import { TiTick } from "react-icons/ti";

const BookCover = () => {
    const [loading,setLoading]= useState(false);
    const BuyBookNow =()=>{
       setLoading(true);
       setTimeout(()=>{
               navigate("/book/generate/cover");
       },200)
    }
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
            description: "A premium hardcover with a quality matte finish. Made to be read again and again..",
            btnText: "Hardcover selected"
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
        <div className="book min-h-screen  w-full flex items-center justify-center gap-2 Atak">
            <h3 className='text-lg font-medium text-center'>
                Choose a format for your book
            </h3>
            <h4 className='text-black text-md text-center'>Make your gift even more glorious with our selection of cover options</h4>
            <div className="bookCovers flex items-center justify-center gap-10 flex-wrap ">
                {
                    books.map((book, i) => (
                        <div 
                            key={i} 
                            className={`book-single pb-2 min-h-80 relative w-72 bg-white ${book.isSelected ? 'border-green-600 border-[3px]' : ''}`}
                        >
                            {book.isSelected && (
                                <div className="tick w-5 h-5 rounded-full bg-green-800 flex items-center justify-center absolute right-0 top-0">
                                    <TiTick size={21} />
                                </div>
                            )}
                            {book.topInfo && (
                                <div className="topinfo bg-[#FFD15A] flex items-center justify-center p-2">
                                    <p className='poppins-medium'>{book.topInfo}</p>
                                </div>
                            )}
                            <div className="img">
                                <img src={book.imgSrc} alt="" />
                            </div>
                            <div className="book-details flex flex-col gap-1">
                                <div className="name-price flex items-center justify-center flex-col">
                                    <h3>{book.name}</h3>
                                    <p>${book.price} USD</p>
                                </div>
                                <div className="desc">
                                    <p className='text-center text-sm font-light'>{book.description}</p>
                                </div>
                                <div className="button-get flex items-center justify-center">
                                    <button
                                        className={`w-[95%] py-2 h-12 border-black ${book.isSelected && "bg-green-600 text-white border-none"} px-2 border-2`}
                                        onClick={() => handleSelect(i)}
                                    >
                                        {book.btnText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='fixed  bottom-0 h-28 w-[100vw] '>
                       <button className='bg-black w-44 md:w-56 text-white py-2 px-4 fixed bottom-10 right-2' disabled={loading} onClick={BuyBookNow}>{loading?"loading...":"Continue"}</button>
                </div>
        </div>
    );
};

export default BookCover;
