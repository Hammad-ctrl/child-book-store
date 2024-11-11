import React from 'react'
import ImageGallery from "react-image-gallery";
/* react scroll image gallery  */
import '../assets/imageGallery.css'
import { IoIosStar } from "react-icons/io";
import "react-image-gallery/styles/css/image-gallery.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Faqs from '../components/Faqs';
import { books, childrens, FaqsData, reviews } from '../data/data';
import Testimonial from '../components/Testimonial';
import { FaReply } from "react-icons/fa";
import Review from '../components/Review';
import FAQ from '../components/FAQ';
import SignUpSection from '../components/SignUpSection.jsx';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
const Home = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [loading, setLoading] = useState(false);
    const handleChange = (event) => {
        setSelectedLanguage(event.target.value);
    };
    const navigate = useNavigate();
    const BuyNowNavigate = () => {
        setLoading(true);
        setTimeout(()=>{
            navigate("/checkout");
        },400)
    }
    const images = [
        {
            renderItem: () => (
                <div className="video-wrapper">
                    <video controls width="100%" height="100%" className='sm:h-[561px]' loop>
                        <source src="https://res.cloudinary.com/cxproduct-prod/video/upload/v1/where-are-you/15lpjwwl6bapugnweujwqa.webm?_a=DATAdtAAZAA0" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ),
            thumbnail: 'https://images.prismic.io/wonderbly/Zxt0UoF3NbkBYB8G_WAY1_Carousel_01_EN.jpg?auto=format,compress',  // Add a thumbnail for the video
        },
        {
            original: "https://images.prismic.io/wonderbly/Zxt0UoF3NbkBYB8G_WAY1_Carousel_01_EN.jpg?auto=format,compress",
            thumbnail: "https://images.prismic.io/wonderbly/Zxt0UoF3NbkBYB8G_WAY1_Carousel_01_EN.jpg?auto=format,compress",
        },

        {
            original: "https://images.prismic.io/wonderbly/b1fa1058-5cb7-4850-a1d7-4113c5a0c1fb_WAY_Carousel_06_B_Test.jpg?auto=compress,format",
            thumbnail: "https://images.prismic.io/wonderbly/b1fa1058-5cb7-4850-a1d7-4113c5a0c1fb_WAY_Carousel_06_B_Test.jpg?auto=compress,format",
        },
        {
            original: "https://images.prismic.io/wonderbly/48281c04-9ea2-481b-bdd0-a037644fe691_WAY_Carousel_01.jpg?auto=compress,format",
            thumbnail: "https://images.prismic.io/wonderbly/48281c04-9ea2-481b-bdd0-a037644fe691_WAY_Carousel_01.jpg?auto=compress,format",
        },
        {
            original: "https://images.prismic.io/wonderbly/19f05bc9-66b4-4652-92ff-7a820c344afb_WAY_Carousel_02.jpg?auto=compress,format",
            thumbnail: "https://images.prismic.io/wonderbly/19f05bc9-66b4-4652-92ff-7a820c344afb_WAY_Carousel_02.jpg?auto=compress,format",
        },
    ];

    return (
        <>
        <Navbar />
        <div className='    pt-5 text-[#09015d]'>
            {/* info about the single book  */}
            <div className=" w-[85%] mx-auto single-book flex flex-col sm:flex-row gap-2 h-full" style={{ fontFamily: 'Swansea' }}>
                <div className="left-image-gallery w-[100%] min-h-[100%] sm:w-[65%] md:w[55%]">
                    <ImageGallery thumbnailPosition='left' lazyLoad items={images} showFullscreenButton={false} />
                </div>
                <div className='book-details flex-1 flex items-center  flex-col'>
                    <h3 className="text-4xl  track text-[#09015d]" style={{ fontFamily: 'Nostalgic' }}>
                        Where are You?
                    </h3>
                    <div className="rating poppins-regular flex items-center gap-3 mb-3">
                        <p >trustPilot</p>
                        <div className="stars flex items-center gap-1">
                            {
                                [...Array(4)].map((_, i) => {
                                    return (
                                        <p className='bg-green-600 text-white p-1 flex items-center justify-center rounded-sm'><IoIosStar size={10} /></p>
                                    )
                                })
                            }
                        </div>
                        <div className="no-of-reviews">
                            <p className='text-sm text-gray-500 cursor-pointer flex items-center gap-1'>1449 reviews <MdKeyboardArrowDown /></p>
                        </div>
                    </div>
                    <div className="book-description">
                        <p className='p-2' >Gift a world of inspiration with our personalized book that speaks directly to your child! Their name and the characteris the center stage. Like a planted seed, this book quietly nurtures their inner dreamer,  fostering a spirit of courage and imagination as they grow.</p>
                    </div>
                    <ul className="book-subinfo" style={{ listStyleType: 'disc' }}>
                        <p className='mr-4'>Also,</p>
                        <li className='  gap-3 px-2'>Uploading photo is available inside our book.</li>
                        <li className='gap-3 px-2'>Flip through all pages before you buy.</li>
                        <li className=' gap-3 px-2'>Encourage childs reading habit and curiosty. </li>
                        <li className='gap-3 px-2'>Printed and ready to send in 2-3 business days.</li>
                    </ul>
                    <div className="book-price self-start mt-5 px-2">
                        <p className='poppins-semibold text-xl text-amber-950'>$44.99 USD</p>
                    </div>
                    <div className="button-pry mt-3 w-full poppins-regular ">
                        <button
                            className="w-full rounded-md p-3 h-12 bg-[#221e56] hover:bg-white box-border hover:text-black hover:border transition-all text-white"
                            disabled={loading}
                            style={{ fontFamily: 'Nostalgic' }}
                            onClick={BuyNowNavigate}
                            >
                            {loading ? (
                                <div className="loading-spinner"></div>
                            ) : (
                                "Personalized Now"
                            )}
                        </button>


                    </div>
                    <div className="options-payment p-2 flex items-center gap-2">
                        <p className="flex items-center gap-2">
                            <img src="paypal.png" width={60} alt="" />
                            <span>Buy Now pay Later</span>
                            <Link to={'/'} className="text-blue-500 decoration-black">Learn more</Link>
                        </p>
                    </div>
                    <div className="faqs">
                        <div className="faqs w-[100%] text-md mx-auto my-5">
                            {FaqsData.map((faq, index) => (
                                <Faqs
                                key={index}
                                question={faq.question}
                                    answer={faq.answer}
                                    additionalInfo={faq.additionalInfo}
                                    />
                            ))}
                        </div>
                    </div>
                    <div className="single-review bg-[#FBF4E8] w-full p-3">
                        <div className="rating poppins-regular flex items-center gap-3 mb-3">
                            <div className="stars flex items-center gap-1">
                                {
                                    [...Array(4)].map((_, i) => {
                                        return (
                                            <p className='bg-green-600 text-white p-1 flex items-center justify-center rounded-sm'><IoIosStar size={10} /></p>
                                        )
                                    })
                                }
                            </div>
                            <div className="no-of-reviews">
                                <p className='text-sm text-gray-500 cursor-pointer flex items-center gap-1'>1449 reviews <MdKeyboardArrowDown /></p>
                            </div>
                        </div>
                        <p className='poppins-medium '>"My child’s reaction was priceless! She immediately connected with the character, and the joy it brought to her was worth every penny." Lindsey</p>
                    </div>
                </div>
            </div>
       
            {/* a single review  */}
            {/* <div className="w-100%] mx-auto testmanial mt-5 ">
                <Testimonial />
            </div> */}
            {/* why choose us  */}
            <div className="why-choose-us mt-5 w-[85%] mx-auto flex flex-col gap-10">
                <div className="750 flex items-center justify-around gap-20 flex-col md:flex-row">
                    <img src="https://images.prismic.io/wonderbly/ede78372-fe36-4dd9-b63a-056b2264979a_WAY_Partial_EN_02.gif?fit=crop&q=90&w=625&h=491" width={500} alt="" />
                    <div className="desc poppins-regular flex flex-col gap-10">
                        <h4 className='text-xl'>A Lasting Keepsake of Inspiration and Love</h4>
                        <p className='sm:w-[80%] text-gray-600 poppins-light w-full'>Seeing themselves in a positive and courageous light builds your child’s confidence like no other gift. This book lets them see the best of themselves, a concept supported by research showing the profound impact of personalised storytelling on self-esteem.</p>
                    </div>
                </div>
                <div className="deli flex items-center sm:flex-col-reverse flex-col justify-around gap-20  md:flex-row-reverse">
                    <img src="https://images.prismic.io/wonderbly/e4033ee2-4a02-49e8-a272-15202f61174a_WAY_Partial_EN_01.png?fit=crop&q=90&w=625&h=491" width={500} alt="" />
                    <div className="desc poppins-regular flex flex-col gap-10">
                        <h4 className='text-xl'>Cultivating the Love of Reading through Personal Connection</h4>
                        <p className='sm:w-[80%] text-gray-600 poppins-light w-full'>With their name embedded in a story crafted just for them, your child will form an emotional bond with reading, sparking excitement and a love for books that often leads to a lifetime of curiosity and learning. Research shows that children with a personal connection to stories are more engaged and develop a stronger foundation in literacy skills ([Journal of Early Childhood Literacy, 2021]).</p>
                    </div>
                </div>
                <div className="deli flex items-center  justify-around gap-20 flex-col sm:flex-row">
                    <img src="https://images.prismic.io/wonderbly/5f73edf3-4183-4870-975b-cb6cedcd26b1_Partial+9_Series_WAY.png?fit=crop&q=90&w=625&h=491" width={500} alt="" />
                    <div className="desc poppins-regular flex flex-col gap-10">
                        <h4 className='text-xl'>Creating a Lasting Treasure for Future Inspiration</h4>
                        <p className='sm:w-[80%] text-gray-600 poppins-light w-full'>More than just a bedtime story, this book becomes a cherished keepsake that inspires for years to come. Psychologists agree that meaningful keepsakes can strengthen family bonds and serve as a tangible reminder of love and support, motivating children to continue dreaming and achieving as they grow</p>
                    </div>
                </div>
            </div>
            {/* reviews  */}
            <div className="w-[85%] mx-auto reviews mt-5">
                <h4 className='poppins-semibold text-2xl'>Reviews</h4>
                <div className="rating poppins-regular flex items-center flex-col sm:flex-row gap-3 mb-3 w-full mx-auto justify-between">

                    <div className='flex items-center gap-3  w-full'>
                        <div className="stars flex items-center gap-1">
                            {
                                [...Array(5)].map((_, i) => {
                                    return (
                                        <p className='bg-green-600 text-white p-1 flex items-center justify-center rounded-sm'><IoIosStar size={10} /></p>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p>4.7 /5</p>
                        </div>
                        <div className="no-of-reviews">
                            <p className='text-sm text-gray-500 cursor-pointer flex items-center gap-1'>1449 reviews <MdKeyboardArrowDown /></p>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div>
                        <p >TrustPilot</p>
                    </div>
                </div>
                <div className="reviews-bag w-full sm:w-1/2 mx-auto border  h-72 overflow-y-auto">
                    {
                        reviews.map((review, i) => {
                            return (
                                <Review key={review.id} comment={review.comment} name={review.name} date={review.time} stars={review.stars} reply={review.replyByAdmin} />
                            )
                        })
                    }
                </div>
            </div>
            {/* faq section  */}
            <div className=" w-full faq-section">
                <FAQ />
            </div>
            {/* <div className="signup-section ">
                <SignUpSection />
            </div> */}
            <div className="footer w-full">
                <Footer />
            </div>
        </div>
    </>
    )
}

export default Home