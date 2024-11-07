import React from 'react'
import ImageGallery from "react-image-gallery";
/* react scroll image gallery  */
import '../assets/imageGallery.css'
import { IoIosStar } from "react-icons/io";
import "react-image-gallery/styles/css/image-gallery.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiGift } from "react-icons/ci";
import { IoMdBook } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
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

const Home = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('English');

    const handleChange = (event) => {
        setSelectedLanguage(event.target.value);
    };
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
        <div className='    pt-5 text-[#09015d]'>
            {/* info about the single book  */}
            <div className=" w-[85%] mx-auto single-book flex flex-col sm:flex-row gap-2 h-full" style={{ fontFamily: 'Swansea' }}>
                <div className="left-image-gallery w-[100%] min-h-[100%] sm:w-[65%] md:w[55%]">
                    <ImageGallery thumbnailPosition='left' lazyLoad items={images} showFullscreenButton={false} />
                </div>
                <div className='book-details flex-1 flex items-center  flex-col'>
                    <h3 className="text-2xl font-medium text-[#09015d]" style={{ fontFamily: 'Nalieta' }}>
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
                    <div className="book-subinfo flex flex-col  self-start mt-3">
                        <p className='flex  gap-3 px-2'><FaRegHeart size={25} />Uploading photo is available inside our book.</p>
                        <p className='flex  gap-3 px-2'><IoMdBook size={25} />Flip through all pages before you buy.</p>
                        <p className='flex  gap-3 px-2'><CiGift size={25} />Encourage childs reading habit and curiosty. </p>
                        <p className='flex  gap-3 px-2'><CiGlobe size={25} />Printed and ready to send in 2-3 business days.</p>
                    </div>
                    <div className="book-price self-start mt-5 px-2">
                        <p className='poppins-semibold text-xl text-amber-950'>$44.99 USD</p>
                    </div>
                    <div className="flex items-center justify-center mt-5 set-selection w-full">
                        <select
                            id="language"
                            value={selectedLanguage}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md p-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
                        >
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="French">French</option>
                            <option value="German">German</option>
                            <option value="Chinese">Chinese</option>
                        </select>
                    </div>
                    <div className="button-pry mt-3 w-full poppins-regular ">
                        <button className='w-full rounded-md p-3 bg-black hover:bg-white box-border hover:text-black hover:border transition-all text-white'>Personalized now</button>
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
                        <p className='poppins-medium '>"A wonderful experience for my daughter. I'm so happy to see her so immensely happy and delighting in all the options for her future. Truly the best gift I've ever given her!" - Kat</p>
                    </div>
                </div>
            </div>
            {/* more books  */}
            <div className="w-[85%] mx-auto similar-books mt-4 flex flex-col gap-5">
                <h4 className='caveat text-2xl'>Explore similar Books</h4>
                <div className="similar-books-here flex items-center justify-center gap-10 overflow-x-auto">
                    {
                        books.map((book, i) => {
                            return (
                                <div className="book flex flex-col gap-2 cursor-pointer h-72 w-64">
                                    <div className="bookimage h-64 w-56 bg-[#FBF4E8] flex items-center justify-center rounded-md">
                                        <img src={book.imgSrc} width={210} alt="" />
                                    </div>
                                    <div className="info-about-book poppins-medium w-64">
                                        <h5 className='text-[0.9rem] '>
                                            {book.title}
                                        </h5>
                                        <p className='text-[0.7rem]'>{book.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* a single review  */}
            <div className="w-100%] mx-auto testmanial mt-5 ">
                <Testimonial />
            </div>
            {/* why choose us  */}
            <div className="why-choose-us mt-5 w-[85%] mx-auto flex flex-col gap-10">
                <div className="750 flex items-center justify-around gap-20 flex-col md:flex-row">
                    <img src="https://images.prismic.io/wonderbly/ede78372-fe36-4dd9-b63a-056b2264979a_WAY_Partial_EN_02.gif?fit=crop&q=90&w=625&h=491" width={500} alt="" />
                    <div className="desc poppins-regular flex flex-col gap-10">
                        <h4 className='text-xl'>Choose from over 750 different adventurers</h4>
                        <p className='sm:w-[80%] text-gray-600 poppins-light w-full'>From braids to curls, and dark skin to light, bring your little character to life by choosing from a range of natural skin tones and hairstyles. Every character is hand-drawn by bestselling illustrator Marija Tiurina.</p>
                    </div>
                </div>
                <div className="deli flex items-center sm:flex-col-reverse flex-col justify-around gap-20  md:flex-row-reverse">
                    <img src="https://images.prismic.io/wonderbly/e4033ee2-4a02-49e8-a272-15202f61174a_WAY_Partial_EN_01.png?fit=crop&q=90&w=625&h=491" width={500} alt="" />
                    <div className="desc poppins-regular flex flex-col gap-10">
                        <h4 className='text-xl'>Deliciously detailed search-and-find</h4>
                        <p className='sm:w-[80%] text-gray-600 poppins-light w-full'>With so much to see, kids will get lost in the illustrations for hours. Try it yourself, above – can you find the walking egg, pigeon doctor and laid-back walrus?</p>
                    </div>
                </div>
                <div className="deli flex items-center  justify-around gap-20 flex-col sm:flex-row">
                    <img src="https://images.prismic.io/wonderbly/5f73edf3-4183-4870-975b-cb6cedcd26b1_Partial+9_Series_WAY.png?fit=crop&q=90&w=625&h=491" width={500} alt="" />
                    <div className="desc poppins-regular flex flex-col gap-10">
                        <h4 className='text-xl'>Collect the whole set of adventures</h4>
                        <p className='sm:w-[80%] text-gray-600 poppins-light w-full'>Screens don’t stand a chance with awesome search-and-find books around. Save 30% when you buy 2 or more books in the series in the series with code EPICBUNDLE, and send them on even more epic adventures.</p>
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
            {/* make book for today  */}
            <div className="make-books w-[85%] mx-auto mt-4 flex flex-col gap-5">
                <h4 className='caveat text-2xl'>Who would you like to make a book for today?</h4>
                <div className="similar-books-here flex items-center gap-10 overflow-x-auto">
                    {
                        childrens.map((child, i) => {
                            return (
                                <div className="book rounded-sm flex gap-2 cursor-pointer relative h-72 w-64">
                                    <div className="bookimage  relative h-64 w-56  bg-[#FBF4E8] flex flex-col items-center justify-center rounded-md">
                                        <div className="info-about-book poppins-medium w-64">
                                            <p className='text-[1rem]  absolute top-[10%] left-[30%]'>{child.desc}</p>
                                        </div>
                                        <img src={child.imgSrc} width={210} className='w-full bg-contain h-full' alt="" />
                                        <button className='bg-black rounded-sm shadow-md p-2 py-1 text-white absolute top-[70%]'>Explore</button>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* sign up section  */}
            <div className="signup-section ">
                <SignUpSection />
            </div>
            <div className="footer w-full">
                <Footer />
            </div>
        </div>
    )
}

export default Home