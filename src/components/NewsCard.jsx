import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaBookmark, FaHeart, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsCard = ({ singleNews }) => {
    const { title, total_view, author, image_url, details, rating } = singleNews;
    return (
        <div>
            <div className="w-9/12 mx-auto  bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">

                {/* Header */}
                <div className="flex items-center justify-between px-4 py-2 pt-4 bg-base-300">
                    <div className="flex items-center space-x-3">
                        <img
                            className="w-12 h-12 rounded-full object-cover bg-base-100 p-1 shadow-2xl"
                            src={author.img}
                            alt="Author"
                        />
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                                {author.name}
                            </h3>
                            <p className="text-xs text-gray-400">{author.published_date}</p>
                        </div>
                    </div>
                    <div className="flex space-x-2 text-gray-500">
                        <FaHeart size={20} className='cursor-pointer' />
                        <FaShareAlt size={20} className='cursor-pointer' />
                        <FaBookmark size={20} className='cursor-pointer' />


                    </div>
                </div>

                {/* Title */}
                <div className="px-4 py-3 hover:underline">
                    <Link className="text-4xl  text-gray-900 leading-snug">
                        {title}
                    </Link>
                </div>

                {/* Image */}
                <div className="w-full px-4">
                    <img
                        className="w-full h-100 object-cover rounded-lg p-15"
                        src={image_url}
                        alt="News"
                    />
                </div>

                {/* Description */}
                <div className="px-6 py-5 text-sm text-gray-700">
                    {details.length > 300 ? (
                        <>
                            {
                                details.slice(0, 300)
                            }...
                            <span className="text-blue-600 font-semibold cursor-pointer ml-1">
                                Read More
                            </span>
                        </>
                    ): (details
                    )}

                </div>

                {/* Footer */}
                <div className="px-4 pb-4 flex items-center justify-between bg-base-300 py-3">
                    <div className="flex items-center text-yellow-400 space-x-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <i className="fas fa-star-half-alt"></i>
                        <span className="text-gray-700 ml-2 font-medium">{rating.number}</span>
                    </div>
                    <div className="flex items-center text-gray-500 space-x-1">
                        <i className="fas fa-eye"></i>
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;