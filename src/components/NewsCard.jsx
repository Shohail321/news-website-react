import React from 'react';
import { CiStar } from 'react-icons/ci';

const NewsCard = ({ singleNews }) => {
    const {title, total_view, author, image_url, details, rating } = singleNews;
    return (
        <div>
            <div className="w-8/12 mx-auto  bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Header */}
                <div className="flex items-center justify-between px-4 pt-4">
                    <div className="flex items-center space-x-3">
                        <img
                            className="w-10 h-10 rounded-full object-cover"
                            src={author.img}
                            alt="Author"
                        />
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900">
                                {author.name}
                            </h3>
                            <p className="text-xs text-gray-500">{author.published_date}</p>
                        </div>
                    </div>
                    <div className="flex space-x-2 text-gray-500">
                        <button>
                            <i className="fas fa-share-alt"></i>
                        </button>
                        <button>
                            <i className="far fa-bookmark"></i>
                        </button>
                    </div>
                </div>

                {/* Title */}
                <div className="px-4 py-3">
                    <h2 className="text-lg font-bold text-gray-900 leading-snug">
                       {title}
                    </h2>
                </div>

                {/* Image */}
                <div className="w-full">
                    <img
                        className="w-full h-48 object-cover"
                        src={image_url}
                        alt="News"
                    />
                </div>

                {/* Description */}
                <div className="px-4 py-3 text-sm text-gray-700">
                    {details}
                    <span className="text-blue-600 font-semibold cursor-pointer ml-1">
                        Read More
                    </span>
                </div>

                {/* Footer */}
                <div className="px-4 pb-4 flex items-center justify-between">
                    <div className="flex items-center text-yellow-400 space-x-1">
                    <CiStar  className=' text-yellow-400 fill-current'/>
                    <CiStar />
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