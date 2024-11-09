import React from 'react'
import { FaReply } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
const Review = ({name,comment,date,stars,reply}) => {
    return (
        <div className="review  p-2 flex flex-col gap-3">
            <div className="line w-full h-[2px] bg-gray-600"></div>
            <div className="nameNtime flex items-center gap-2">
                <p className="name">{name}</p>
                <p className='text-[0.7rem] text-gray-500'>{date}</p>
            </div>
            <div className="stars flex items-center gap-1">
                {
                    [...Array(stars)].map((_, i) => {
                        return (
                            <p className='bg-green-600 text-white p-1 flex items-center justify-center rounded-sm'><IoIosStar size={10} /></p>
                        )
                    })
                }
            </div>
            <div className="comment">
                <p>{comment}</p>
            </div>
            <div className="reply bg-gray-200 w-2/3 rounded-md p-2">
                <p className='text-xl poppins-medium text-black flex items-center gap-3'><FaReply color='green' fontSize={22} />Reply from admin</p>
                <p className='poppins-regular text-[0.7rem]'>{reply}</p>
            </div>
            <div className="line w-full h-[2px] bg-gray-600"></div>
        </div>
    )
}

export default Review