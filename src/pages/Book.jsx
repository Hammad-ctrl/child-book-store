import React, { useState } from 'react'
import './css/book.css'
import { useNavigate } from 'react-router-dom';
const Book = () => {
    const images = [
        {
            url: "https://mu2.wonderbly.com/product/partner-i-love-you/preview/front/front-right?locale=en-US&product_slug=partner-i-love-you&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bfacialhairtype%5D=stubble&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bfacialhaircolour%5D=haircolour-3&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bextra%5D=glasses-round&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bname%5D=ljdf&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bgender%5D=male&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bskintone%5D=tone-2&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bhairtype%5D=short-fringe&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bhaircolour%5D=haircolour-10&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Beyecolour%5D=eyecolour-2&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bfacialhairtype%5D=stubble&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bfacialhaircolour%5D=haircolour-1&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bextra%5D=glasses-round&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bname%5D=heloo&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bgender%5D=male&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bskintone%5D=tone-1&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bhairtype%5D=short-fringe&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bhaircolour%5D=haircolour-11&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Beyecolour%5D=eyecolour-4&characters%5B0%5D%5Btype%5D=adult&cover_style=cover-iii&_q=0.8&_v=a7fcf0ca892d0b313497ccf93ecbd90ddb34a35f&_size=172.55x250.61x8.275&_sig=6LDEAUbn4N7Uj0SOd3Bu0lMl4eJeOoDiapj3BFzTobI&_width=750"
        },
        {
            url: "https://mu2.wonderbly.com/product/partner-i-love-you/preview/dedication/dedication?locale=en-US&product_slug=partner-i-love-you&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bfacialhairtype%5D=stubble&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bfacialhaircolour%5D=haircolour-3&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bextra%5D=glasses-round&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bname%5D=ljdf&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bgender%5D=male&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bskintone%5D=tone-2&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bhairtype%5D=short-fringe&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bhaircolour%5D=haircolour-10&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Beyecolour%5D=eyecolour-2&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bfacialhairtype%5D=stubble&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bfacialhaircolour%5D=haircolour-1&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bextra%5D=glasses-round&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bname%5D=heloo&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bgender%5D=male&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bskintone%5D=tone-1&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bhairtype%5D=short-fringe&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bhaircolour%5D=haircolour-11&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Beyecolour%5D=eyecolour-4&characters%5B0%5D%5Btype%5D=adult&_q=0.8&_v=a7fcf0ca892d0b313497ccf93ecbd90ddb34a35f&_size=172.55x250.61x8.275&_sig=anOpc1tOk0cE90kaV2mFS4R4j513Qv1RdWgQn_K09I0&_width=640"
        },
        {
            url: "https://mu2.wonderbly.com/product/partner-i-love-you/preview/intro/intro-left?locale=en-US&product_slug=partner-i-love-you&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bfacialhairtype%5D=stubble&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bfacialhaircolour%5D=haircolour-3&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bextra%5D=glasses-round&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bname%5D=ljdf&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bgender%5D=male&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bskintone%5D=tone-2&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bhairtype%5D=short-fringe&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Bhaircolour%5D=haircolour-10&characters%5B0%5D%5Bcustomisations%5D%5B0%5D%5Beyecolour%5D=eyecolour-2&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bfacialhairtype%5D=stubble&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bfacialhaircolour%5D=haircolour-1&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bextra%5D=glasses-round&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bname%5D=heloo&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bgender%5D=male&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bskintone%5D=tone-1&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bhairtype%5D=short-fringe&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Bhaircolour%5D=haircolour-11&characters%5B0%5D%5Bcustomisations%5D%5B1%5D%5Beyecolour%5D=eyecolour-4&characters%5B0%5D%5Btype%5D=adult&_q=0.8&_v=a7fcf0ca892d0b313497ccf93ecbd90ddb34a35f&_size=172.55x250.61x8.275&_sig=_49LXXqEScudPbVS3aXQ37JZZhlyhkoQfu1sNaHLeBg&_width=640"
        }
    ]
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate();
    const [loading,setLoading]= useState(false);
  const BuyBookNow =()=>{
     setLoading(true);
     setTimeout(()=>{
             navigate("/book/generate/cover");
     },200)
  }
    const handleSingleSelect = () => {
        setSelectedOption("single");
    };

    const handleMultiSelect = () => {
        setSelectedOption("multi");
    };
    return (
        <div className="book min-h-screen w-full  flex items-center justify-center">
            <div className="center md:w-1/2 w-[80%] relative h-full flex flex-col items-center justify-center mt-32 gap-8">
                <div className="single-or-multiView flex fixed top-10 right-[43%] z-10 bg-white">
                    <div
                        className={`single-button flex  flex-col items-center justify-center min-w-20 ${selectedOption === "single" ? "selected" : ""}`}
                        onClick={handleSingleSelect}
                    >
                        <div className="inner-div"></div>
                        <span className={`${selectedOption === "single" ? "text-white" : "text-black"}`}>
                            Single
                        </span>


                    </div>
                    <div
                        className={`multi-button  flex flex-col min-w-20 ${selectedOption === "multi" ? "selected" : ""}`}
                        onClick={handleMultiSelect}
                    >
                        <div className='flex items-center gap-1'>
                            <div className="inner-div"></div>
                            <div className="inner-div"></div>
                        </div>
                        <span>Multi</span>
                    </div>
                </div>

                <h2 className="text-xl caveat">Personalize your book</h2>

                {/* Display First Image Always */}
                <div className="image-container1 ">
                    <img src={images[0].url} width={290} className='shadow-lg image-inside shadow-gray-600 rounded-sm' alt="Book preview 1" />
                </div>

                {/* Conditional display of remaining images based on selected view */}
                <div className={`image-container1 mb-32 grid  ${selectedOption === "multi" ? "grid-cols-2 " : "grid-cols-1 gap-4"}`}>
                    {images.slice(1).map((image, i) => (
                        <div className={`${i%2 == 0 ?"img-container":"img-container2"}`}>
                            <img key={i} src={image.url} className='image-inside shadow-lg shadow-gray-600' width={290} alt={`Book preview ${i + 2}`} />
                        </div>
                    ))}
                </div>
                <div className='fixed  bottom-0 h-28 w-[100vw] bg-white'>
                       <button className='bg-black w-44 md:w-56 text-white py-2 px-4 fixed bottom-10 right-2' disabled={loading} onClick={BuyBookNow}>{loading?"loading...":"Continue"}</button>
                </div>
            </div>
        </div>
    )
}

export default Book